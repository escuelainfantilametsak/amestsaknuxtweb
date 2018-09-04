<template>
<div class="container">
<div class="col-md-12">    
            <img src="~/assets/workflow2.png" class="img-fluid animated fadeIn" alt="logo">         
        </div>
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
    <li class="breadcrumb-item active" aria-current="page">Concertar Visita</li>
  </ol>
  <p style="margin-bottom: 25px; text-align: center; ">LLÁMANOS  (<a style="color: #8fbd43;" href="tel://946086394">946 086 394</a>) </p> 
    <nuxt-link class="linkmapacontacto" :to="localePath('contacto')"><i class="fas fa-map-marked-alt fa-2x"></i></nuxt-link> 

</nav>

<nav aria-label="breadcrumb" class="mb-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">Concertar Visita</li>
    <li class="breadcrumb-item active" aria-current="page">Documentacion</li>
  </ol>
 <ul class="list-group listcustom">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Fotocopia del libro de familia
   <i class="fas fa-print fa-2x"></i>
  </li>
   <li class="list-group-item d-flex justify-content-between align-items-center">
    Fotocopia del número de cuenta
   <i class="fas fa-print fa-2x"></i>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Rellenar Hoja matriculación
    <a href="SOLICITUD_DE_MATRICULAS.pdf" class="linkmapacontacto"><i class="far fa-file-pdf fa-2x"></i></a>
    
  </li> 
</ul>
</nav>

<nav aria-label="breadcrumb" class="mb-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">Concertar Visita</li>
    <li class="breadcrumb-item">Documentacion</li>
    <li class="breadcrumb-item active" aria-current="page">Listo</li>
  </ol>
  <div class="card text-white bg-dark mx-auto" style="max-width: 18rem;">
  
  <div class="card-body">
    
    <p>Recibe tu pack de bienvenida!!</p>
    <!-- <span class="badge badge-secondary">New</span> -->
    <i class="fas fa-shopping-bag"></i> & <i class="fas fa-book"></i>
  </div>
</div>
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
</style>