<template>
<div class="container">
<!-- <div class="col-md-12">    
            <img src="~/assets/workflow2.png" class="img-fluid animated fadeIn" alt="logo">         
        </div> -->
<div class="navy-line"></div>
            <h1 class="h1">        
                  {{ $t('titleSolicitud') }}       
                </h1>
                <!-- <h1 class="title">
                  {{ $t('titleContacto') }}
                </h1> -->
                <h2 class="subtitle">
                {{ $t('subSolicitud') }}
                </h2>
 <div class="row justify-content-md-center">       


 <div class="col col-lg-9">
     
    
  <nav aria-label="breadcrumb" class="mb-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page">{{ $t('solMatTex1') }}</li>
    </ol>
    <p style="margin-bottom: 25px; text-align: center; "> {{ $t('solMatTex2') }}  (<a class="resaltarLink" href="tel://946086394">946 086 394</a>) </p> 
      <nuxt-link class="linkmapacontacto" :to="localePath('contacto')"><i class="fas fa-map-marked-alt fa-2x"></i></nuxt-link> 

  </nav>

  <nav aria-label="breadcrumb" class="mb-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">{{ $t('solMatTex1') }}</li>
      <li class="breadcrumb-item active" aria-current="page">{{ $t('solMatTex3') }}</li>
    </ol>


  <div class="container">
  <div class="row justify-content-center">
      <div class="col-md-8 bg-white rounded shadow-sm">
          
          <div class="media text-muted pt-3">
          
            <p class="media-body pb-3 mb-0 align-items-center lh-125 border-bottom border-gray">            
            {{ $t('solMatTex8') }}
            </p>
            <i class="fas fa-print fa-2x"></i>
          </div>
          <div class="media text-muted pt-3">
            
            <p class="media-body pb-3 mb-0  lh-125 border-bottom border-gray">            
              {{ $t('solMatTex9') }}
            </p>
            <i class="fas fa-print fa-2x"></i>
          </div>
          <div class="media text-muted pt-3">
          
            <p class="media-body pb-3 mb-0  lh-125 border-bottom border-gray">            
              {{ $t('solMatTex10') }}
            </p>
            <a href="SOLICITUD_DE_MATRICULAS.pdf" class="linkmapacontacto"><i class="far fa-file-pdf fa-2x"></i></a>
          </div>
          <!-- <small class="d-block text-right mt-3">
            <a href="#">All updates</a>
          </small> -->
        </div>
    </div>
  </div>





  <!-- <ul class="list-group listcustom">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {{ $t('solMatTex8') }}
    <i class="fas fa-print fa-2x"></i>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {{ $t('solMatTex9') }}
    <i class="fas fa-print fa-2x"></i>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {{ $t('solMatTex10') }}
      <a href="SOLICITUD_DE_MATRICULAS.pdf" class="linkmapacontacto"><i class="far fa-file-pdf fa-2x"></i></a>
      
    </li> 
  </ul> -->
  </nav>

  <nav aria-label="breadcrumb" class="mb-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">{{ $t('solMatTex1') }}</li>
      <li class="breadcrumb-item">{{ $t('solMatTex3') }}</li>
      <li class="breadcrumb-item active" aria-current="page">{{ $t('solMatTex4') }}</li>
    </ol>


  
  <div class="container">
    <div class="row justify-content-center">
    
    

      <div class="col-md-6">
          <div class="card mb-4 bg-dark text-white">
              <img class="card-img" src="~/assets/giftcomp.jpg" alt="Card image">
              <div class="card-img-overlay">
                <h5 class="card-title">Recibe tu pack de bienvenida!!</h5>
                <p class="card-text"> <i class="fas fa-heart" style="color:red"></i></p>               
              </div>
          </div>
        </div>
      
    </div>


      
  </div>
  
    

  <div class="row">
    
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="our-services-wrapper mb-60">
                <div class="services-inner">
                  <div class="our-services-img">
                    <span class="fa-stack fa-2x linkmapacontacto">
                      <i class="fas fa-circle fa-stack-2x"></i>                   
                      <i class="fas fa-clipboard-list fa-stack-1x fa-inverse"></i>
                    </span>
                
                  </div>
                  <div class="our-services-text">
                    <h4>Normas</h4>
                    <nuxt-link :to="localePath('normas')" class="linkSolitudMatricula">Info</nuxt-link>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="our-services-wrapper mb-60">
                <div class="services-inner">
                  <div class="our-services-img">
                    <span class="fa-stack fa-2x linkmapacontacto">
                      <i class="fas fa-circle fa-stack-2x"></i>                   
                      <i class="far fa-file-pdf fa-stack-1x fa-inverse"></i>
                    </span>
                
                  </div>
                  <div class="our-services-text">
                    <h4>Calendario</h4>
                  <a href="/Calendario2018_19.pdf" class="linkSolitudMatricula">Descargar</a>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="our-services-wrapper mb-60">
                <div class="services-inner">
                  <div class="our-services-img">
                    <span class="fa-stack fa-2x linkmapacontacto">
                      <i class="fas fa-circle fa-stack-2x"></i>                    
                      <i class="fas fa-smile-beam fa-stack-1x fa-inverse"></i>
                    </span>
                
                  </div>
                  <div class="our-services-text">
                    <h4>Ventajas</h4>
                    <nuxt-link :to="localePath('convenios')" class="linkSolitudMatricula">Info</nuxt-link>
                  </div>
                </div>
              </div>
            </div>

      
    </div>



  
  </nav>

</div><!--  fin del container lg -->
</div>
</div>
</template>

<style>
.breadcrumb-item+.breadcrumb-item::before {    
    content: "->";
}

.breadcrumb-item.active {
    color:#974eca;
    font-weight: bold;
}
.breadcrumb-item {
    color: #6c757d;
}

.breadcrumb {
       margin-bottom: 20px;
       border-radius: 1.00rem;
       border-style: solid;
      border-color: #bbbec1;
}


.border-verdeAmetsak {
    border-color: #343a40!important;
}




</style>