<template>
  <Header/>
  <About/>
  <Footer/>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

// import "./assets/vendor/purecounter/purecounter_vanilla.js";
// import "./assets/vendor/aos/aos.js";
// import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/vendor/glightbox/js/glightbox.min.js";
// import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "./assets/vendor/swiper/swiper-bundle.min.js";
// import "./assets/js/main.js";

export default {
  name: 'App',
  components: {
    Header,
    About,
    Footer,
  },
  // mounted(){
  //   var newScript = document.createElement("script");      
  //     newScript.setAttribute('src', './assets/vendor/purecounter/purecounter_vanilla.js');
  //     document.body.appendChild(newScript);
  // }
  // metaInfo: {
  //     script: [
  //       { src: './assets/vendor/purecounter/purecounter_vanilla.js', async: true, defer: true }
  //     ],
  //   }
  // metaInfo: {
  //   title: `SITE TITLE`,
  //     script: [
  //       { src: "./assets/vendor/purecounter/purecounter_vanilla.js", body: true },
  //       { src: "./assets/vendor/aos/aos.js",  body: true },
  //       { src: "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",  body: true},
  //       { src: "./assets/vendor/glightbox/js/glightbox.min.js",  body: true },
  //       { src: "./assets/vendor/isotope-layout/isotope.pkgd.min.js",  body: true },
  //       { src: "./assets/vendor/swiper/swiper-bundle.min.js",  body: true },
  //       { src: "./assets/js/main.js",  body: true},
  //     ],
  //   }
}
</script>

<style>
  /* @import './assets/vendor/aos/aos.css';
  @import './assets/vendor/bootstrap/css/bootstrap.min.css';
  @import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
  @import './assets/vendor/glightbox/css/glightbox.min.css';
  @import './assets/vendor/swiper/swiper-bundle.min.css';
  @import './assets/css/style.css'; */
</style>
