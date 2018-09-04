<template>
 <section class="container"> 
    <div class="columns" v-if="user">
      <h3 v-text="user.email"></h3>
      <form>
        <dl class="form-group">
          <dt><label class="text-inherit">Nombre</label></dt>
          <dd class="control">
            <input class="form-control" type="text" placeholder="Display Name" v-model="newData.displayName" v-on:input="updateField('displayName')">
          </dd>
        </dl>
        <dl class="form-group">
          <dt><label class="text-inherit">Imagen perfil</label></dt>
          <dd class="control">
            <input class="form-control" type="file" accept="image/*" placeholder="Profile Image" v-on:change="updateProfileImage" ref="fileInput">
          </dd>
        </dl>
        <div class="form-group">
          <div class="flash" v-if="formSuccess.length > 0" v-text="formSuccess"></div>
          <div class="flash flash-error" v-if="formError.length > 0" v-text="formError"></div>
        </div>
      </form>
    </div> 
</section>


</template>

<script>
import firebase from '@/services/fireinit.js'
import { mapState } from 'vuex'
//import EditAccountForm from '~/components/account/EditAccountForm.vue'
export default {
  // middleware: 'authenticated', // checking if auth'd with firebase kinda sucks as the middleware is triggered before firebase is ready
  // components: {
  //   EditAccountForm
  // },
    computed: mapState([
      'user',
      'account'
    ]),
    data () {
      return {
        newData: {
          displayName: '',
          image: ''
        },
        debounceTimer: setTimeout(() => {}),
        formError: '',
        formSuccess: ''
      }
    },
    mounted () {
      this.newData.displayName = this.account.displayName
      this.newData.image = this.account.image
    },
    methods: {
    resetFormMessages () {
      this.formSuccess = this.formError = ''
    },
    updateField (key) {
      this.resetFormMessages()
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        console.info('update field', key)
        this.$store.dispatch('userUpdate', this.newData)
          .then(() => {
            this.formSuccess = 'Successfully updated your account details'
          })
          .catch((err) => {
            this.formError = 'Error saving the profile changes'
            console.error(err)
          })
      }, 500)
    },
    updateProfileImage () {
      this.resetFormMessages()
      const file = this.$refs.fileInput.files[0]
      const ref = firebase.storage().ref(`accounts/profile/${this.user.uid}`)
      ref.put(file).then((snapshot) => {
        // return this.$store.dispatch('userUpdateImage', snapshot.ref.getDownloadURL())
            
      })
        .then(() => {
          this.formSuccess = 'Successfully uploaded a new profile image'

        ref.getDownloadURL().then(function(downloadURL) {
              this.$store.dispatch('userUpdateImage', downloadURL)
              console.log('File available at', downloadURL);
        });
          // reset the form input
          this.$refs.fileInput.value = null
        })
        .catch((err) => {
          this.formError = 'Error uploading new profile image'
          console.error(err)
        })
    }
  }
}
  
</script>

<style lang="css" scoped>
  .profile-image img {
    border-radius: 100px;
    overflow: hidden;
    border: 2px solid #b2b1b0;
  }
  pre {
    white-space: pre-wrap;
  }
</style>