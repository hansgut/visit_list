<template>
    <div class="">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="subject in subjects" :key="subject._id">
                {{ subject.name }}
                <span class="badge">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Опции
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" @click.prevent="deleteSubject(subject._id)">Удалить</a>
            </div>
          </div>
        </span>
            </li>
        </ul>
        <router-link to="/subjects/new" class="add btn btn-success">
            Добавить
        </router-link>
    </div>
</template>

<script>
    import axios from "axios";
    import { urlMixin } from "../../mixins/urlMixin";

    export default {
        mixins: [urlMixin],
        data() {
            return {
                subjects: []
            }
        },
        mounted() {
            this.getSubjects();
        },
        methods: {
            getSubjects() {
                axios.get(this.apiUrl() + '/api/subjects').then(res => {
                    this.subjects = res.data.subjects;
                });
            },
            deleteSubject(id) {
                if(confirm('Are you sure?')){
                    axios.delete(this.apiUrl() + '/api/subjects/' + id).then(res => {
                        console.log("Subject was deleted.", res);
                        this.getSubjects();
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .add{
        margin-top: 20px;
        color: white;
    }
</style>