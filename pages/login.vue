<template>
 <section class="container">
            <div class="navy-line"></div>
            <h1 class="h1">        
                  Login     
                </h1>

            <form v-on:submit.prevent="signup" class="form-signin text-center">
              <img class="mb-4" src="~/assets/Jack.png" alt="" width="72" height="72">
                <h2 class="subtitle">
                Acceder
                </h2>

              <div class="alert alert-danger" v-if="formError.length > 0" v-text="formError"></div>

              <input class="form-control" v-bind:class="{ 'is-danger': invalidEmail }" type="email" placeholder="Email" v-model="email">
              <!-- <label for="inputEmail" class="sr-only">Email</label> -->
              <!-- <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus> -->
              <!-- <label for="inputPassword" class="sr-only">Contraseña</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required> -->
              <input class="form-control" v-bind:class="{ 'is-danger': invalidPassword }" type="password" placeholder="Password" v-model="password">
              
              <button class="btn btnlogin" type="submit">Login</button>



              <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
        
</section>
    
</template>

<script>

export default {
  name: 'LoginForm',  
  data () {
    return {
      email: '',
      password: '',
      formError: ''
    }
  },
  computed: {
    invalidEmail () {
      return false // !this.email.includes('@')
    },
    invalidPassword () {
      return false // !this.password.length > 12
    }
  },
  methods: {
    signup () {
      this.formError = ''
      this.$store.dispatch('userLogin', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/account')
        })
        .catch((error) => {
          console.log(error)
          this.formError = error.message
        })
    }
  }
}
</script>

<style>


  .btnlogin.nuxt-link-active {
    color:#6a1b9a ;
    background-color: transparent;
    background-image: none;
    border-color: #9cfc97;
}

</style>




