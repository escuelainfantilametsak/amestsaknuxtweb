<template>
<section>
  <div class="container">
    <div>    
        <Logo1/>
        
       
  </div>
 </div>
 <div class="container">
      <div class="navy-line"></div>
     <h1 class="h1">        
          {{ $t('titleContacto') }}       
        </h1>
        <!-- <h1 class="title">
          {{ $t('titleContacto') }}
        </h1> -->
         <h2 class="subtitle">
         {{ $t('subContacto') }}
      </h2>
     <div class="row">
    
      

          <div class="col-md-8">
        
        <form action="https://formspree.io/your@email.com"  method="post">
                
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre " required="">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" name="email" placeholder="Email " required="">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="address" name="address" placeholder="Telefono " required="">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Asunto " required="">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" type="textarea" id="message" name="Mensaje" placeholder="Mensaje " maxlength="200" rows="7"></textarea>
                                
                            </div>
            
                            <button class="btn btn-primary pull-right button pageclip-form__submit" type="submit">
                                <span>Enviar</span>
                            </button>
        </form>
      </div>
      <div class="col-md-4">
        <div class="team-member">
                    <h4><span class="navy">Llano 56 Bajo</span> Barakaldo</h4>
                    <p>48903 Cruces</p>
                    <p>
                        <!--<span class="fa fa-home"></span> Calle Llano 56 Bajo<br>-->
                        <span class="fa fa-phone-square"></span> 94 608 63 94<br>
                        <span class="fa fa-mobile"></span> 94 608 63 94<br>
                        <span class="fab fa-facebook-f" style="color: #3385ff"></span> <a href="https://www.facebook.com/escuela.ametsak"> Ametsak Facebook </a> <br>
                    </p>
                    <ul class="list-inline social-icon">
                        <li><a href="http://www.escuelainfantilametsak.com" target="blank"><i class="fa fa-link"></i></a>
                        </li>
                        <li><a href="mailto:hola@escuelainfantilametsak.com"><i class="fa fa-envelope-o"></i></a>
                        </li>
                    </ul>
        </div>
        <img class="visible-lg" src="~/assets/llamanos.png" width="200">
      </div>

     </div>
      
  </div>

</section>

</template>

<script>
import Logo1 from '~/components/LogoSeccion1.vue'

export default {
  components: {
    Logo1
  }
}


</script>
