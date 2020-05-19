<template>
    <div>
        <navbar/>
        <div class="container">
            <h1 class="page-heading">FAQs/Help</h1>
            <div class="questions" v-for="(question, index) in faqs" :key="index">
                <hr>
                <h3>{{question.question}}</h3>
                <p>{{question.answer}}</p>
            </div>
            <hr>
            <a href="">For more help, please refer to the user guide.</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'

const url = "http://localhost:3000/faqs"

export default {
    components: {
        Navbar
    },
    data() {
        return{
            faqs: []
        }
    },
    async created() {
        try{
            const res = await axios.get(url)
            this.faqs = res.data;
        } catch(err){
            console.log(err)
        }
    }
}
</script>

<style scoped>
.container{
    padding-top: 2vh;
    padding-bottom: 2vh;
}
.page-heading{
    padding-bottom: 1vh;
}
/* .questions{
    padding-top: 1vh;
} */
</style>