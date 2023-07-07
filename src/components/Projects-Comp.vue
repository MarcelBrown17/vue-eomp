<template>
    <body class="back-img">
        <div class="heading display-5 text-light pt-5 px-5">Projects</div>
        <div class="row row-cols-1 row-cols-md-3 g-4 h-100 pt-5">
      <div class="col mb-4 px-5"  v-for="projects in projects"
        :key="projects.id">
        <div class="card  h-100 ">
          <img
            :src="projects.imgSrc"
            loading="lazy"
            class="card-img-top h-90"
            alt="projects.name"
          />
          <div class="card-body text-light text-center pb-1 mx-auto my-auto">
            <h5 class="card-title">{{ projects.name }}</h5>
            <a
            class="btn btn-dark btn-floating m-1 px-4 py-2"
            style="background-color: #000000"
            :href="projects.github"
            role="button"
            target="_blank"
            > <i class="fab fa-github"></i
          ></a>
            <a
            class="btn btn-dark btn-floating m-1 px-4 py-2"
            style="background-color: #000000"
            :href="projects.websiteLink"
            role="button"
            target="_blank"
            > <i class="bi bi-server"></i
          ></a>
           
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProject");
  },
};
</script>

<style scoped>

.back-img{
min-height: 100vh;
    background-image: url("https://i.postimg.cc/Pq0T7YPJ/wallpaperflare-com-wallpaper-23.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    image-rendering: optimizeSpeed;
}

.card {
    background-color: #161515;
}

.heading {
padding-top: 60px !important;
}

@media only screen and (max-width: 300px) {

.heading {
    text-align: center;
    padding-top: 0;
}
}

</style>