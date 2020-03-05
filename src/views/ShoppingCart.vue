<template>
    <div class="cart">
      <h1 class="cart__title">Your Cart</h1>
      <div class="cart-table"
          v-if="orderedProducts.length > 0"
      >
        <div class="cart-table__header">
          <div class="cart-table__header-item">Quantity</div>
          <div class="cart-table__header-item">Product</div>
          <div class="cart-table__header-item">Price</div>
          <div class="cart-table__header-item">Subtotal</div>
        </div>
        <div class="cart-table__content" v-for="(product,i) in orderedProducts" :key="i">
          <div class="cart-table__content-item">
            <input type="text" v-model="product.quantity">
          </div>
          <div class="cart-table__content-item">{{ product.name }}</div>
          <div class="cart-table__content-item">{{ product.price }}</div>
          <div class="cart-table__content-item">
            {{ (product.price * product.quantity).toFixed(2) }}
          </div>
          <div class="cart-table__content-item">
            <button @click="removeFromCart(i)">Remove</button>
          </div>
        </div>
        <div class="cart-table__footer">
          <div class="cart-table__footer-item cart-table__footer-item_large">Total:</div>
          <div class="cart-table__footer-item">{{ totalPrice }}</div>
        </div>
        <div class="cart-buttons">
          <button @click="proceedToBack()">Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
      <div v-else>
        Cart is empty
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ShoppingCart',
  computed: {
    ...mapGetters(['orderedProducts']),
    totalPrice() {
      const res = [];
      let result;
      if (this.orderedProducts.length) {
        this.orderedProducts.forEach((item) => {
          res.push(item.price * item.quantity);
        });
        result = res.reduce((sum, el) => {
          return sum + el;
        });
        return result.toFixed(2);
      }
      return 0;
    },
  },
  methods: {
    ...mapMutations(['removeFromCart']),
    proceedToBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
  .cart-table {
    max-width: 800px;
    &__header, &__content, &__footer {
      display: flex;
      flex-direction: row;
      &-item {
        width: 20%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
        padding: 10px;
      }
    }
    &__content input {
      width: 80%;
    }
    &__footer-item {
      &_large {
        width: 60%;
        justify-content: flex-end;
      }
    }
  }
</style>
