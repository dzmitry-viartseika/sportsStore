<template>
    <div class="product">
      <div class="product-category">
        <div class="product-category__title">CATEGOTY</div>
        <div v-for="(category,i) in categories"
             :key="i"
             class="product-category__item"
             :class="{'product-category__item_active': category.text === currentCategory}"
             @click="setCurrentCategory(category.text)"
        >
          {{ category.text }}
        </div>
      </div>
      <div class="product-list">
        <div class="product-list-item"
             v-for="product in processedProducts"
             :key="product.id"
        >
          <h4 class="product-list-item__title">{{ product.name }}</h4>
          <span class="product-list-item__price">{{ product.price }}</span>
          <div class="product-list-item__desc">{{ product.description }}</div>
          <button>Add to Cart</button>
        </div>
        <pageControls></pageControls>
      </div>
    </div>
</template>

<script>
import {
  mapGetters, mapActions, mapMutations, mapState,
} from 'vuex';
import pageControls from './pageControls.vue';

export default {
  name: 'ProductsList',
  components: {
    pageControls,
  },
  computed: {
    ...mapState(['currentCategory']),
    ...mapGetters(['productList', 'filteredProducts', 'processedProducts', 'categories', 'productsFilteredByCategory']),
  },
  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories']),
    ...mapMutations(['setCurrentCategory']),
  },
  mounted() {
    this.fetchProducts();
    this.fetchCategories();
  },
};
</script>

<style scoped lang="scss">
  .product {
    display: flex;
    flex-direction: row;
    &-category {
      width: 20%;
      background: green;
      padding: 5px;
      &__item {
        width: 100%;
        height: 60px;
        background: lightslategray;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        &_active {
          background: red;
        }
      }
    }
    &-list {
      width: 100%;
      background: gray;
      padding: 20px;
      &-item {
        text-align: left;
        padding: 20px;
        background: white;
        border: 1px solid green;
        margin-bottom: 5px;
        position: relative;
        &__price {
          position: absolute;
          right: 5px;
          top: 5px;
          background: blueviolet;
          border-radius: 20px;
          padding: 10px;
          min-width: 80px;
          text-align: center;
          color: white;
        }
      }
    }
  }
</style>
