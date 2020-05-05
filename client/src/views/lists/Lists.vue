<template>
    <div>
        <div class="row">
            <div class="col-sm-6" v-for="list in lists" :key="list._id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ list.name }}</h5>
                        <div class="row">
                            <div class="col">
                                <router-link :to="{path: '/lists/' + list._id}" class="btn btn-primary">Открыть</router-link>
                                <a class="btn btn-danger" @click.prevent="deleteLists(list._id)" v-if="isAdmin">Удалить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/lists/new" class="add btn btn-success" v-if="isAdmin">
            Добавить
        </router-link>
    </div>
</template>

<script>
    import {urlMixin} from "../../mixins/urlMixin";
    import axios from "axios";
    import {mapGetters} from "vuex";

    export default {
        mixins: [urlMixin],
        computed: {
            ...mapGetters(["isAdmin"])
        },
        data(){
            return{
                lists: []
            }
        },
        mounted() {
            this.getLists();
        },
        methods: {
            getLists() {
                axios.get(this.apiUrl() + '/api/visits_lists').then(res => {
                    this.lists = res.data.visits_lists;
                });
            },
            deleteLists(id) {
                if(confirm('Вы уверены?')){
                    axios.delete(this.apiUrl() + '/api/visits_lists/' + id).then(res => {
                        console.log("List was deleted.", res);
                        this.getLists();
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        margin-top: 20px;
    }
    .btn-danger{
        color: white;
        margin-left: 20px;
    }
    .add{
        margin-top: 20px;
    }
</style>