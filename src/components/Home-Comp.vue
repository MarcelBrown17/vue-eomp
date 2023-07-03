<template>
           <body class="back-image1">
              <!-- MAIN SECTION/ LANDING SECTION  -->
              <div class="landing-container"> 
            <div class="p-5 mb-4 rounded-3 border-2">
           <div class="container-fluid py-5">
             <h1 class="display-5 fw-bold">I am an aspiring stack developer</h1>
             <p class="col-md-8 fs-4">
              I am a well-rounded individual who enjoys a range of activities, including sports, coding, and gaming. I have a passion for challenging myself and developing new skills, whether it's on the field or in front of a computer screen.
             </p>
             <button type="button" class="btn btn-dark rounded-3"><router-link to="/about" class="text-decoration-none text-light">More about me</router-link></button>
           </div>
         </div>
       </div>
             <!-- end of main -->
           </body>
</template>

<script>
export default {

}
</script>

<style scoped>

body{
  overflow-x:hidden;
}

.back-image1 {
    background-image: url("");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    image-rendering: optimizeSpeed;
}

</style>
