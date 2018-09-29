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
 <ul class="list-group listcustom">
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
</ul>
</nav>

<nav aria-label="breadcrumb" class="mb-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">{{ $t('solMatTex1') }}</li>
    <li class="breadcrumb-item">{{ $t('solMatTex3') }}</li>
    <li class="breadcrumb-item active" aria-current="page">{{ $t('solMatTex4') }}</li>
  </ol>

  







<ul class="list-group list-group-flush">
  <li class="list-group-item text-white bg-dark"> <p>Recibe tu pack de bienvenida!!</p> <i class="fas fa-shopping-bag"> </i> & <i class="fas fa-book"></i><li>
  <li class="list-group-item"><nuxt-link :to="localePath('normas')" class="linkSolitudMatricula">{{ $t('solMatTex7') }}    <i class="fas fa-clipboard-list fa-2x"></i></nuxt-link></li>
  <li class="list-group-item"><a href="/Calendario2018_19.pdf" class="linkSolitudMatricula">{{ $t('solMatTex6') }}<i class="far fa-file-pdf fa-2x"></i></a></li>
 
</ul>
 
</nav>
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
}

.linkSolitudMatricula {
    color: #6a1b9a;
    font-weight: bold;
    text-decoration: none;
}

.linkSolitudMatricula:hover{
    color: #00e676;
    font-weight: bold;
    text-decoration: none;
}
.border-verdeAmetsak {
    border-color: #343a40!important;
}
</style>