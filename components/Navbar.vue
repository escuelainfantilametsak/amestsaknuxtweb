<!-- Top menu -->

<template>
<!-- As a heading -->
<!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>-->


<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <!--<h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>-->
      <img class="my-0 mr-md-auto font-weight-normal" src="~/assets/logo.png" alt="Bulma">
      <nav class="nav nav-masthead justify-content-center">       
       
            <nuxt-link class="nav-link" :to="localePath('index')">Inicio</nuxt-link>
            <nuxt-link class="nav-link" :to="localePath('contacto')">Contacto</nuxt-link>
            <nuxt-link class="nav-link" :to="'/equipo'">Equipo</nuxt-link>
            <a class="nav-link" href="#">Enterprise</a>
            <a class="nav-link" href="#">Support</a>
            <a class="nav-link" href="#">Pricing</a>
       
      </nav>
      
      <a class="btn btn-outline-primary" href="#">Sign up</a>
      <LangSwitcher />
    </div>


</template>



<script>
    import LangSwitcher from '~/components/LangSwitcher'
    export default {
    components: {
        LangSwitcher
    }
    }
</script>

<style>
html


.border-bottom {
    border-bottom: 1px solid #6ee63b!important;
}
.my-0{
    width: 16%;
}

.nav .nav-link {   
    font-family: 'Source Sans Pro', sans-serif;
    color: #6a1b9a;

}

.nav .nav-link  {
    color: #6a1b9a;
    font-family: 'Open Sans', helvetica, arial, sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 14px;
}
.nav .nav-link:hover {   
    color: #00e676;
}

.nav .nav-link:active {   
    color: black;
}

.nuxt-link-exact-active{
        border-bottom: 6px solid #974eca;
}



</style>