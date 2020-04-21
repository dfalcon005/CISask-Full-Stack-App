<template>
    <div>
        <navbar/>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" id="" placeholder="Title here...">
                </div>
                <div class="form-group">
                    <label for="">Class</label>
                    <select id="" class="form-control">
                        <option selected>Choose Class</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Professor</label>
                    <select id="" class="form-control">
                        <option selected>Choose Professor</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Post</label>
                    <textarea class="form-control" rows="5" placeholder="Post here..."/>
                </div>
                <div class="d-flex flex-row justify-content-end">
                    <button type="button" class="btn btn-outline-dark">Submit</button>
                    <div class="buttondiv"/>
                    <button type="button" class="btn btn-outline-dark">Cancel</button>
                </div>
            </form>
        </div>
            
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components: {
        Navbar
    },
    data() {
        return{
            Post: [],
        }
    },
    async created() {
        try{
            const res = await axios.get(url)

            this.Post = res.data;
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
.form-group{
    padding-top: 2vh;
}
.buttondiv{
    width: 2vw;
}
</style>