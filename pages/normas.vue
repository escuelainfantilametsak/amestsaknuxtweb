<template>
<div class="container">
            <div class="navy-line">

            </div>
            <h1 class="h1">        
                {{ $t('normasTitle') }}     
            </h1>             
            <h2 class="subtitle">
                 {{ $t('normasSubTitle') }} 
            </h2>  
             <div class="row">
                <div class="col-lg-7">

                            <p class="text-justify"> {{ $t('normasText1') }} </p>
                </div>

             <div class="col-lg-5">

                <div class="card card-pricing popular shadow text-center px-3 mb-4">
                       
                        <div class="bg-transparent card-header pt-4 border-0">
                            <i class="far fa-clock" style="color:#643387"></i>
                           <h5>{{ $t('normasText2') }}</h5>
                        </div>
                        <div class="card-body pt-0">
                            <p class="text-justify">{{ $t('normasText3') }}</p> 
                        </div>
                    </div>                   
                 </div>

            </div>
            <div class="row">
                 <div class="col-12">
                     <p class="text-justify">{{ $t('normasText4') }}</p>
                     
                     <ul class="fa-ul text-justify">                
                        <li><span class="fa-li"><i class="fas fa-angle-right " style="color:#643387"></i></span>{{ $t('normasAD1') }}</li>
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span>{{ $t('normasAD2') }} </li> 
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span>{{ $t('normasAD3') }} </li> 
                        
                    </ul>
                </div>
            </div>

             <h2 class="subtitle">
                {{ $t('normasSubtitle2') }}
            </h2>  

             <div class="row">
                 <div class="col-12">
                        <p class="text-justify">
                            {{ $t('normasText5') }}
                        </p>
                     <ul class="fa-ul text-justify">                
                        <li><span class="fa-li"><i class="fas fa-angle-right " style="color:#643387"></i></span> {{ $t('normasSA1') }}</li>
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasSA2') }}</li> 
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasSA3') }}</li> 
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasSA4') }}</li> 
                    </ul>
                </div>
            </div>


             <h2 class="subtitle">
                 {{ $t('normasSubtitle3') }}
            </h2>  

             <div class="row">
                 <div class="col-12">
                        <p class="text-justify"> 
                             {{ $t('normasText6') }}
                        </p>
                     <ul class="fa-ul text-justify">                
                        <li><span class="fa-li"><i class="fas fa-angle-right " style="color:#643387"></i></span>  {{ $t('normasG1') }}</li>
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasG2') }}</li> 
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasG3') }}</li> 
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasG4') }}</li> 
                        <li><span class="fa-li"><i class="fas fa-angle-right" style="color:#643387"></i></span> {{ $t('normasG5') }}</li> 
                    </ul>
                </div>
            </div>
         

</div>
</template>
    