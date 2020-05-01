<template>
    <div>
        <navbar/>
        <div class="container">
            <!-- post with all comments -->
            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title">Is this a good class?</h3>
                    <!-- need to fix date formatting -->
                    <h6 class="card-subtitle mb-2 text-muted">Posted 2 hours ago by user</h6>
                    <span class="badge badge-primary">4339</span> <span class="badge badge-success">fardosht</span>
                    <p class="card-text">is this a good class to take? are the test hard?</p>
                    <!-- add number of comments and like button -->
                    <a to="SinglePost" class="card-link"> # comments </a>
                    <a href="#" class="notlink"> # likes</a>
                    <hr>
                    <!-- input and button to post a comment -->
                    <form action="">
                        <div class="d-flex bd-highlight">
                            <!-- comment input field -->
                            <div class="p-2 flex-grow-1 bd-highlight">
                                <input type="text" name="comment" class="form-control" placeholder="Comment here...">
                            </div>
                            <!-- submit button -->
                            <div class="p-2 bd-highlight">
                                <button class="btn btn-outline-dark">done</button>
                            </div>
                        </div>
                    </form>
                    <hr>
                    <!-- Comment section -->
                    <h4 class="card-title">Comments</h4>
                    <!-- single comment -->
                    <div class="single-comment">
                        <!-- comment information -->
                        <h6 class="card-subtitle mb-2 text-muted">Posted 3 hours ago by user</h6>
                        <!-- comment content -->
                        <p class="card-text comment-content">I took this class and really like it</p>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components: {
        Navbar
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