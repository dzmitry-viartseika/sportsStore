<template>
    <div v-if="pageCount">
      <div>
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
    ...mapMutations(['setCurrentPage']),
  },
};
</script>

<style scoped>

</style>
