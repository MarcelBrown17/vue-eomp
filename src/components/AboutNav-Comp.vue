<template>
  <body class="back-img">
    <div class="nav-container">
      <ul class="nav nav-tabs pt-5 px-5 mx-auto border-0" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Skills</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Education</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link  " id="work-exp-tab" data-bs-toggle="tab" data-bs-target="#work-exp" type="button" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <!-- Content -->
<div class="row my-auto py-5 mx-auto my-auto">
  <div class="col-md-1">
  </div>
  <div class="col-md-3 fs-5 fw-bold my-auto d-inline" id="profile-card">
    
                          <h1>Profile</h1>
                         <div class="profile-card fluid"> <img src="https://i.postimg.cc/sf5mq9r1/c12-marcel-brown-1.jpg" class="Marcel rounded-3" loading="lazy" alt="Marcel"></div>
                          <p class="text-info">Name: <span class="text-light">Marcel</span></p>
                          <p class="text-info">Surname: <span class="text-light">Brown</span></p>
                          <p class="text-info">Gender: <span class="text-light">Male</span></p>
                          <p class="text-info">DOB: <span class="text-light">01/05/2004</span></p>
                          <p class="text-info">Address: <span class="text-light">13 Alpine Way,<br> Matroosfontein</span></p>
                          <p class="text-info">Email: <br><span class="text-light" id="email">marcelbrown413@gmail.com</span></p>
                          <p class="text-info">Github: <span class="text-light" id="git"><br>MarcelBrown17</span></p>
    </div>
    <!--Grid column-->
    <div class="col-md-1"></div>
    <div class="col-md-6 mb-md-0 mb-5">
      <div class="p-2 mb-2 text-light text-center">
                      <h1 class="text-light">Biography</h1>
                      <div class="fs-5 text-light">I am Marcel Brown(19 years old), I live in Matroosfontein,Elsies River.I am a dynamic and well-rounded individual with a variety of interests. With a passion for sports, coding, and gaming, I have a curious and analytical mind that enjoys exploring different challenges and opportunities. My religious beliefs and family also provide me with a sense of meaning and purpose, which helps guide my actions and decisions. Overall, your diverse interests and strong values make you a unique and interesting person to get to know.<br/>
                        My love for coding came from my friend because when I witnessed him build his own website and I fell in love with coding the momemt i saw his website.
                        Coding is my passion. I love the challenge of problem-solving and the satisfaction of seeing my ideas come to life.
                      </div>
                    </div>
    <!--Grid column-->
    </div>
    <!--Grid column-->
    <div class="col-md-1"></div>
  </div>

</div>

<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
</div>

<div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex consequuntur, possimus, odio, culpa cupiditate dolorum nostrum atque laboriosam ea et expedita voluptatibus tempore a adipisci qui impedit optio. Fugiat?</div>

<div class="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">qwerghn</div>

</div>
    </div>
  </body>
</template>

<script>
export default {
    
}

</script>

<style scoped>

body {
  color: white;
}

.back-img{
   background-image: url("https://i.postimg.cc/ZRgBJYbq/wallpaperflare-com-wallpaper-5.jpg");
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   image-rendering: optimizeSpeed;
}
.nav-container {
padding-top: 3rem !important;
margin: auto !important;
width: 100%;
}

.Marcel{
  height: 20rem !important;
  width: 17rem !important;
  padding-bottom: 1rem !important;
  margin: auto !important;
}



@media only screen and (max-width: 300px) {
  .Marcel {
  height: 20rem !important;
  margin: auto !important;
  }
  #email {
  font-size: 11px !important;

  }

.nav nav-tabs{
  display: flex !important;
flex-direction: column !important;
margin: auto !important;
}
.tab-content {
  margin: auto !important;
}


}
</style>