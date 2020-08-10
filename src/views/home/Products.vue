<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "../../components/products/ProductCard";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style>
</style>