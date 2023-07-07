<template>
  <body class="back-img">
    <div class="container">
      <div class="text-light pb-5">
        <span class="heading">Testimonials</span>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        <div
          class="col mb-4 p-auto"
          id="card"
          v-for="testimonials in testimonials"
          :key="testimonials.id"
        >
          <div class="card bg-dark text-light h-100">
            <img
              :src="testimonials.imgSrc"
              loading="lazy"
              class="card-img-top"
              alt="testimonials.name"
            />
            <div class="card-body">
              <h5 class="card-title">{{ testimonials.name }}</h5>
                <button class="px-1"><a href="#demo" class="text-decoration-none text-dark" data-bs-toggle="collapse">More</a>
<div id="demo" class="collapse">
  <p class="card-text">{{ testimonials.description }} </p>
</div></button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonial");
  },
};
</script>

<style scoped>
.back-img {
  min-height: 100vh;
  background-image: url("https://i.postimg.cc/T37RrZxr/wallpaperflare-com-wallpaper-21.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  image-rendering: optimizeSpeed;
}

.container {
  padding-top: 5rem !important;
  margin: auto !important;
}

.card-img-top {
  height: 30rem;
}

.heading {
  font-size: 40px !important;
}

@media only screen and (max-width: 300px) {
  .card-img-top {
    height: 18rem !important;
  }
  .heading {
    font-size: 25px !important;
  }
}
</style>
