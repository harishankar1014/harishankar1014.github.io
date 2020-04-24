<template>
  <div class="login">
    <!-- <img src="../assets/dc_logo.png" width="300px"> -->

    <input 
      type="text" 
      v-model="email" 
      placeholder="Email address" 
      class="input" 
      required>
    <br/>
    <input 
      type="password" 
      v-model="password"
      placeholder="Password" 
      class="input" 
      required>
    <br/>
    <button v-on:click="login" class="button">Enter</button>
    <p><router-link to="/signup">
      New Here? Create a new account
    </router-link></p>
  </div>
</template>
<script>
  import firebase from 'firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/shops')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>