<template>
    <div>
        <navbar/>
        <div class="container">
            <h1 class="page-heading">Events happening in the College of Technology</h1>
            <div class="questions" v-for="(event, index) in events" :key="index">
                <hr>
                <h3 class="page-heading">{{event.eventname}}</h3>
                <h5 class="page-heading">{{moment(event.eventdate).format('MMMM Do, YYYY')}}</h5>
                <h6 class="page-heading">{{event.description}}</h6>
                <p>{{event.additional}}</p>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar.vue'

const url = "http://localhost:3000/events"

export default {
    components: {
        Navbar
    },
    methods: {
        moment
    },
    data() {
        return{
            events: []
        }
    },
    async created() {
        try{
            const res = await axios.get(url)
            this.events = res.data;
        } catch(err){
            console.log(err)
        }
    }
}
</script>

<style scoped>
.container{
    padding-top: 2vh;
}
.page-heading{
    padding-bottom: 1vh;
}
</style>