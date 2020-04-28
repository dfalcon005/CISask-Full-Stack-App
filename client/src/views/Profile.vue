<template>
    <div>
        <navbar/>
        <div class="container">
            <div class="d-flex bd-highlight">
                <!-- Profile info -->
                <div class="profile-info ">
                    <div class="card" v-if="user">
                    <div class="card-header">
                        Profile Information
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: {{user.name}}</li>
                            <li class="list-group-item">Username: {{user.username}}</li>
                            <li class="list-group-item">Email: {{user.email}}</li>
                        </ul>
                    </div>
                </div>


            
                <!-- user post -->
                <div class="user-posts p-2 w-100 bd-highlight">
                    <!-- Heading -->
                    <h4 class="page-heading">MY POST</h4>
                    <hr>
                    <!-- this is a single post which loops through the Post api and displays all of them -->
                    <div class="post d-flex flex-row" v-for="(singlepost, i) in filterPost" :key="i">
                        <!-- card -->
                        <div class="card posts-card" >
                            <div class="card-body">
                                <h3 class="card-title">{{singlepost.title}}</h3>
                                <!-- need to fix date formatting -->
                                <h6 class="card-subtitle mb-2 text-muted">Posted {{moment(singlepost.datePosted).fromNow()}} by {{singlepost.userPosted}}</h6>
                                <span class="badge badge-primary">{{singlepost.class}}</span> <span class="badge badge-success">{{singlepost.professor}}</span>
                                <p class="card-text">{{singlepost.post}}</p>
                                <!-- add number of comments and like button -->
                                <router-link to="SinglePost" class="card-link stretched-link"> comments </router-link>
                                <a href="#" class="notlink">{{singlepost.likes}} likes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar.vue'
import { mapActions, mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters(['post']),
        ...mapGetters(['user']),
        filterPost(){
            return this.post.filter( posts => {
                return posts.userPosted == this.user.username;
            })            
        }
    },
    components: {
      Navbar
    },
    methods: {
        moment,
        ...mapActions(['getPost']),
        ...mapActions(['getProfile'])
    },
    async created() {
        this.getPost();
        this.getProfile();
    }
};
</script>

<style scoped>
a{
    color: black;
}
a:hover{
    color: #4b4b4b;
}
.container{
    padding-top: 2vh;
}
.profile-info{
    padding-top: 10vh;
    padding-right: 3vw;
    width: 25vw;
}
.post{
    margin-top: 2rem;
}
.likebtn{
    margin-top: 1vh;
    background: white;
    border: none;
}
.card{
    margin-left: 1vw;
    width: 100%;
}
.card-text{
    padding-top: 2vh;
}
.card-link{
    color: black;
    padding-right: 1rem;
}

</style>