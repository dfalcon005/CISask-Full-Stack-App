<template>
    <div>
      <navbar/>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-4">
                    <!-- Card for Logo -->
                    <div class="card">
                        <!-- Logo for login car -->
                        <div class="card-body text-center login-header">
                            <h1 class="navbar-brand login-logo">Univeristy of Houston cis.ask</h1>
                        </div>
                    </div>
                    <!-- Card with login form -->
                    <div class="card">
                        <div class="card-body text-center">
                            <!-- form -->
                            <form action="" autocomplete="off" v-on:submit.prevent="loginUser">
                                <!-- Email -->
                                <div class="form-group">
                                    <input type="text" class="form-control" id="username" name="username" placeholder="Username..." v-model="username">
                                </div>
                                <!-- Password -->
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Password..." v-model="password">
                                </div>
                                <!-- Login button -->
                                <input type="submit" class="btn btn-outline-dark" value="Login"/>
                            </form>
                            <!-- Go to signup page -->
                            <router-link to="Signup">Sign-up Here</router-link>
                            <p>{{ error }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { mapActions } from 'vuex';

export default {
  components: {
      Navbar
  },
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("http://localhost:3000/users/profile");
          }
        })
        .catch(err => {
          this.error = "User does not exist";
        });
    }
  }
};
</script>

<style scoped>
p{
  color:#dc3545;
  text-decoration: underline;
}
.container{
  padding-top: 5vh;
}
form{
  padding-bottom: 2vh;
}
/* makes logo background red */
.login-header{
    background-color: #dc3545;
}
/* makes logo font white */
.login-logo{
    color: white;
}
</style>