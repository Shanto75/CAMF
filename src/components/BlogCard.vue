<template>
  <div class="card bg-dark text-light bg-gradient">
    <img :src="img" class="card-img-top" alt="..." />
    <h2 class="card-header">{{ title }}</h2>
    <div class="card-body">
      <!-- <h4 class="card-title">{{ title }}</h4> -->
      <span>Date: {{ date }}</span><br><br>
      <p class="card-text" v-html="details"></p>
      <a href="#" class="btn btn-primary">View Details</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    date: String,
    title: String,
    details: String,
  },
  name: "BlogCard",
};
</script>
