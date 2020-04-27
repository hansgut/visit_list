<template>
    <div>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <a class="btn btn-primary" @click.prevent="addPosition">Submit</a>
            <router-link to="/positions" class="btn btn-danger">Cancel</router-link>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import { urlMixin } from "../../mixins/urlMixin";

    export default {
        mixins: [urlMixin],
        data() {
            return {
                name: ''
            }
        },
        methods: {
            addPosition(){
                let position = { name: this.name };
                axios.post(this.apiUrl() + '/api/positions', position)
                    .then(res => {
                        console.log("Position was added.", res);
                        this.$router.push('/positions');
                    });
            }
        }
    }
</script>

<style scoped>
    .btn-danger{
        margin-left: 20px;
    }
    .btn-primary{
        color: white;
    }
</style>