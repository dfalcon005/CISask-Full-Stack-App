<template>
    <div>
        <navbar/>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-4">
                    <!-- card with form -->
                    <div class="card">
                        <div class="card-body text-center login-header">
                            <h1 class="navbar-brand login-logo">Univeristy of Houston CISask</h1>
                            <h2 class="navbar-brand login-logo">Signup!</h2>
                        </div>
                        <div class="card-body text-center">
                            <form v-on:submit.prevent="registerUser">
                                <!-- name -->
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" placeholder="Name..." v-model="name">
                                </div>
                                <!-- username -->
                                <div class="form-group">
                                    <input type="text" class="form-control" name="username" placeholder="Choose a Username..." v-model="username">
                                </div>
                                <!-- email -->
                                <div class="form-group">
                                    <input type="text" class="form-control" name="email" placeholder="Email..." v-model="email">
                                </div>
                                <!-- password -->
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Choose a Password..." v-model="password">
                                </div>
                                <!-- confirm password -->
                                <div class="form-group">
                                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password..." v-model="confirm_password">
                                </div>
                                <!-- done -->
                                <button type="submit" class="btn btn-danger">Finished!</button>
                            </form>
                            <router-link to="Login">Already have an account</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { mapActions } from "vuex"

export default {
    components: {
      Navbar
    },
    data() {
        return {
            username: "",
            password: "",
            confirm_password: "",
            name: "",
            email: ""
            };
    },
    methods: {
        ...mapActions(["register"]),
        registerUser() {
            let user = {
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email,
                name: this.name
            };
            this.register(user).then(res => {
                if (res.data.success) {
                    this.$router.push("login");
                }
            });
        }
    }
    
}
</script>

<style scoped>
.container{
  padding-top: 5vh;
}
form{
  padding-bottom: 2vh;
}
/* give logo background color */
.login-header{
    background-color: #dc3545;
}
/* logo font to white */
.login-logo{
    color: white;
}
.card{
  box-shadow: 0 .5rem .75rem 0 rgba(0, 0, 0, 0.2), 0 .5rem 1rem 0 rgba(0, 0, 0, 0.19);
}
</style>