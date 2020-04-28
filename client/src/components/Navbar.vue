<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-danger">
            <h1 class="navbar-brand header-logo" href="#">Univeristy of Houston cis.ask</h1>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                        <router-link class="nav-link nav-item-effects" to="/faqs">FAQ</router-link>
                    </li>
                </ul>
            </div>

            
            <!-- profile sections -->
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
      </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
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
</style>