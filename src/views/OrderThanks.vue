<template>
    <div class="v-order-thank">
      <h2>Thanks!</h2>
      <p>Thanks for placing your order, which is {{ orderedProducts.length }} item
        <span v-if="orderedProducts.length > 1">(s)
        </span>
        .</p>
      <p>We'll ship your goods as soon as possible.</p>
      <router-link to="/">Make other order</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OrderThanks',
  computed: {
    ...mapGetters(['orderedProducts']),
  },
};
</script>

<style scoped lang="scss">

</style>
