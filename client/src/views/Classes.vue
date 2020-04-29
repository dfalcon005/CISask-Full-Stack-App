<template>
    <div>
        <navbar/>
        <div class="container">
            <h1 class="page-heading">CIS Classes</h1>
            <p>These are classes for the Fall 2020 term</p>
            <div class="questions" v-for="(course, index) in classes" :key="index">
                <hr>
                <h4>{{course.name}}: {{course.coursenumber}}</h4>
                <p>{{course.description}}</p>
                <h6>Professors</h6>
                <ul>
                    <div v-for="(prof, index) in course.professor" :key="index">
                        <li>{{prof.firstname}} {{prof.lastname}}</li>
                    </div>
                </ul>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'

const url = "http://localhost:3000/classes"

export default {
    components: {
        Navbar
    },
    data() {
        return{
            classes: []
        }
    },
    async created() {
        try{
            const res = await axios.get(url)
            this.classes = res.data;
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