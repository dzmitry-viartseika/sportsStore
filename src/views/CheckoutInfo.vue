<template>
    <div class="v-checkout">
      <ValidationProvider rules="name"  v-slot="{ errors }">
        <label for="name">
          <span>Name:</span>
          <div><input type="text"
                      v-model="order.name"
          ></div>
          <span class="errors">{{ errors[0] }}</span>
        </label>
      </ValidationProvider>
      <ValidationProvider rules="surname"  v-slot="{ errors }">
        <label for="surname">
          <span>Surname:</span>
          <div><input type="text"
                      v-model="order.surname"
          ></div>
          <span class="errors">{{ errors[0] }}</span>
        </label>
      </ValidationProvider>
      <ValidationProvider rules="address"  v-slot="{ errors }">
        <label for="address">
          <span>Address:</span>
          <div><input type="text"
                      v-model="order.address"
          ></div>
          <span class="errors">{{ errors[0] }}</span>
        </label>
      </ValidationProvider>
      <ValidationProvider rules="city"  v-slot="{ errors }">
        <label for="city">
          <span>City:</span>
          <div><input type="text"
                      v-model="order.city"
          ></div>
          <span class="errors">{{ errors[0] }}</span>
        </label>
      </ValidationProvider>
      <ValidationProvider rules="zip"  v-slot="{ errors }">
        <label for="zip">
          <span>Zip:</span>
          <div><input type="text"
                      v-model="order.zip"
          ></div>
          <span class="errors">{{ errors[0] }}</span>
        </label>
      </ValidationProvider>
      <div class="v-checkout-buttons">
        <button @click="backToCart()">Back</button>
        <button @click="ordered()" :disabled="!validationFields">Send order</button>
      </div>
    </div>
</template>

<script>
import { extend } from 'vee-validate';

export default {
  name: 'CheckoutInfo',
  data() {
    return {
      order: {
        name: '',
        surname: '',
        address: '',
        city: '',
        zip: '',
      },
    };
  },
  computed: {
    validationFields() {
      if (this.order.name && this.order.surname && this.order.address && this.order.city && this.order.zip) {
        return true;
      } return false;
    },
  },
  methods: {
    backToCart() {
      this.$router.push('/cart');
    },
    ordered() {
      this.$router.push('/thanks');
    },
  },
};

extend('name', {
  validate: (name) => {
    if (name !== '' && name.length >= 2 && name.length <= 60) {
      return true;
    }
    return 'Username should contain 2-60 characters';
  },
  required: true,
  computesRequired: true,
});

extend('surname', {
  validate: (surname) => {
    if (surname !== '' && surname.length >= 2 && surname.length <= 60) {
      return true;
    }
    return 'Surname should contain 2-60 characters';
  },
  required: true,
  computesRequired: true,
});

extend('address', {
  validate: (address) => {
    if (address !== '' && address.length >= 2 && address.length <= 60) {
      return true;
    }
    return 'Address should contain 2-60 characters';
  },
  required: true,
  computesRequired: true,
});

extend('city', {
  validate: (city) => {
    if (city !== '' && city.length >= 2 && city.length <= 60) {
      return true;
    }
    return 'City should contain 2-60 characters';
  },
  required: true,
  computesRequired: true,
});

extend('zip', {
  validate: (zip) => {
    if (zip !== '' && zip.length >= 2 && zip.length <= 60) {
      return true;
    }
    return 'Zip code should contain 2-60 characters';
  },
  required: true,
  computesRequired: true,
});

</script>

<style scoped lang="scss">
  .v-checkout {
    display: flex;
    flex-direction: column;
  }

  .errors {
    color: red;
  }
</style>
