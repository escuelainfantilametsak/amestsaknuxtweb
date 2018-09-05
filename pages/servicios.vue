<template>
<div>

 <section class="container">
            <div class="navy-line"></div>
            <h1 class="h1">        
                  {{ $t('titleservicios') }}       
                </h1>
        
</section>



<section id="skills" class="container" style="margin-top: 0px;">
<div class="container col-lg-10" id="i18_skills">
    <div class="row">
        <div class="col-lg-12 text-center">
          
             <h2 class="subtitle">
                {{ $t('subHorario') }}
                </h2>
        </div>
    </div>



    <div class="row">
    
        
            <p class="text-justify">
                <span >Abierto de </span>
                <span class="resaltar" >LUNES a VIERNES</span>                
                <span > excepto festivos nacionales y los pertenecientes a la comunidad autonoma, el horario de Ametsak pretende adaptarse a todas la necesidades de los aitas
                </span>
            </p>
            
         
    </div>

      <div class="row">

                <ul class="list-group listcustom mx-auto">    
                        <li class="list-group-item d-flex justify-content-between align-items-center fredaFont">
                            Calendario Escolar
                            <a href="Calendario2018_19.pdf" class="linkCalendario"><i class="far fa-file-pdf fa-2x"></i></a>
                
                        </li> 
            </ul>
          
           
</div>
     
   
     <div class="row">
       <p class="text-justify">Por ello el centro permanecera abierto de   </p> <span class="resaltar" > 7:30 a 19:15 </span>
    </div>

    <div class="row">
            <div class="col-3" >
                <p>Lunes</p>
            </div>
            <div class="col-9" >
                <div class="progress progress-bar-default">
                    <div style="width: 95%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" role="progressbar" class="progress-bar morado">
                    <span class="resaltarWhite">7:30 - 19:00</span>
                    </div>
                </div>
            </div>
        </div>


    <div class="row">
            <div class="col-3" style="visibility: visible; animation-name: fadeInRight;">
                <p>Martes</p>
            </div>
            <div class="col-9" style="visibility: visible; animation-name: fadeInLeft;">
                <div class="progress progress-bar-default">
                    <div style="width: 95%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" role="progressbar" class="progress-bar morado">
                    <span class="resaltarWhite">7:30 - 19:00</span>
                    </div>
                </div>
            </div>
        </div>

    <div class="row">
            <div class="col-3" style="visibility: visible; animation-name: fadeInLeft;">
                <p>Miercoles</p>
            </div>
            <div class="col-9" style="visibility: visible; animation-name: fadeInRight;">
                <div class="progress progress-bar-default">
                    <div style="width: 95%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" role="progressbar" class="progress-bar morado">
                    <span class="resaltarWhite">7:30 - 19:00</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-3" style="visibility: visible; animation-name: fadeInRight;">
                <p>Jueves</p>
            </div>
            <div class="col-9" style="visibility: visible; animation-name: fadeInLeft;">
                <div class="progress progress-bar-default">
                    <div style="width: 95%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" role="progressbar" class="progress-bar morado">
                     <span class="resaltarWhite">7:30 - 19:00</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-3" style="visibility: visible; animation-name: fadeInLeft;">
                <p>Viernes</p>
            </div>
            <div class="col-9" style="visibility: visible; animation-name: fadeInRight;">
                <div class="progress progress-bar-default">
                    <div style="width: 83%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" role="progressbar" class="progress-bar morado">
                    <span class="resaltarWhite">7:30 - 17:30</span>
                    </div>
                </div>
            </div>
        </div>

        

       

  
</div>

</section>

<section id="projects" class="container" style="margin-top: 0px;">
    <div class="container col-lg-12" id="i18_projects">
    <div class="row m-b-lg">
        <div class="col-12 text-center">
             <h2 class="subtitle">
                {{ $t('subServicio') }}
                </h2>
        </div>
    </div>
    <div class="row">
        
            
            
            <div class="col-sm-6 wow  fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
            
              <div class="team-member">
                  <img src="~/assets/language.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">Trilingue</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.saplatform">Apostamos por un modelo educativo con nuestras dos lenguas, euskara y castellano, utilizando la primera como lengua vehicular y también introducimos a nuestros txikis en el conocimiento y uso del inglés.</span></p>
                  
              </div>
          </div>
      
            
            
            <div class="col-sm-6 wow  fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
            
              <div class="team-member">
                  <img src="~/assets/becas.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">Becas y subvenciones</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.jalpc">Todas nuestras plazas están subvencionadas por el gobierno vasco por lo que ofrecemos unas tarifas más que interesantes. También podréis beneficiaros de las becas y subvenciones que ofrecen cada año. Nosotros nos encargamos de todos los tramites para que no tengáis que preocuparos de nada.</span></p>
                  
              </div>
          </div>
      
            
            
            <div class="col-sm-6 wow  fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
            
              <div class="team-member">
                  <img src="~/assets/logotipoGV_2.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">Centro Autorizado Gobierno Vasco</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.angularjs">Centro autorizado y homologado, ya que cumple todas las normativas marcadas por el Gobierno Vasco. Nuestro proyecto abarca desde los 4 meses hasta los 3 años y en total disponemos de 52 matrículas repartidas en cuatro clases: bebés, 1 año A, 1 año B y 2 años.</span></p>
                  
              </div>
          </div>
                
            <div class="col-sm-6 wow  fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                
            
              <div class="team-member">
                  <img src="~/assets/blocks.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">Servicio Guarderia</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.rsser">Ofrecemos un servicio de horario ampliado para facilitar la conciliación laboral y familiar. Por la mañana de 7:30 a 9:00, y por la tarde partir de las 17:30 hasta las 19:00 con un carácter lúdico y recreativo.</span></p>
                  
              </div>
          </div>
      
    </div>
</div>
<br>

</section>
</div>
</template>
