<template>
  <header class="header">
    <div class="header__logo">SPORTS STORE</div>
    <div class="header__cart"
         v-if="orderedProducts.length > 0"
         @click="proceedToCart()"
    >
      <span>
        Your cart {{ orderedProducts.length }} item
        <span v-if="orderedProducts.length > 1">(s)</span>
        $ {{ totalPrice }} </span>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HeaderTemplate',
  computed: {
    ...mapGetters(['orderedProducts', 'totalPrice']),
  },
  methods: {
    ...mapActions(['initialeCart']),
    proceedToCart() {
      this.$router.push('/cart');
    },
  },
  created() {
    this.initialeCart(this.$store);
  },
};
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    background: black;
    text-transform: uppercase;
    padding: 20px;
    text-align: left;
    color: white;
    display: flex;
    justify-content: space-between;
  }
</style>
