<template>
  <Header />
  <router-view></router-view>
  <!-- <Spinner /> -->
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Spinner from "./components/Spinner";

export default {
  name: "App",
  components: {
    Header,
    About,
    Footer,
    Spinner
  },
};
</script>