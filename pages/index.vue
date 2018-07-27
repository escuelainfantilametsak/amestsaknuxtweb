<template>
  <section class="container">
    <div>
      <logo/>
      <div class="navy-line"></div>
      <h1 class="h1">        
        Filosofía          
        </h1>
      <h2 class="subtitle">
        {{ $t('welcome') }}
      </h2>
      <div class="links">
        <p>La Escuela Infantil AMETSAK es un centro educativo y asistencial para niños de 0 a 3 años con instalacioness autorizadas por el Gobierno Vasco.</p>
        <p>El principal objetivo de las educadoras es el bienestar de los niños,por ello, haremos que los más pequeños se sientan seguros, queridos y aceptados dando mayor importancia al contacto afectivo para que desarrollen todo su potencial</p>
        <p>El centro se apoya en la metodología de gleen Doman y tambien ofrece servicios de estimulacion temprara a nivel motor sensorial cognitivo y musical</p>
        <ul class="fa-ul">
              	<li><span class="icon"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> Identidad y Autonomía</li>
              	<li><span class="icon"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> Conocimiento del medio social y físico</li>
              	<li><span class="icon"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> Comunicación y representación</li>
              	
        </ul>
        <!-- <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a> -->
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}


</script>

<style>




.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links
{
  padding-top: 15px;
  text-align: left;
}
</style>
