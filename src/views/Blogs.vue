<template>
  <Cover />
  <section class="bg-dark">
    <div class="container">
      <div v-if="loading">
        <div class="p-5">
          <p class="d-flex flex-column  card-text placeholder-glow">
            <span class="placeholder bg-primary" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-secondary" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-success" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-danger" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-warning" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-info" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-light" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
            <span class="placeholder bg-dark" :class="['col-' + Math.floor(Math.random() * 6)]"></span>
          </p>
        </div>
      </div>
      <div class="pt-5 px-2" v-for="item in blogs" :key="item.id">
        <header class="section-header">
          <h3>{{ item.title.rendered }}</h3>
        </header>
        <div v-html="item.content.rendered"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Cover from "../components/Cover";

export default {
  name: "Blogs",
  data() {
    return {
      blogs: [],
      loading: true,
    };
  },
  components: {
    Cover,
  },
  methods: {
    async getData() {
      const res = await fetch(this.$apibaseurl + "/posts");
      const data = await res.json();
      this.blogs = data;
      this.loading = false;
      //   console.log(data[0].content.rendered);
    },
    // getinfo() {
    //   const globalVar = this.$apibaseurl;
    //   console.log(this.$apibaseurl);
    // },
  },
  mounted() {
    this.getData();
    // this.getinfo();
  },
  // created() {
  //   console.log("created");
  // },
};
</script>
