<script setup>
const props = defineProps({
  product: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String
    }
  }
})
</script>

<template>
  <section class="product">
    <img :alt="props.product.name" :src="props.product.img" height="70px"/>
    <h2>{{ props.product.name }}</h2>
    <p>{{ props.product.description }}</p>
  </section>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
