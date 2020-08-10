<template>
  <div class="card mb-4 shadow-sm">
    <img :src="product.imageUrl" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left">{{ product.name }}</h5>
      <div class="row">
        <router-link
          type="button"
          class="btn btn-primary btn-lg"
          :to="'/details/' + product.id"
        >Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["product"]
};
</script>

<style>
.card .product-image {
  height: 300px;
}
</style>