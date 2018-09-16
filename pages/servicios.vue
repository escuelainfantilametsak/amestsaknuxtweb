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
                <span >{{ $t('serviciosTex1') }}</span>
                <span class="resaltar" >{{ $t('serviciosTex2') }}</span>                
                <span > {{ $t('serviciosTex3') }}
                </span>
            </p>
            
         
    </div>

      <div class="row">

                <ul class="list-group listcustom mx-auto">    
                        <li class="list-group-item d-flex justify-content-between align-items-center fredaFont">
                            {{ $t('serviciosTex4') }}
                            <a href="Calendario2018_19.pdf" class="linkCalendario"><i class="far fa-file-pdf fa-2x"></i></a>
                
                        </li> 
            </ul>
          
           
</div>
     
   
     <div class="row">
       <p class="text-justify">{{ $t('serviciosTex5') }}</p> <span class="resaltar" > 7:30 a 19:15 </span>
    </div>

    <div class="col-12">

            <div class="row">
                <div class="col-3" >
                    <p>{{ $t('serviciosTextLunes') }}</p>
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
                        <p>{{ $t('serviciosTextMartes') }}</p>
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
                        <p>{{ $t('serviciosTextMiercoles') }}</p>
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
                        <p>{{ $t('serviciosTextJueves') }}</p>
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
                        <p>{{ $t('serviciosTextViernes') }}</p>
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
                  <h4><i class=""></i><a href="#projects"><span class="navy">{{ $t('serviciosTex6') }}</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.saplatform">{{ $t('serviciosTex7') }}</span></p>
                  
              </div>
          </div>
      
            
            
            <div class="col-sm-6 wow  fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
            
              <div class="team-member">
                  <img src="~/assets/becas.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">{{ $t('serviciosTex8') }}</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.jalpc">{{ $t('serviciosTex9') }}</span></p>
                  
              </div>
          </div>
      
            
            
            <div class="col-sm-6 wow  fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
            
              <div class="team-member">
                  <img src="~/assets/logotipoGV_2.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">{{ $t('serviciosTex10') }}</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.angularjs">{{ $t('serviciosTex11') }}</span></p>
                  
              </div>
          </div>
                
            <div class="col-sm-6 wow  fadeInRight" style="visibility: visible; animation-name: fadeInRight;">
                
            
              <div class="team-member">
                  <img src="~/assets/blocks.png" class="img-responsive img-circle img-small" alt="">
                  <h4><i class=""></i><a href="#projects"><span class="navy">{{ $t('serviciosTex12') }}</span></a></h4>
                  <p class="text-justify"><span data-i18n="projects.rsser">{{ $t('serviciosTex13') }}</span></p>
                  
              </div>
          </div>
      
    </div>
</div>
<br>

</section>
</div>
</template>
