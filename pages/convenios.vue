<template>
 <section class="container">

<div class="row">
  <div class="col-md-8 offset-md-2">


             <div class="navy-line"></div>
        <h1 class="h1">        
                       {{ $t('conveniosTitle') }}
            </h1>
        <h2 class="subtitle">
            {{ $t('preguntanos') }}
        </h2>
        <div class="card border-warning mb-3 mx-auto">
            <img class="rounded mx-auto d-block animated fadeIn" src="~/assets/regatologo.png"  alt="Card image">
                <div class="card-body">
                <h4 class="card-title">El Regato</h4>
                    <h6>Escuela Infantil Ametsak</h6><p class="card-text text-justify"> {{ $t('conveniosText1') }}<span class="text-dark">  El Regato</span>{{ $t('conveniosText2') }}  </p>
                    <a href="http://colegioelregato.com" class="btn btn-primary">ir web</a>
                </div>
                <div class="card-footer">
                    <i class="fas fa-heart" style="color:red"></i>
                </div>
        </div>       


  </div>
</div>

                     
 </section >
</template>