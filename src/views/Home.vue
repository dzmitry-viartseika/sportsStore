<template>
  <div class="home">
    <HeaderTemplate></HeaderTemplate>
    <ProductList></ProductList>
  </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import ProductList from '../components/ProductsList.vue';

export default {
  name: 'Home',
  components: {
    HeaderTemplate,
    ProductList,
  },
};
</script>
