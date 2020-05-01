<template>

    <div class="row">
        <div class="col">
            <bar-chart :chartData="dataCollection" :options="options"></bar-chart>
        </div>
        <div class="col">
            <bar-chart :chartData="allDataCollection" :options="options"></bar-chart>
        </div>
    </div>

</template>

<script>
    import BarChart from '../Warehouse/BarChart';
    import {urlMixin} from "../mixins/urlMixin";
    import axios from "axios";

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
            }
        }
    }
</script>

<style scoped>
    .small {
        max-width: 500px;
        margin: auto;
    }
</style>