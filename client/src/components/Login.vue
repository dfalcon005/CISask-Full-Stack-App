<template>
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height:100vh">
            <div class="col-4">
                <div class="card">
                    <div class="card-body text-center login-header">
                        <h1 class="navbar-brand login-logo">Univeristy of Houston cis.ask</h1>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center">
                        <form action="" autocomplete="off">
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" placeholder="Email...">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password...">
                            </div>
                            <button type="button" id="sendlogin" class="btn btn-outline-dark">login</button>
                        </form>
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
form{
    padding-bottom: 1vh;
}
.login-header{
    background-color: #dc3545;
}
.login-logo{
    color: white;
}

</style>