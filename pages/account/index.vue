
   <template>
      <div>
        <div v-if="account" v-cloak>
           <h3 v-text="account.displayName"></h3>
            <div class="one-half column centered">
            <div v-if="account" v-cloak>              
              <p>Information pulled from the firebase <code>/account</code> dataset</p>
              <pre v-text="`${JSON.stringify(account, null, 2)}`"></pre>
            </div>
          </div>
        </div>
        
  </div>
   </template>

   <script>
    import { mapState } from 'vuex'
   import EditAccountForm from '~/components/account/EditAccountForm.vue'

   export default {
      components: {
        EditAccountForm
      },
       computed: {
        ...mapState([
          'user',
          'account'
        ]),
          imageAlt () {
            return `Profile image for ${this.account.displayName}`
        }
      },
      data () {
        return {
          editing: false
        }
      },
   }
   </script>
   
   