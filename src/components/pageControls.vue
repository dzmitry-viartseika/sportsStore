<template>
    <div v-if="pageCount">
      <div>
        <select name="" id="" @change="changePageSize($event)">
          <option value="4">4 per page</option>
          <option value="8">8 per page</option>
          <option value="12">12 per page</option>
        </select>
        <button @click="setCurrentPage(currentPage - 1)"
                :disabled="currentPage === 1"
        >
          Previus
        </button>
        <span v-if="currentPage > 4">
          <button @click="setCurrentPage(1)">
            1
          </button>
          <span>...</span>
        </span>
        <button v-for="i in pageNumbers"
                :key="i"
                :class="{'btn-primary': i === currentPage}"
                @click="setCurrentPage(i)"
        >
              {{ i }}
        </button>
        <span v-if="currentPage <= pageCount - 4">
                    <span>...</span>
          <button @click="setCurrentPage(pageCount)">
            {{ pageCount }}
          </button>
        </span>
        <button @click="setCurrentPage(currentPage + 1)"
                :disabled="currentPage === pageCount"
        >
          Next
        </button>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'pageControls',
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['pageCount']),
    pageNumbers() {
      if (this.pageCount < 4) {
        return [...Array(this.pageCount + 1).keys().slice(1)];
      } if (this.currentPage <= 4) {
        return [1, 2, 3, 4, 5];
      } if (this.currentPage > this.pageCount - 4) {
        return [...Array(5).keys()].reverse().map((v) => this.pageCount - v);
      }
      return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
    },
  },
  methods: {
    ...mapMutations(['setCurrentPage', 'setPageSize']),
    changePageSize($event) {
      this.setPageSize(Number($event.target.value));
    },
  },
};
</script>

<style scoped>

</style>
