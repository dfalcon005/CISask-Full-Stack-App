<template>
    <div>
        <navbar/>
        <!-- container for all post -->
        <div class="container">
            <!-- header for posts with new post button -->
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex flex-row">
                    <h5 class="page-heading">WHAT'S HAPPENING</h5>
                </div>
                <div>
                    <input type="text" class="form-control input-field" placeholder="Search post..." v-model="search"/>
                </div>
            </div>
            <hr>

            <!-- this is a single post which loops through the Post api and displays all of them -->
            <div class="post d-flex flex-row" v-for="(p, i) in filteredPost" :key="i">
                
                <!-- <div class="like d-flex flex-column justify-content-center">
                    <form action="">
                        <button class="btn btn-light likebtn" data-toggle="tooltip" data-placement="top" title="Like this post!">
                            <svg class="bi bi-chevron-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                        
                        <button  type="submit" class="btn btn-light likebtn" data-toggle="tooltip" data-placement="bottom" title="Dislike this post!">
                            <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </form>
                </div> -->

                <!-- card -->
                <div class="card posts-card" >
                    <div class="card-body">
                        <!-- title of post -->
                        <h3 class="card-title">{{p.title}}</h3>
                        <!-- date posted and user posted by -->
                        <h6 class="card-subtitle mb-2 text-muted">Posted 
                            <span id="date-posted">{{moment(p.datePosted).fromNow()}}</span> by 
                            <span id="user-posted">{{p.userPosted}}</span>
                        </h6>
                        <!-- class and professor tags -->
                        <!-- <span class="badge badge-primary">{{p.course}}</span>  -->
                        <span class="badge badge-success">{{p.professor}}</span>
                        <!-- main post content -->
                        <p class="card-text">{{p.post}}</p>
                        <!-- number of comments and likes -->
                        <!-- <a href="#" class="likes">{{p.likes}} likes</a> -->

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
        <createPost/>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar.vue'
import CreatePost from '../components/CreatePost.vue'
import { mapGetters, mapActions } from 'vuex';


export default {
    components: {
        Navbar,
        CreatePost
    },
    data() {
        return{
            likes: 0,
            id: '',
            sortDirection: 'asc',
            search: ''
        }
    },
    computed: {
        ...mapGetters(['post']),
        ...mapGetters(['isLoggedIn']),
        sortPost: function(){
            return this.post.sort((a,b) => {
                return a.datePosted < b.datePosted ? 1: -1
            })            
        },
        filteredPost: function(){
            return this.sortPost.filter((post) => {
                return post.title.toLowerCase().match(this.search) || post.professor.toLowerCase().match(this.search) || post.post.toLowerCase().match(this.search)
            })
        }
    },
    methods: {
        moment,
        ...mapActions(['getPost'])
    },
    async created() {
        this.getPost();
    }
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
    padding-bottom: 2vh;
}
.page-heading{
    padding-top: 1vh;
}
.input-field{
    width: 20rem;
}
.sort-button{
    padding-left: 1vw;
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
.likes{
    padding-right: 2vw;
}
#date-posted{
    font-weight: bold;
}
#user-posted{
    font-weight: bold;
    font-style: italic;
}
@media screen and (max-width: 600px) {
    .input-field {
        width: 8em;
    }
}
</style>