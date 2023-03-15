<template>
  <Cover />
  <Service />

  <section id="why-us" class="bg-dark">
    <div class="container" data-aos="fade-up">
      <header class="section-header">
        <h3>Why choose us?</h3>
        <p>
          Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
          partiendo abhorreant vituperatoribus.
        </p>
      </header>

      <div class="row row-eq-height justify-content-center">
        <div class="col-lg-4 mb-4">
          <div class="card" data-aos="zoom-in" data-aos-delay="100">
            <i class="bi bi-calendar4-week"></i>
            <div class="card-body">
              <h5 class="card-title">Corporis dolorem</h5>
              <p class="card-text">
                Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                temporibus sunt ab inventore officiis aut voluptatibus.
              </p>
              <a href="#" class="readmore">Read more </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="card" data-aos="zoom-in" data-aos-delay="200">
            <i class="bi bi-camera-reels"></i>
            <div class="card-body">
              <h5 class="card-title">Voluptates dolores</h5>
              <p class="card-text">
                Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus
                dolorum aspernatur.
              </p>
              <a href="#" class="readmore">Read more </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="card" data-aos="zoom-in" data-aos-delay="300">
            <i class="bi bi-chat-square-text"></i>
            <div class="card-body">
              <h5 class="card-title">Eum ut aspernatur</h5>
              <p class="card-text">
                Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis
                porro in non nemo ex.
              </p>
              <a href="#" class="readmore">Read more </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Service from "../components/Services";
import Cover from "../components/Cover";

export default {
  name: "Services",
  components: {
    Service,
    Cover
  },
};
</script>
