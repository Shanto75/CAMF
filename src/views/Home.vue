<template>
  <Slider/>
  <About/>
</template>

<script>
import Slider from "../components/Slider";
import About from "../components/About";
export default {
  name: "Home",
  components: {
    Slider,
    About
  },
};
</script>