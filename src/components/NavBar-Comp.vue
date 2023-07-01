<template>
     <header>
    <div class="nav-container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="header1">
            <h1 class="display-3 text-light fw-bold">Marcel Brown</h1>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto fs-3">
              <li class="nav-item">
                 <router-link to="/" 
                  class="nav-link"
                  aria-current="page"
                  target="_self"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/products" 
                  class="nav-link"
                  aria-current="page"
                  target="_self"
                  >Projects</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/admin"
                  class="nav-link"
                  aria-current="page"
                  target="_self"
                  >Testimonial</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/conatct" 
                  class="nav-link"
                  target="_self"
                  >Contact</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/about" 
                  class="nav-link"
                  target="_self"
                  >About</router-link
                >
              </li>
            </ul>
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

</style>