<template>
  <header id="header" class="bg-dark fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <!-- Uncomment below if you prefer to use an text logo -->
        <!-- <h1><a class="text-light" href="index.html">chhahera azim mollah foundation</a></h1> -->
        <a href="index.html"
          ><img src="./../assets/photos/logo.png" alt="" class="img-fluid"
        /></a>
        <!-- <h1><a class="text-light" href="index.html">CAMF</a></h1> -->
      </div>

      <nav id="navbar" class="nav bg-dark">
        <ul class="nav nav-pills bg-dark">
          <li class="nav-item">
            <a class="nav-link scrollto" href="#hero">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollto" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollto" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollto" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollto" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollto" href="#contact">Contact</a>
          </li>
        </ul>
        <i @click="toggleNavbar()" class="bi bi-list mobile-nav-toggle text-light"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <section id="hero" class="clearfix">
    <div class="container" data-aos="fade-up">

      <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
        <!-- <img src="assets/img/hero-img.svg" alt="" class="img-fluid"> -->
      </div>

      <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
        <h2>We provide<br><span>solutions</span><br>for your business!</h2>
        <div>
          <!-- <a href="#about" class="btn-get-started scrollto">Get Started</a> -->
          <a href="#services" class="btn-services scrollto">Our Services</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleNavbar() {
      document.querySelector('#navbar').classList.toggle("navbar-mobile");
      document.querySelector('.mobile-nav-toggle').classList.toggle("bi-list");
      document.querySelector('.mobile-nav-toggle').classList.toggle("bi-x");
    }
  }
};
</script>

