
   <template>
      <div>
          <no-ssr>    
                <EditAccountForm />              
          </no-ssr>
        
      </div>
   </template>

   <script>

   import EditAccountForm from '~/components/account/EditAccountForm.vue'

   export default {
      components: {
        EditAccountForm
      }
   }
   </script>