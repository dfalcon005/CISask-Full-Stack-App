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
                    <!-- this is a single post which loops through the Post api and displays all of them -->
                    <div class="post d-flex flex-row" v-for="(singlepost, i) in Post" :key="i">
                        <!-- div with like buttons -->
                        <div class="like d-flex flex-column justify-content-center">
                            <!-- Like button -->
                            <button  type="button" class="btn btn-light likebtn" data-toggle="tooltip" data-placement="top" title="Like this post!">
                                <svg class="bi bi-chevron-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                            <!-- Dislike button -->
                            <button  type="button" class="btn btn-light likebtn" data-toggle="tooltip" data-placement="bottom" title="Dislike this post!">
                                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                        <!-- card -->
                        <div class="card posts-card" >
                            <div class="card-body">
                                <h3 class="card-title">{{singlepost.title}}</h3>
                                <!-- need to fix date formatting -->
                                <h6 class="card-subtitle mb-2 text-muted">Posted {{moment(singlepost.datePosted).fromNow()}} by {{singlepost.user}}</h6>
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

const url = "http://localhost:3000/posts"

export default {
    computed: mapGetters(["user"]),
    components: {
      Navbar
    },
    data() {
        return{
            Post: [],
            date: ''
        }
    },
    methods: {
        moment,
        ...mapActions(["getProfile"])
    },
    async created() {
        this.getProfile();
        try{
            const res = await axios.get(url)

            this.Post = res.data;
        } catch(err){
            console.log(err)
        }
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
    padding-top: 4vh;
    padding-right: 2vw;
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