<template>
    <body class="back-img">
    <h1 class="pt-5 text-center fw-bold display-4">Contact Me</h1>
        <!--Section: Contact v.2-->
<section class="mb-5 mt-3">

<div class="row my-auto px-5">

    <!--Grid column-->
    <div class="col-md-10 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="https://formspree.io/f/xeqbjwzr" method="POST">

            <!--Grid row-->
            <div class="row ">

                <!--Grid column-->
                <div class="col-md-6 pt-1">
                    <label for="name" class="pb-1 fs-5">Your name</label>
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control border-2 border border-dark" placeholder="Enter your name" required oninvalid="this.setCustomValidity('Please enter a valid name')">
                        
                    </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 pt-1">
                    <div class="md-form mb-0">
                        <label for="email" class="pb-1 fs-5">Your email</label>
                        <input type="text" id="email" name="email" class="form-control border-2 border border-dark" placeholder="Enter your email" required oninvalid="this.setCustomValidity('Please enter a valid email address')">
                       
                    </div>
                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
                <div class="col-md-12 pt-1">
                    <div class="md-form mb-0">
                        <label for="form_need" class="fs-5 pb-1">Subject</label>
                                <select id="form_need" name="need" class="form-control border-2 border border-dark" required="required" data-error="Please specify your gender." required oninvalid="this.setCustomValidity('Please select a valid gender')">
                                    <option value="" selected disabled>--Select your gender--</option>
                                    <option >Male</option>
                                    <option >Female</option>
                                    <option >Other</option>
                                </select>
                       
                    </div>
                </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-12 pt-1">

                    <div class="md-form">
                        <label for="message" class="fs-5 pb-1">Your message</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control border-2 border border-dark md-textarea" placeholder="Enter your message" required oninvalid="this.setCustomValidity('Please enter a valid message')"></textarea>
                       
                    </div>

                </div>
            </div>
            <!--Grid row-->

        </form>

        <div class="text-center text-md-left mt-3">
            <a class="btn btn-success px-4" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-2 text-center mx-auto my-auto">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Cape Town, South Africa</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+27 123 4567</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>marcelbrown413@gmail.com</p>
            </li>
        </ul>
    </div>
    <!--Grid column-->

</div>

</section>
<!--Section: Contact v.2-->
    </body>
</template>

<script>
export default{
    
}
</script>

<style scoped>
*{
    overflow: hidden;
}



.back-img{
    background-image: url("https://i.postimg.cc/y8Y137M1/wallpaperflare-com-wallpaper-22.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    image-rendering: optimizeSpeed;
}

.heading{
    font-size: 100px !important;
}
</style>
