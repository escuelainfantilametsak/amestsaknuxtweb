<template>
  <section class="container">
    <div>
      <logo/>
      <div class="navy-line"></div>
      <h1 class="h1">        
         {{ $t('Filosofia') }}          
        </h1>
      <h2 class="subtitle">
        {{ $t('welcome') }}
      </h2>
      <div class="links">
        <p>La Escuela Infantil <span class="resaltar" >AMETSAK</span> {{ $t('texto1Index') }}</p>
        <p>{{ $t('texto2Index') }}</p>
        <p>El centro se apoya en la metodología de <span class="resaltar">gleen Doman</span> y tambien ofrece servicios de estimulacion temprara a nivel motor sensorial cognitivo y musical</p>
        <ul class="fa-ul">
                
              	<li><i class="fa-li fas fa-quote-right fa-2x" style="color:#643387"></i><span>Identidad y Autonomía</span> </li>
                <li><i class="" ></i><span>Conocimiento del medio social y físico</span> </li>
                <li><i class="" ></i><span>Comunicación y representación</span> </li>
              	
              	
        </ul>
        <p>
          En nuestra escuela, mediante todos los servicios ofertados queremos lograr un servicio completo que cubra todas las necesidades de nuestros pequeños,
          y que abarque todos los aspectos importantes en la educacion de estas edades.        
        </p>
        <p> Las experiencias educativas que  constituyen los ejes de nuestro proyecto educativo son los siguientes:</p>
        <ul>
          <li><span class="resaltar">Estimulación Temprana:</span><br>
         <p>Cuando un bebé  nace no dispone de conductas prefijadas en la corteza cerebral, sin embargo  dispone de una capacidad infinita para asimilar. Es necesario recibir la  estimulación adecuada para que las conexiones se ejerciten de forma activa.</p>
          </li>
          <li><span class="resaltar">Fomento de la creatividad:</span><br>
          <p>A través de  dramatizaciones, de actividades de expresión plástica, de actividades musicales  y corporales.</p> </li>         
          <li><span class="resaltar">Desarrollo del lenguaje:</span><br>
          <p>Prestamos especial atención a las inquietudes lectoras de los niñ@s, y esto nos ayuda a la vez a fomentar su habilidad para escuchar.
Para fomentar el gusto por la lectura trabajamos con tarjetas de imágenes, tarjetas de imágenes con palabras, pictogramas siendo nuestro material por excelencia los cuentos, ya que será a través de ellos y a través del juego como el niñ@ irá interiorizando el amor por los libros y la lectura.
Las experiencias en la guardería fomentarán su imaginación y creatividad.</p> </li>
          <li><span class="resaltar">Educación en Valores:</span><br> 
          <p>Los primeros  años son esenciales para la construcción de la futura personalidad, por lo que  es especialmente importante favorecer que los niñ@s vayan descubriendo y  respetando el mundo que les rodea, estableciendo relaciones adecuadas con los  demás y aprendiendo a resolver los conflictos que puedan surgir. <br>
          Por ello,  trabajamos día a día para potenciar en los niños actitudes positivas de  respeto, tolerancia, solidaridad, libertad y responsabilidad.</p></li>
            
        </ul>


<div class="row">


<!-- Instalaciones -->
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
						<div class="our-services-wrapper mb-60">
							<div class="services-inner">
								<div class="our-services-img">
                  <span class="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x linkmapacontacto"></i>                   
                    <i class="far fa-images fa-stack-1x fa-inverse"></i>
                  </span>
							
								</div>
								<div class="our-services-text">
									<h4>{{ $t('titleInstalacion') }}</h4>
									<nuxt-link class="linkSolitudMatricula" :to="localePath('instalaciones')">{{ $t('subInstalacion') }}</nuxt-link> 
								</div>
							</div>
						</div>
				</div>

<!-- Solicitud matricula -->
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
						<div class="our-services-wrapper mb-60">
							<div class="services-inner">
								<div class="our-services-img">
                  <span class="fa-stack fa-2x">
                    <i class="fas fa-circle fa-stack-2x linkmapacontacto"></i>                   
                    <i class="fas fa-info-circle fa-stack-1x fa-inverse"></i>
                  </span>
							
								</div>
								<div class="our-services-text">
									<h4> {{ $t('titleSolicitud') }}</h4>
									<nuxt-link class="linkSolitudMatricula" :to="localePath('solicitudmatricula')">{{ $t('subInstalacion') }}</nuxt-link> 
								</div>
							</div>
						  </div>
				  </div>
  </div>

      
        
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
