<template>
    <div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Planned date</th>
                <th scope="col">Date</th>
                <th scope="col">Visiting teacher</th>
                <th scope="col">Visited teacher</th>
                <th scope="col">Subject</th>
                <th scope="col">Lesson type</th>
                <th scope="col">Result</th>
                <th scope="col">Purpose</th>
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
                <td></td>
                <td>{{ row.purpose }}</td>
                <td v-if="isAdmin"><a class="btn btn-danger" @click.prevent="deleteRow(row._id)">Delete</a></td>
            </tr>
            </tbody>
        </table>
        <form v-if="isAdmin">
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Planned date" v-model="datePlan">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Date" v-model="date">
                </div>
                <div class="col">
                    <select id="visitingTeacher" class="form-control" v-model="visitingTeacher">
                        <option selected disabled>Visiting teacher</option>
                        <option v-for="user in users" :key="user._id" :value="user._id">
                            {{ getTeacherName(user) }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <select id="visitedTeacher" class="form-control" v-model="visitedTeacher">
                        <option selected disabled>Visited teacher</option>
                        <option v-for="user in users" :key="user._id" :value="user._id">
                            {{ getTeacherName(user) }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <select id="subject" class="form-control" v-model="subject">
                        <option selected disabled>Subject</option>
                        <option v-for="subject in subjects" :key="subject._id" :value="subject._id">
                            {{ getPropName(subject) }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <select id="lessonType" class="form-control" v-model="lessonType">
                        <option selected disabled>Lesson type</option>
                        <option v-for="lessonType in lessonTypes" :key="lessonType._id" :value="lessonType._id">
                            {{ getPropName(lessonType) }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Result" v-model="result">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Purpose" v-model="purpose">
                </div>
            </div>
            <div class="row"><div class="col"><br></div></div>
            <div class="row">
                <div class="col">
                    <a class="btn btn-success" @click.prevent="addRow">Submit</a>
                    <router-link to="/lists" class="btn btn-danger">Back</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {urlMixin} from "../../mixins/urlMixin";
    import axios from "axios";
    import moment from "moment";
    import {mapGetters} from "vuex";

    export default {
        mixins: [urlMixin],
        computed: {
            ...mapGetters(["isAdmin"])
        },
        data(){
            return{
                listRows: [],
                users: [],
                subjects: [],
                lessonTypes: [],
                visitedTeacher: '',
                visitingTeacher: '',
                datePlan: '',
                date: '',
                subject: '',
                lessonType: '',
                result: '',
                purpose: ''
            }
        },
        mounted() {
            this.getList();
            this.getUsers();
            this.getSubjects();
            this.getLessonTypes();
        },
        methods: {
            getList() {
                axios.get(this.apiUrl() + '/api/visits', { params: {visits_list: this.$route.params.id}}).then(res => {
                    this.listRows = res.data.visits;
                });
            },
            deleteList(id) {
                axios.delete(this.apiUrl() + '/api/visits/' + id).then(res => {
                    console.log("List was deleted.", res);
                    this.getPositions();
                });
            },
            dateFilter(date) {
                return moment(String(date)).format('DD.MM.YYYY')
            },
            getTeacherName(teacher){
                if (teacher){
                    return teacher.name + " " + teacher.surname;
                } else {
                    return ""
                }
            },
            getPropName(prop){
                if(prop){
                    return prop.name;
                } else {
                    return " ";
                }
            },
            getUsers(){
                axios.get(this.apiUrl() + '/api/users').then(res => {
                    this.users = res.data.users;
                });
            },
            getSubjects(){
                axios.get(this.apiUrl() + '/api/subjects').then(res => {
                    this.subjects = res.data.subjects;
                });
            },
            getLessonTypes(){
                axios.get(this.apiUrl() + '/api/lesson_types').then(res => {
                    this.lessonTypes = res.data.lesson_types;
                });
            },
            addRow(){
                let row = {
                    visited_teacher: this.visitedTeacher,
                    visiting_teacher: this.visitingTeacher,
                    date_plan: moment(String(this.datePlan)).format('YYYY-MM-DD'),
                    date_fact: moment(String(this.date)).format('YYYY-MM-DD'),
                    subject: this.subject,
                    lesson_type: this.lessonType,
                    result: this.result,
                    purpose: this.purpose
                };
                console.log(row);
                axios.post(this.apiUrl() + '/api/visits', row)
                    .then(res => {
                        console.log("Visit was added.", res);
                        this.getList();
                        this.visitedTeacher = '';
                        this.visitingTeacher = '';
                        this.datePlan = '';
                        this.date = '';
                        this.subject = '';
                        this.lessonType = '';
                        this.result = '';
                        this.purpose = '';
                    });
            },
            deleteRow(id){
                axios.delete(this.apiUrl() + '/api/visits/' + id).then(res => {
                    console.log("Visit was deleted.", res);
                    this.getList();
                });
            }
        }
    }
</script>

<style scoped>
    .btn-success{
        color: white;
    }
    .btn-danger{
        color: white;
        margin-left: 20px;
    }
</style>