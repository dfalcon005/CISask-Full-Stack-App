<template>
    <div>
        <navbar/>
        <div class="container">
            <div class="d-flex bd-highlight">
                <!-- Profile info -->
                <div class="profile-info">
                    <h4 class="page-heading">MY PROFILE</h4>
                    <hr>
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
                        <!-- delete option -->
                        <div class="d-flex flex-column justify-content-center">
                            <a href="" class="deleteButton" data-toggle="tooltip" data-placement="top" title="Delete this post (There is no going back)">
                                <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </div> 
                        <!-- card -->
                        <div class="card posts-card" >
                            <div class="card-body">
                                <h3 class="card-title">{{singlepost.title}}</h3>
                                <!-- need to fix date formatting -->
                                <h6 class="card-subtitle mb-2 text-muted">Posted {{moment(singlepost.datePosted).fromNow()}} by {{singlepost.userPosted}}</h6>
                                <span class="badge badge-primary">{{singlepost.class}}</span> <span class="badge badge-success">{{singlepost.professor}}</span>
                                <p class="card-text">{{singlepost.post}}</p>
                                <!-- add number of comments and like button -->
                                <router-link v-bind:to="'/post/' + singlepost._id" class="card-link stretched-link"> comments </router-link>
                                <a class="notlink">{{singlepost.likes}} likes</a>
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
    padding-top: 1vh;
    padding-right: 3vw;
    width: 25vw;
}
.post{
    margin-top: 1rem;
}
.deleteButton{
    padding-right: 1vw;
}
.card{
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