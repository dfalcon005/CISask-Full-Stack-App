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
                        <form action="" autocomplete="off">
                            <!-- Email -->
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" placeholder="Email...">
                            </div>
                            <!-- Password -->
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password...">
                            </div>
                            <!-- Login button -->
                            <button type="button" id="sendlogin" class="btn btn-outline-dark">login</button>
                        </form>
                        <!-- Go to signup page -->
                        <router-link to="Signup">Sign-up Now</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    
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