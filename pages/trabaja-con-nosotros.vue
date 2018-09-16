<template>
<section>
 
 <div class="container">
      <div class="navy-line">          
      </div>
     <h1 class="h1">        
          {{ $t('titleTrabaja') }}       
        </h1>
       
        <h2 class="subtitle">
         {{ $t('subTrabaja') }}
      </h2>
     <div class="row justify-content-center">
        <div class="col-md-2">    
            <img src="~/assets/resume.png" class="img-fluid animated fadeIn" alt="logo">         
        </div>
      

        <div class="col-md-8">
            <p class="text-justify">{{ $t('trabajaMatTex1') }} <a href="mailto:hola@escuelainfantilametsak.com?subject=CV: ">CV Ametsak</a> </p>            
            <p class="text-justify">{{ $t('trabajaMatTex2') }}</p>
            <p class="text-justify">{{ $t('trabajaMatTex3') }}</p>
            <ul class="fa-ul text-justify">                
                    <li><span class="fa-li"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> {{ $t('trabajaMatTex4') }}</li>
                    <li><span class="fa-li"><i class="fas fa-angle-right fa-2x" style="color:#643387"></i></span> {{ $t('trabajaMatTex5') }}</li> 
            </ul>
        </div>
    </div>
</div>

</section>

</template>


