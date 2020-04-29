<template>
    <div>
        <navbar/>
        <div class="container">
            <!-- post with all comments -->
            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title">{{post.title}}</h3>
                    <!-- need to fix date formatting -->
                    <h6 class="card-subtitle mb-2 text-muted">Posted {{moment(post.datePosted).fromNow()}} by {{post.userPosted}}</h6>
                    <span class="badge badge-primary">{{post.class}}</span> <span class="badge badge-success">{{post.professor}}</span>
                    <p class="card-text">{{post.post}}</p>
                    <!-- add number of comments and like button -->
                    <!-- <a to="SinglePost" class="card-link"> # comments </a> -->
                    <a href="#" class="notlink">{{post.likes}} likes</a>
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
                                <button type="submit" class="btn btn-outline-dark">done</button>
                            </div>
                        </div>
                    </form>
                    <hr v-if="isLoggedIn">

                    <!-- Comment section -->
                    <h4 class="card-title">Comments</h4>
                    <!-- single comment -->
                    <div class="single-comment" v-for="(comment, i) in post.comments" :key="i">
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
            currentComment: '',
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
        ...mapGetters(['isLoggedIn'])
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