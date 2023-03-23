<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

export default {
  name: "App",
  components: {
    Header,
    About,
    Footer
  },
};
</script>