<template>
    <div>
        <navbar/>
        <div class="my-container">
            <div class="d-flex bd-highlight">
                <!-- Profile info -->
                <div class="profile-info">
                    <h4 class="page-heading">MY PROFILE</h4>
                    <hr>
                    <div class="card" v-if="user">
                    <div class="card-header" id="info-header">
                        Profile Information
                    </div>
                        <ul class="list-group list-group-flush">
                            <!-- users name -->
                            <li class="list-group-item"> <span id="info-header">Name:</span> {{user.name}}</li>
                            <!-- users username -->
                            <li class="list-group-item"> <span id="info-header">Username:</span> {{user.username}}</li>
                            <!-- users email -->
                            <li class="list-group-item"><span id="info-header">Email:</span> {{user.email}}</li>
                        </ul>
                    </div>
                </div>


            
                <!-- user post -->
                <div class="user-posts bd-highlight post-section">
                    <!-- Heading -->
                    <h4 class="page-heading">MY POST</h4>
                    <hr>        
                    <!-- this is a single post which loops through the Post api and displays all of them -->
                    <div class="post d-flex flex-row" v-for="(p, i) in sortPost" :key="i">

                        <!-- delete option -->
                        <div class="d-flex flex-column justify-content-center">
                            <button class="btn btn-link" v-on:click="deletePost(p._id, i)" data-toggle="tooltip" data-placement="top" title="Delete this post">
                                <svg class="bi bi-trash delete-icon" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div> 

                        <!-- card -->
                        <div class="card posts-card" >
                            <div class="card-body">
                                <!-- title of post -->
                                <h3 class="card-title">{{p.title}}</h3>
                                <!-- date and user posted -->
                                <h6 class="card-subtitle mb-2 text-muted">Posted 
                                    <span id="date-posted">{{moment(p.datePosted).fromNow()}}</span> by 
                                    <span id="user-posted">{{p.userPosted}}</span>
                                </h6>
                                <!-- class and professor tags -->
                                <span class="badge badge-primary">{{p.course}}</span> <span class="badge badge-success">{{p.professor}}</span>
                                <!-- post content -->
                                <p class="card-text">{{p.post}}</p>
                                
                                <!-- Route to single page view / conditional formatting for number of comments -->
                                <!-- no comments -->
                                <router-link v-bind:to="'/post/' + p._id"  v-if="p.comments.length == 0" class="card-link stretched-link"> No commments </router-link>
                                <!-- 1 comment -->
                                <router-link v-bind:to="'/post/' + p._id"  v-if="p.comments.length == 1" class="card-link stretched-link"> {{p.comments.length}} Comment </router-link>
                                <!-- more than one comment -->
                                <router-link v-bind:to="'/post/' + p._id"  v-if="p.comments.length > 1" class="card-link stretched-link"> {{p.comments.length}} Comments </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <createPost/>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar.vue'
import CreatePost from '../components/CreatePost.vue'
import { mapActions, mapGetters } from "vuex"

export default {
    components: {
      Navbar,
      CreatePost
    },
    computed: {
        // get post from post store
        ...mapGetters(['post']),
        // get user from auth store
        ...mapGetters(['user']),
        // fitler post to only show users post
        filterPost(){
            return this.post.filter( posts => {
                return posts.userPosted == this.user.username;
            })            
        },
        sortPost(){
            return this.filterPost.sort((a,b) => {
                return a.datePosted < b.datePosted ? 1: -1
            })            
        }
    },
    methods: {
        moment,
        // use get post action from post store
        ...mapActions(['getPost']),
        // use get profile action from auth store
        ...mapActions(['getProfile']),
        // delete post
        async deletePost(id, i) {
            fetch('http://localhost:3000/posts/' + id, {
                method: "DELETE"
            }).then(() => {
                this.post.splice(i, 1)
                this.$router.go()
            })
        }
    },
    async created() {
        // call get post and get profile actions
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
.my-container{
    padding: 2vh 6vw 2vh 4vw;
}
.profile-info{
    width: 20vw;
}
.post-section{
    width: 60vw;
}
.user-posts{
    padding-left: 3vw;
    padding-right: 3vw;
}
.post{
    margin-top: 1rem;
}
.deleteButton{
    padding-right: 1vw;
}
.delete-icon:hover{
    width: 1.5rem;
    height: 1.5em;
}
.btn{
    color: black;
}
.card{
    width: 100%;
    box-shadow: 0 .5rem .75rem 0 rgba(0, 0, 0, 0.2), 0 .5rem 1rem 0 rgba(0, 0, 0, 0.19);
}
.posts-card:hover{
    border: 1px solid rgba(0, 0, 0, 0);
}
.card-text{
    padding-top: 2vh;
}
.card-link{
    color: black;
    padding-right: 1rem;
}
#info-header{
    font-weight: bold;
}
#date-posted{
    font-weight: bold;
}
#user-posted{
    font-weight: bold;
    font-style: italic;
}
</style>