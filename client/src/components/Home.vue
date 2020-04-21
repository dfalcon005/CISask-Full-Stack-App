<template>
    <div>
        <navbar/>
        <!-- container for all post -->
        <div class="container">
            <!-- header for posts with new post button -->
            <div class="d-flex flex-row justify-content-between">
                <h4 class="page-heading">WHAT'S HAPPENING</h4>
                <router-link class="btn btn-link" to="NewPost">
                    <svg class="bi bi-pencil-square" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                    </svg>
                </router-link>
            </div>
            <hr>

            <!-- this is a single post which loops through the Post api and displays all of them -->
            <div class="post d-flex flex-row" v-for="(singlepost, i) in Post" :key="i">
                <!-- like buttons -->
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
                <div class="card" >
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
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Navbar from './Navbar.vue'


const url = "http://localhost:3000/posts"

export default {
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
        moment
    },
    async created() {
        try{
            const res = await axios.get(url)

            this.Post = res.data;
        } catch(err){
            console.log(err)
        }
    },
    
}
</script>

<style scoped>
hr {
    margin-top: 1vh;
}
a{
    color: black;
}
a:hover{
    color: #4b4b4b;
}

.container{
    padding-top: 2vh;
}
.page-heading{
    padding-top: 1vh;
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