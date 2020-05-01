<template>
  <div class="">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="user in users" :key="user._id">
        {{ user.name }} {{user.surname}}
        <span class="badge">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Опции
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" @click.prevent="deleteUser(user._id)">Удалить</a>
            </div>
          </div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import { urlMixin } from "../mixins/urlMixin";

  export default {
    mixins: [urlMixin],
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        axios.get(this.apiUrl() + '/api/users').then(res => {
          this.users = res.data.users;
        });
      },
      deleteUser(id) {
        axios.delete(this.apiUrl() + '/api/users/' + id).then(res => {
          console.log("User was deleted.", res);
          this.getUsers();
        });
      }
    }
  }
</script>

<style scoped>

</style>