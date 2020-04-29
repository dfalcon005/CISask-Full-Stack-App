<template>
    <div>
        <navbar/>
        <div class="container">
            <form v-on:submit.prevent="newPost">
                <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" name="title" v-model="title" placeholder="Title here...">
                </div>
                <div class="form-group" v-if="user">
                    <label for="">User</label>
                    <select name='userPosted' v-model='userPosted' class="form-control">
                        <option disabled>Choose user</option>
                        <option> Anonymous </option>
                        <option> {{user.username}} </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Class</label>
                    <select name='course' v-model='course' class="form-control">
                        <option disabled>Choose Class</option>
                        <option>2332</option>
                        <option>2334</option>
                        <option>2336</option>
                        <option>2337</option>
                        <option>2348</option>
                        <option>3343</option>
                        <option>3347</option>
                        <option>3355</option>
                        <option>3365</option>
                        <option>3368</option>
                        <option>4338</option>
                        <option>4339</option>
                        <option>4375</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Professor</label>
                    <select name='professor' v-model='professor' class="form-control">
                        <option disabled>Choose Professor</option>
                        <option>Abdi Sadeghi</option>
                        <option>Brandon GreenField</option>
                        <option>Bret Detillier</option>
                        <option>Chris Bronk</option>
                        <option>Fardosht Amirpanahi</option>
                        <option>Gandhimathi Velusamy</option>
                        <option>Houghton Brown</option>
                        <option>Jose Martinez</option>
                        <option>Kyhia Bostic</option>
                        <option>Mehran Viseh</option>
                        <option>Negin Tabrizi</option>
                        <option>Otto Dobretsberger</option>
                        <option>Peter Weber</option>
                        <option>Sajida Faiyaz</option>
                        <option>Susan Miertschin</option>
                        <option>Thomas Gibbs</option>
                        <option>Xuqing Wu</option>
                        <option>Yunpeng Zhang</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Post</label>
                    <textarea class="form-control" rows="5" name="post" v-model="post" placeholder="Post here..."/>
                </div>
                <div class="d-flex flex-row justify-content-end">
                    <button type="submit" class="btn btn-outline-dark">Submit</button>
                    <div class="buttondiv"/>
                    <router-link to="home" type="button" class="btn btn-outline-dark">Cancel</router-link>
                </div>
            </form>
        </div>  
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    },
    computed: {
        ...mapGetters(["user"])
    },
    data() {
        return{
            title: '',
            userPosted: '',
            course: '',
            professor: '',
            post: ''
        }
    },
    methods: {
        ...mapActions(["getProfile"]),
        ...mapActions(['createPost']),
        newPost() {
            let newpost = {
                title: this.title,
                userPosted: this.userPosted,
                course: this.course,
                professor: this.professor,
                post: this.post
            };
            this.createPost(newpost).then(res => {
                this.$router.push('/');
            })
        }
    }, 
    async created() {
        this.getProfile();
    }
}
</script>

<style scoped>
.container{
    padding-top: 2vh;
}
.form-group{
    padding-top: 2vh;
}
.buttondiv{
    width: 2vw;
}
</style>