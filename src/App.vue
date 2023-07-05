<template>
<NavBarComp/>
  <router-view/>
  <FooterComp/>

  <head>
     <!-- Font Awesome -->
     <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      rel="stylesheet"
    />
</head>
</template>

<script>
import FooterComp from './components/Footer-Comp.vue';
import NavBarComp from './components/NavBar-Comp.vue';
export default {
components: {NavBarComp, FooterComp}
}
</script>

<style>

@import url('https://fonts.cdnfonts.com/css/aferd');  

header {
    font-family: 'aferd', sans-serif !important;                                             
}
body {
    font-family: 'aferd', sans-serif !important;                                             
}
footer {
    font-family: 'aferd', sans-serif !important;                                             
}

nav a.router-link-exact-active {
  color: #42b983;
}

*{
  padding: 0;
  margin: 0;
}

body {
  overflow-x: hidden;
}

</style>
