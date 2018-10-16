import Vuex from 'vuex'
import axios from 'axios';
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      account: null,
      list: []
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
   
    mutations: {
      ...firebaseMutations,
      setUser (state, user) {
        state.user = user
        return this.dispatch('setAccountRef', `accounts/${state.user.uid}`)
      },
      set (state, todos) {
        state.list = todos;        
      }
    },
    actions: {
      setAccountRef: firebaseAction(({ bindFirebaseRef }, path) => {
        return bindFirebaseRef('account', firebase.database().ref(path))
      }),
      resetUser ({
        state
      }) {
        state.user = null
      },
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },
      userLogin ({ state }, account) {
        return auth
          .signInWithEmailAndPassword(account.email, account.password)
          .then((user) => {
            return this.dispatch('setUser', user)
          })
      },

      signInWithGoogle ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider)
          resolve()
        })
      },

      userUpdate ({ state }, newData) {
        return firebase.database().ref(`accounts/${state.user.uid}`).update({
          displayName: newData.displayName
        })
      },
      userUpdateImage ({ state }, image) {
        return firebase.database().ref(`accounts/${state.user.uid}`).update({
          image
        })
      },


      async fetchUsers({ commit }) {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('set', data);
      },


      userLogout ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore