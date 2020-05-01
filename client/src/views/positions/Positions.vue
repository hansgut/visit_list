<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="position in positions" :key="position._id">
                {{ position.name }}
                <span class="badge">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Опции
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" @click.prevent="deletePosition(position._id)">Удалить</a>
            </div>
          </div>
        </span>
            </li>
        </ul>
        <router-link to="/positions/new" class="add btn btn-success">
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
                positions: []
            }
        },
        mounted() {
            this.getPositions();
        },
        methods: {
            getPositions() {
                axios.get(this.apiUrl() + '/api/positions').then(res => {
                    this.positions = res.data.positions;
                });
            },
            deletePosition(id) {
                axios.delete(this.apiUrl() + '/api/positions/' + id).then(res => {
                    console.log("Position was deleted.", res);
                    this.getPositions();
                });
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