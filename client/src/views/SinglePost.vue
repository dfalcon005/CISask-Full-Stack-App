<template>
    <div>
        <navbar/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <a class="h5 page-heading" @click="$router.go(-1)">
                        <svg class="bi bi-arrow-left-short" width="2em" height="2em" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                        </svg>
                        Back
                    </a>
                </div>
                <div class="col heading">
                    <h4 class="page-heading">Post</h4>
                </div>
                <div class="col"></div>
            </div>
            <hr>
            <!-- post with all comments -->
            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title">{{post.title}}</h3>
                    <!-- need to fix date formatting -->
                    <h6 class="card-subtitle mb-2 text-muted">Posted {{moment(post.datePosted).fromNow()}} by {{post.userPosted}}</h6>
                    <span class="badge badge-primary">{{post.course}}</span> <span class="badge badge-success">{{post.professor}}</span>
                    <p class="card-text">{{post.post}}</p>
                    <!-- <p v-if="post.comments.length == 0">No comments</p>
                    <p v-if="post.comments.length == 1">{{post.comments.length}} comment</p>
                    <p v-if="post.comments.length > 1">{{post.comments.length}} comments</p> -->

                    <p>{{post.comments.length}} comments</p>
                    <hr>

                    <!-- input and button to post a comment -->
                    <form action="" v-if="isLoggedIn" v-on:submit.prevent="submitComment">
                        <div class="d-flex bd-highlight">
                            <!-- comment input field -->
                            <div class="p-2 flex-grow-1 bd-highlight">
                                <input name='currentComment' v-model='currentComment' type="text" class="form-control" placeholder="Comment here...">
                            </div>
                            <!-- submit button -->
                            <div class="p-2 bd-highlight">
                                <button type="submit" class="btn btn-outline-dark">Done</button>
                            </div>
                        </div>
                    </form>
                    <hr v-if="isLoggedIn">

                    <!-- Comment section -->
                    <h4 class="card-title">Comments</h4>
                    <!-- single comment -->
                    <div class="single-comment" v-for="(comment, i) in sortComments" :key="i">
                        <!-- comment information -->
                        <h6 class="card-subtitle mb-2 text-muted">Posted {{moment(comment.commentdate).fromNow()}}</h6>
                        <!-- comment content -->
                        <p class="card-text comment-content">{{comment.usercomment}}</p>
                        <hr>
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
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        Navbar
    },
    data() {
        return {
            id: this.$route.params.id,
            post: [],
            currentComment: ''
        }
    },
    methods: {
        moment,
        async submitComment() {
            this.post.comments.push({
                usercomment: this.currentComment // Our temporary value
            });
            return this.$http.put('http://localhost:3000/posts/' + this.id, this.post)
            .then(res => {
                console.log(res)
                // clear text field after submit
                this.currentComment = ''
            })
        }
    },
    computed: {
        ...mapGetters(['isLoggedIn']),
        sortComments(){
            return this.post.comments.sort((a,b) => {
                return a.commentdate < b.commentdate ? 1: -1
            }) 
        }
    },
    async created() {
        return this.$http.get('http://localhost:3000/posts/' + this.id)
        .then(res => {
            this.post = res.data
        })
    }
}
</script>

<style scoped>
a{
    color: black;
}
a:hover{
    color: #4b4b4b;
}
.container{
    padding-top: 5vh;
    padding-bottom: 5vh;
    width: 60vw;
}
.heading{
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    box-shadow: 0 .5rem .75rem 0 rgba(0, 0, 0, 0.2), 0 .5rem 1rem 0 rgba(0, 0, 0, 0.19);
}
.card-text{
    padding-top: 2vh;
}
.card-link{
    color: black;
    padding-right: 1rem;
}
.single-comment{
    padding-top: 2vh;
}
.comment-content{
    padding-top: 0;
}
</style>