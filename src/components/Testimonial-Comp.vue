<template>
  <body class="back-img">


   <div class="row row-cols-1 row-cols-md-3 g-4 h-100">
      <div class="col mb-4 px-5"  v-for="testimonials in testimonials"
        :key="testimonials.id">
        <div class="card bg-secondary text-dark h-100 ">
          <img
            src="testimonials.imgSrc"
            loading="lazy"
            class="card-img-top"
            alt="testimonials.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ testimonials.name }}</h5>
            <p class="card-text">{{ testimonials.description }}</p>
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

</style>
