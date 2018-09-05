<template>



<!-- Footer -->
<footer class="page-footer font-small fgreen pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-6">

          <!-- Content -->
          <!--<h5 class="text-uppercase">Escuela Infantil Ametsak</h5>-->
          <h6> Escuela Infantil Ametsak</h6>
          <img class="" src="~/assets/pajaros2.png" alt="Bulma">
        </div>
       
        <!-- Grid column -->
        <hr class="clearfix w-100 d-md-none pb-3">
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                  <nuxt-link :to="localePath('trabaja-con-nosotros')">Trabaja con Nosotros</nuxt-link>  
              </li>
              <li>
                <nuxt-link :to="localePath('solicitudmatricula')">Solicitar matricula</nuxt-link>                
              </li>
              <li>
                <nuxt-link :to="localePath('equipo')">Equipo</nuxt-link>
              </li>
              <li>
                 <nuxt-link :to="localePath('convenios')">Convenios</nuxt-link>
              </li>
               <li>
                 <nuxt-link :to="localePath('normas')">Normas</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- contacto -->
            <h5 class="text-uppercase">{{ $t('titleContacto') }} </h5>
            <ul class="list-unstyled">
              <li>
                <a href="https://goo.gl/maps/C7TFkoKaj7J2" target="_blank"><i class="fas fa-map-marker-alt"></i> Llano 56 Bajo, BARAKALDO</a>
              </li>
              <li>
                <a href="#!"><i class="fas fa-phone"></i> 94 608 63 94</a>
              </li>
              <li>
                <a href="#!"><i class="fab fa-facebook-f"></i> Ametsak Facebook</a>
              </li>             
            </ul>

          </div>
      
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-facebook-f fa-2x"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-linkedin fa-2x"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fab fa-instagram fa-2x"></i></a></li>						
						<li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope fa-2x"></i></a></li>
					</ul>
				</div>				
			</div>
    </div>
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      
       <img class="icofooter" src="~/assets/Jack.png" alt="Bulma">
    </div>
    <!-- Copyright -->

  </footer>







</template>

<style>
.fgreen {
    /* background-color: #1de9b6!important; */
    background-color: #E6fafc!important;
     
}

.fmorado {
    background-color: #aa66cc!important;
}
.icofooter {
    width:2%;;
}


footer.page-footer .footer-copyright {
    overflow: hidden;
    background-color: #9cfc97;
    /* color: rgba(255,255,255,.6); */
    color: #633287;
}

footer a{
    color: #6a1b9a;
}

footer a:hover{
    color: #00e676;
    font-weight: bold;
}

footer a:link 
{ 
    text-decoration:none; 
} 

h6{
  font-family: 'Pacifico', cursive;
  color: #633287;
}
</style>