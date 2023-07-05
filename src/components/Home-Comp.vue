<template>
  <body class="back-img">
    <!-- LANDING SECTION  -->
    <div class="landing-container">
      <section>
  <div class="margin"></div>
  <section>
    <h1 data-text="Welcome to my portfolio." class="text-light text-center fw-bold" id="h1"></h1>
    <div class="welcome-message"><span class="text-light display-3 text-center">I am an aspiring stack<br>stack developer.</span></div>
   </section>

   </section>
    </div>
    <main>
        <div class="card-container">
            <div class="row row-cols-1 row-cols-md-3 px-5 justify-content-center text-center ">
                <div class="col mb-3">
                  <div class="card h-100">
                    <img src="https://i.postimg.cc/qMGB7NZD/wallpaperflare-com-wallpaper-17.jpg" class="card-img-top" alt="profile" loading="lazy">
                    <div class="card-body">
                      <h4 class="card-title">Profile</h4>
                      <span class="card-button"><button class="p-1 bg-dark"><router-link to="/about" class="text-decoration-none">More about me</router-link></button></span>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card h-100">
                    <img src="https://i.postimg.cc/W13VbXZt/wallpaperflare-com-wallpaper-15.jpg" class="card-img-top" alt="projects" loading="lazy">
                    <div class="card-body">
                      <h4 class="card-title">Projects</h4>
                      <span class="card-button"><button class="p-1 bg-dark"><router-link to="/projects" class="text-decoration-none">Projects</router-link></button></span>
                    </div>
                  </div>
                </div>
                <div class="col mb-3">
                  <div class="card h-100">
                    <img src="https://i.postimg.cc/Yq8kHJhJ/pngtree-graduation-testimonials-board-background-material-image-142880.jpg" class="card-img-top " alt="testimonials" loading="lazy">
                    <div class="card-body">
                      <h4 class="card-title">Testimonial</h4>
                      <span class="card-button"><button class="p-1 bg-dark"><router-link to="/testimonial" class="text-decoration-none">Testimonials</router-link></button></span>
                    
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
      </main>
    <!-- end of landing section -->
  </body>
</template>

<script>
export default {};
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/aferd');  

*{
    font-family: 'aferd', sans-serif !important;                                             
}

body {
  overflow-x: hidden;
  min-height: 100vh;
}

.margin{
padding-top: 3rem;
}
.back-img{

    background-image: url("https://i.postimg.cc/tC0JMQrC/wallpaperflare-com-wallpaper-5.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    image-rendering: optimizeSpeed;
}

/* WELCOME MESSAGE */
.welcome-message {
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate ;
    animation: glow 1s ease-in-out infinite alternate ;
  }
 @keyframes glow {
    from {
      text-shadow: 0 0 20px #c017a9, 0 0 30px #470dce, 0 0 40px #d711af, 0 0 50px;
    }
    to {
      text-shadow: 0 0 20px #2b04b7e1, 0 0 30px #cf2278, 0 0 40px #9a07df,
        0 0 50px #d52e82 ;
    }
  }

/* NEON FONT */
  section {
    width: 100%;
  }
  #h1 {
    font-size: 70px !important;
    color: var(--var-color);
    position: relative;
  }
  #h1::before {
    content: attr(data-text);
    text-shadow: 0px 0px 30px rgb(39, 20, 177);
    filter: blur(0px) brightness(0);
    animation: flicker 2s linear forwards;
    animation-delay: 0.2s;
  }
  @keyframes flicker {
    0% {
      filter: blur(0px) brightness(1);
    }
    3% {
      filter: blur(0px) brightness(0);
    }
    6% {
      filter: blur(0px) brightness(0);
    }
    7% {
      filter: blur(0px) brightness(1);
    }
    8% {
      filter: blur(0px) brightness(0);
    }
    9% {
      filter: blur(0px) brightness(1);
    }
    10% {
      filter: blur(0px) brightness(0);
    }
    20% {
      filter: blur(0px) brightness(1);
    }
    50% {
      filter: blur(0px) brightness(1);
    }
    99% {
      filter: blur(0px) brightness(0);
    }
    100% {
      filter: blur(0px) brightness(1);
    }
  }

.card {
  border: solid 2px black !important;
}
.card-container{
  padding-top: 1rem;
}
img {
  height: 300px;
}

.margin {
  padding-top: 6rem;
}

@media only screen and (max-width:300px){
  h1{
    font-size:small !important;
  }
}

</style>
