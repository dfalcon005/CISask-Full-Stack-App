<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-danger">
            <h1 class="navbar-brand header-logo" href="#">
                <router-link class="nav-link nav-item-effects logo-router" to="/">University of Houston CISask</router-link>
            </h1>
            <div class="hamburger-menu" v-bind:class="computedClass" v-on:click="change = !change">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>  
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="computedClass">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <router-link class="nav-link nav-item-effects" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-effects" to="/events">Events</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-effects" to="/classes">Classes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-item-effects" to="/faqs">FAQ/Help</router-link>
                    </li>
                </ul>
                <hr>
                <!-- Profile Section -->
                <div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-if="!isLoggedIn">
                            <router-link class="nav-link nav-item-effects" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="!isLoggedIn">
                            <router-link class="nav-link nav-item-effects" to="/signup">Sign Up</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                            <router-link class="nav-link nav-item-effects" to="/profile">Profile</router-link>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                            <a class="nav-link nav-item-effects" to="/logout" @click.prevent="logoutUser">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>         
      </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            change: false
        }
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        computedClass: function(){
            return {
                change: this.change
            }
        }
    },
    methods: {
        ...mapActions(["logout"]),
        logoutUser() {
        this.logout();
        }
    }

};
</script>

<style scoped>
.btn{
    color: white;
}
.navbar{
    box-shadow: 0 .5rem .75rem rgba(0, 0, 0, 0.2);
}
.navbar-brand{
    margin-right: 0;
}
.header-logo{
    padding-top: 1vh;
}
.logo-router{
    color: white;
    padding-left: 0;
}
.change{
    display: inline;
}
.hamburger-menu{
    display: none;
}
.bar1, .bar2, .bar3 {
  width: 2rem;
  height: .25rem;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}
.change .bar1 {
  transform: rotate(-45deg) translate(-7px, 5px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: rotate(45deg) translate(-8px, -8px);
}

@media screen and (max-width: 600px) {
    .hamburger-menu {
        display: inline;
    }
}
</style>