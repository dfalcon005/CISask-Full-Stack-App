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
                            <!-- username -->
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" placeholder="Choose a Username...">
                            </div>
                            <!-- email -->
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" placeholder="UH Email...">
                            </div>
                            <!-- password -->
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Choose a Password...">
                            </div>
                            <!-- done -->
                            <button type="button" class="btn btn-outline-dark">done</button>
                        </form>
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
/* give logo background color */
.login-header{
    background-color: #dc3545;
}
/* logo font to white */
.login-logo{
    color: white;
}
</style>