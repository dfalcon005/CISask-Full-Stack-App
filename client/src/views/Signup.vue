<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height:100vh">
            <div class="col-4">
                <!-- card for logo -->
                <div class="card">
                    <div class="card-body text-center login-header">
                        <h1 class="navbar-brand login-logo">Univeristy of Houston cis.ask</h1>
                        <h2 class="navbar-brand login-logo">Signup!</h2>
                    </div>
                </div>
                <!-- card with form -->
                <div class="card">
                    <div class="card-body text-center">
                        <form action="" autocomplete="off">
                            <!-- first name -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First name..." v-model="firstname">
                            </div>
                            <!-- last name -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last name..." v-model="lastname">
                            </div>
                            <!-- username -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="username" name="username" placeholder="Choose a Username..." v-model="username">
                            </div>
                            <!-- email -->
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" name="email" placeholder="Email..." v-model="email">
                            </div>
                            <!-- password -->
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Choose a Password..." v-model="password">
                            </div>
                            <!-- done -->
                            <button type="button" class="btn btn-outline-dark">Finished</button>
                        </form>
                        <router-link to="Login">Already have an account</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        }
    }
    
}
</script>

<style scoped>
form{
    padding-bottom: 1vh;
}
/* give logo background color */
.login-header{
    background-color: #dc3545;
}
/* logo font to white */
.login-logo{
    color: white;
}
</style>