<template>
    <div>
        <div class="row">
            <div class="col">
                <bar-chart :chartData="dataCollection" :options="options"></bar-chart>
            </div>
            <div class="col">
                <bar-chart :chartData="allDataCollection" :options="options"></bar-chart>
            </div>
        </div>
        <div class="row">
            <div class="accordion" id="teachers">

                <div class="card" v-for="(statistic, index) in users" :key="statistic.user._id">
                    <div class="card-header" :id="'heading'+index">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#teacher'+index" aria-expanded="false" :aria-controls="'teacher'+index">
                                {{ statistic.user.name }} {{ statistic.user.surname }}
                            </button>
                        </h2>
                    </div>

                    <div :id="'teacher'+index" class="collapse" :aria-labelledby="'heading'+index" data-parent="#teachers">
                        <div class="card-body">

                            <div class="accordion" :id="'visits'+index">
                                <div class="card" v-if="rowExists(statistic.not_visited)">
                                    <div class="card-header" :id="'heading1'+index">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse1'+index" aria-expanded="true" :aria-controls="'collapse1'+index">
                                                Не посетил
                                            </button>
                                        </h2>
                                    </div>

                                    <div :id="'collapse1'+index" class="collapse" :aria-labelledby="'heading1'+index" :data-parent="'#visits'+index">
                                        <div class="card-body">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Дата</th>
                                                    <th scope="col">Преподователя</th>
                                                    <th scope="col"></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(row, rowIndex) in statistic.not_visited" :key="row._id">
                                                    <th scope="row">{{ rowIndex + 1 }}</th>
                                                    <td>{{ dateFilter(row.date_plan) }}</td>
                                                    <td>{{ getTeacherName(row.visited_teacher) }}</td>
                                                    <td>
                                                        <router-link :to="{path: '/lists/' + row.visits_list}" class="btn btn-primary">Перейти</router-link>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" v-if="rowExists(statistic.visited)">
                                    <div class="card-header" :id="'heading2'+index">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" :data-target="'#collapse2'+index" aria-expanded="false" :aria-controls="'collapse2'+index">
                                                Посетил
                                            </button>
                                        </h2>
                                    </div>
                                    <div :id="'collapse2'+index" class="collapse" :aria-labelledby="'heading2'+index" :data-parent="'#visits'+index">
                                        <div class="card-body">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Дата</th>
                                                    <th scope="col">Преподователя</th>
                                                    <th scope="col"></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(row, rowIndex) in statistic.visited" :key="row._id">
                                                    <th scope="row">{{ rowIndex + 1 }}</th>
                                                    <td>{{ dateFilter(row.date_fact) }}</td>
                                                    <td>{{ getTeacherName(row.visited_teacher) }}</td>
                                                    <td>
                                                        <router-link :to="{path: '/lists/' + row.visits_list}" class="btn btn-primary">Перейти</router-link>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>


</template>

<script>
    import BarChart from '../Warehouse/BarChart';
    import {urlMixin} from "../mixins/urlMixin";
    import axios from "axios";
    import moment from "moment";

    export default {
        mixins: [urlMixin],
        components: {
            BarChart
        },
        data () {
            return {
                dataCollection: {},
                allDataCollection:{},
                statistics: '',
                users: [],
                label: '',
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                stepSize: 3,
                                beginAtZero: true
                            }
                        }]
                    }
                }

            }
        },
        mounted () {
            this.getStatistics();
            this.getUserStatistics();
        },
        methods: {
            getStatistics(){
                axios.get(this.apiUrl() + '/api/statistics').then(res=>{
                    this.statistics = res.data.statistics;
                    this.dataCollection = {
                        labels: this.statistics.labels,
                        datasets: [
                            {
                                label: 'Посещенные',
                                backgroundColor: '#3CB371',
                                data: this.statistics.visited
                            },
                            {
                                label: 'Непосещенные',
                                backgroundColor: '#DC143C',
                                data: this.statistics.not_visited
                            }
                        ]
                    }

                    const allVisited = this.statistics.visited.reduce((a, b) => a + b, 0);
                    const allNotVisited = this.statistics.not_visited.reduce((a, b) => a + b, 0);
                    this.allDataCollection = {
                        labels: ['Все преподаватели'],
                        datasets: [
                            {
                                label: 'Посещенные',
                                backgroundColor: '#3CB371',
                                data: [allVisited]
                            },
                            {
                                label: 'Непосещенные',
                                backgroundColor: '#DC143C',
                                data: [allNotVisited]
                            }
                        ]
                    }

                });
            },
            getUserStatistics(){
                axios.get(this.apiUrl() + '/api/statistics/users').then(res=>{
                    this.users = res.data.users;
                });
            },
            rowExists(row){
                return row.length > 0 && typeof row !== "undefined"
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
            }
        }
    }
</script>

<style scoped>
    .small {
        max-width: 500px;
        margin: auto;
    }
    #teachers{
        width: 100%;
        margin-top: 20px;
    }
</style>