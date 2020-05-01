<template>
    <div>
        <form>
            <div class="form-group">
                <label for="name">Название</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <a class="btn btn-primary" @click.prevent="addList">Сохранить</a>
            <router-link to="/lists" class="btn btn-danger">Отмена</router-link>
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
            addList(){
                let list = { name: this.name };
                axios.post(this.apiUrl() + '/api/visits_lists', list)
                    .then(res => {
                        console.log("List was added.", res);
                        this.$router.push('/lists');
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