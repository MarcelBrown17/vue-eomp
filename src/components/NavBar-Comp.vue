<template>
     <header>
    <div class="nav-container pb-4">
      <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <h1 class="navbar-brand">Marcel Brown</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fs-3" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" >Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonial" class="nav-link" >Testimonial</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" >Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" >About</router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  </header>
</template>

<script>

export default {

}
</script>

<style>
.navbar-brand {
  font-size: 40px !important;
  font-weight: bold;
}

@media only screen and (max-width: 300px) {

.navbar-brand {font-size: 20px !important;}
}

</style>
