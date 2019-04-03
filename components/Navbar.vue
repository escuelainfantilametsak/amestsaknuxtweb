<!-- Top menu -->

<template>
<!-- As a heading -->
<!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>-->

<div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <!--<h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>-->
        
        <img class="my-0 mr-md-auto font-weight-normal" src="~/assets/logo.png" alt="Bulma">
        
        <nav class="nav nav-masthead justify-content-center">
                <nuxt-link class="nav-link" :to="localePath('index')"> {{ $t('navIni') }}</nuxt-link>
                <nuxt-link class="nav-link" :to="localePath('contacto')"> {{ $t('navCon') }}</nuxt-link>
                <nuxt-link class="nav-link" :to="localePath('equipo')"> {{ $t('navEqu') }}</nuxt-link>
                <nuxt-link class="nav-link" :to="localePath('servicios')"> {{ $t('navSer') }}</nuxt-link>
                <nuxt-link class="nav-link" :to="localePath('instalaciones')"> {{ $t('navIns') }}</nuxt-link>
                <!--<nuxt-link class="nav-link" :to="localePath('login')"> {{ $t('navLog') }}</nuxt-link>-->
        </nav>
        
        <LangSwitcher />
           
        
    

            <!-- <div v-if="user" id="user" class="text-xs-center">
                <button type="button" class="btn btn-danger" v-on:click="signOut">Sign Out</button>
            </div> -->
            <no-ssr>    
                <button v-if="user" type="button" class="btn btnlogin" v-on:click="signOut">Sign Out</button>               
            </no-ssr>
            

            <!-- <div class="flex-table-item text-right" v-cloak>
                <nuxt-link v-if="user" class="navbar-item"  v-on:click="signOut" >Sign Out</nuxt-link> 
                <nuxt-link v-else class="navbar-item" :to="localePath('instalaciones')"> prueba 1</nuxt-link>
                              
            </div> -->


        

    </div> 
    <!-- <h6 v-if="user" class="pusuario float-right" v-text="user.email" id="user"></h6> -->
</div> 
</template>



<script>
    import LangSwitcher from '~/components/LangSwitcher'
    import { mapState } from 'vuex'
    export default {
    components: {
        LangSwitcher
    },
    methods: {
        signOut () {
        this.$store.dispatch('userLogout')
            .then(() => {
            this.$router.push('/')
            })
            .catch((error) => {
            console.log(error)
            })
        }
     
    },


    //  computed: mapState([
    //          'user'
    //  ])

     computed: {
        user () {
            return this.$store.getters.activeUser
        }
    }


    // computed: {
    //      user () {
    //         return this.$store.getters.activeUser
    // },

    // methods: {
    //     signOut () {
    //         this.$store.dispatch('userLogout')
    //             .then(() => {
    //             this.$router.push('/')
    //             })
    //             .catch((error) => {
    //             console.log(error)
    //             })
    //     }
    // }
     
    // }
    // }
   

 
}




</script>

<style>



.border-bottom {
    border-bottom: 1px solid #9cfc97!important;
}
.my-0{
    max-width: 200px;
}


.nav .nav-link  {
    color: #6a1b9a;    
    /* font-family: 'Open Sans', helvetica, arial, sans-serif; */
    font-family: 'Fredoka One', cursive;
    /* font-weight: 700; */
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 16px;
}
.nav .nav-link:hover {   
    color: #00e676;
}

.nav .nav-link:active {   
    color: black;
}

nav .nuxt-link-exact-active{
        border-bottom: 6px solid #974eca;
}
.pusuario{
    
    font-size: 14px;
    color: #ffb300;
    word-spacing: 5px;
    padding-bottom: 15px;
    font-family: 'Fredoka One', cursive;
}

</style>