<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height:100vh">
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
                        <form action="" autocomplete="off" @click.prevent="loginUser">
                            <!-- Email -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" name="email" placeholder="Email..." v-model="email">
                            </div>
                            <!-- Password -->
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Password..." v-model="password">
                            </div>
                            <!-- Login button -->
                            <button type="button" id="sendlogin" class="btn btn-outline-dark">Login</button>
                        </form>
                        <!-- Go to signup page -->
                        <router-link to="Signup">Sign-up Here</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>    

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
/* give space from signup link */
form{
    padding-bottom: 1vh;
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