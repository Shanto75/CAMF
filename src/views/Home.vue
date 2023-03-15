<template>
  <Slider/>
  <About/>
  <Services/>
</template>

<script>
import Slider from "../components/Slider";
import About from "../components/About";
import Services from "../components/Services";

export default {
  name: "Home",
  components: {
    Slider,
    About,
    Services
  },
};
</script>