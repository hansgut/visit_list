<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Плановая дата</th>
                    <th scope="col">Фактическая дата</th>
                    <th scope="col">Посещающий</th>
                    <th scope="col">Посещаймый</th>
                    <th scope="col">Дисциплина</th>
                    <th scope="col">Тип занятия</th>
                    <th scope="col">Результаты посещения</th>
                    <th scope="col">Цель посещения</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in listRows" :key="row._id">
                    <td>{{ dateFilter(row.date_plan) }}</td>
                    <td>{{ dateFilter(row.date_fact) }}</td>
                    <td>{{ getTeacherName(row.visiting_teacher) }}</td>
                    <td>{{ getTeacherName(row.visited_teacher) }}</td>
                    <td>{{ getPropName(row.subject) }}</td>
                    <td>{{ getPropName(row.lesson_type) }}</td>
                    <td>{{ row.result }}</td>
                    <td>{{ row.purpose }}</td>
                    <td v-if="isAdmin"><a class="btn btn-danger" @click.prevent="deleteRow(row._id)">Удалить</a></td>
                    <td v-if="canEdit(row)">
                        <router-link
                                :to="{path: '/lists/' + $route.params.id + '/' + row._id + '/edit'}"
                                class="btn btn-primary">
                        Изменить
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link
                v-if="isAdmin"
                :to="{path: '/lists/' + $route.params.id + '/add'}"
                class="btn btn-success">
            Добавить
        </router-link>
    </div>
</template>

<script>
    import { urlMixin } from "../../mixins/urlMixin";
    import axios from "axios";
    import moment from "moment";
    import { mapGetters } from "vuex";

    export default {
        mixins: [urlMixin],
        computed: {
            ...mapGetters(["isAdmin", "user"])
        },
        data(){
            return{
                listRows: []
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                axios.get(this.apiUrl() + '/api/visits', { params: {visits_list: this.$route.params.id}}).then(res => {
                    this.listRows = res.data.visits;
                });
            },
            dateFilter(date) {
                if (date){
                    return moment(String(date)).format('DD.MM.YYYY');
                } else {
                    return '';
                }
            },
            getTeacherName(teacher){ //TODO MIXIN
                if (teacher){
                    let position = "";
                    if(teacher.position) position = ` (${teacher.position.name})`
                    return teacher.name + " " + teacher.surname + position;
                } else {
                    return ""
                }
            },
            getPropName(prop){ //TODO MIXIN
                if(prop){
                    return prop.name;
                } else {
                    return " ";
                }
            },
            deleteRow(id){
                if(confirm('Вы уверены?')){
                    axios.delete(this.apiUrl() + '/api/visits/' + id).then(res => {
                        console.log("Visit was deleted.", res);
                        this.getList();
                    });
                }
            },
            editRow(row){
                console.log(row);
            },
            canEdit(row){
                return (row.visiting_teacher._id === this.user._id) || this.isAdmin;
            }
        }
    }
</script>

<style scoped>
    .btn{
        color: white;
        margin-left: 20px;
    }
</style>