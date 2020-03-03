<template>
    <div v-if="pageCount">
      <div>
        <select name="" id="" @change="changePageSize($event)">
          <option value="4">4 per page</option>
          <option value="8">8 per page</option>
          <option value="12">12 per page</option>
        </select>
        <button v-for="i in pageNumbers"
                :key="i"
                :class="{'btn-primary': i === currentPage}"
                @click="setCurrentPage(i)"
        >
              {{ i }}
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
      return this.pageCount;
    },
  },
  methods: {
    ...mapMutations(['setCurrentPage', 'setPageSize']),
    changePageSize($event) {
      console.log($event.target.value);
      this.setPageSize(Number($event.target.value));
    },
  },
};
</script>

<style scoped>

</style>
