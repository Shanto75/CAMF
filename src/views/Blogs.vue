<template>
  <Cover />
  <section class="bg-dark">
    <div class="container">
      <div v-if="loading">
        <div class="p-5">
          <p class="d-flex flex-column gap-3 card-text placeholder-glow">
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
            <span
              class="placeholder bg-secondary rounded"
              :class="['col-' + Math.floor(Math.random() * 6)]"
            ></span>
          </p>
        </div>
      </div>

      <div class=" pt-4 d-flex flex-wrap">
        <div class="p-2" v-for="item in blogs" :key="item.id">
          <BlogCard
            :key="item.id"
            :img="item?._embedded?.['wp:featuredmedia']?.[0]?.source_url"
            :date="item.date"
            :title="item.title.rendered"
            :details="item.content.rendered"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cover from "../components/Cover";
import BlogCard from "../components/BlogCard";

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
    BlogCard,
  },
  methods: {
    async getData() {
      const res = await fetch(this.$apibaseurl + "/posts?_embed");
      const data = await res.json();
      this.blogs = data;
      this.loading = false;
        // console.log(data[0]._embedded['wp:featuredmedia']['0'].source_url);
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
