<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="product.imageUrl" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ product.name }}</div>
        <p class="lead text-justify">{{ product.content }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">${{ product.price }}</p>
        </div>
        <AddToCart :product="product" v-if="user.uid" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../../components/details/AddToCart"
export default {
  data () {
    return {
      isInCardProp: false,
    }
  },
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"])
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails"]),
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
  }
};
</script>

<style>
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}
</style>