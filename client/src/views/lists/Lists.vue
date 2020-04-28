<template>
    <div>
        <div class="row">
            <div class="col-sm-6" v-for="list in lists" :key="list._id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ list.name }}</h5>
                        <div class="row">
                            <div class="col">
                                <router-link :to="{path: '/lists/' + list._id}" class="btn btn-primary">Open</router-link>
                            </div>
                            <div class="col">
                                <td v-if="isAdmin"><a class="btn btn-danger" @click.prevent="deleteLists(list._id)">Delete</a></td>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                axios.delete(this.apiUrl() + '/api/visits_lists/' + id).then(res => {
                    console.log("List was deleted.", res);
                    this.getLists();
                });
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
    }
</style>