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
            <router-link class="nav-link scrollto" active-class="active" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link scrollto"
              active-class="active"
              to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link scrollto"
              active-class="active"
              to="/services"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link scrollto"
              active-class="active"
              to="/portfolio"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link scrollto"
              active-class="active"
              to="/blogs"
              >Blogs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link scrollto"
              active-class="active"
              to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
        <i
          @click="toggleNavbar()"
          class="bi bi-list mobile-nav-toggle text-light"
        ></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleNavbar() {
      document.querySelector("#navbar").classList.toggle("navbar-mobile");
      document.querySelector(".mobile-nav-toggle").classList.toggle("bi-list");
      document.querySelector(".mobile-nav-toggle").classList.toggle("bi-x");
    },
  },
};
</script>
