<template>
    <form class="form-signin" @submit.prevent="registerUser">
        <h2 class="form-signin-heading">Register</h2>
        <input id="name" type="text" class="form-control" name="name"
               v-model="name" placeholder="Name"
               required="" autofocus="" />
        <input id="surname" type="text" class="form-control" name="surname"
               v-model="surname" placeholder="Surname"
               required="" autofocus="" />
        <select id="position" class="form-control" v-model="position" style="height: 45px">
            <option disabled value="">Position</option>
            <option v-for="position in positions" :key="position._id" :value="position._id">
                {{ position.name }}
            </option>
        </select>
        <input id="email" type="text" class="form-control" name="email"
               v-model="email" placeholder="Email Address"
               required="" autofocus="" />
        <input id="password" type="password" class="form-control" name="password"
               v-model="password" placeholder="Password"
               required=""/>
        <input id="confirm_password" type="password" class="form-control" name="confirm_password"
               v-model="confirm_password" placeholder="Confirm password"
               required=""/>
        <input type="submit" class="btn btn-lg btn-primary btn-block btn-success" value="Register"/>
        <router-link to="/login" class="btn btn-lg btn-primary btn-block">Login</router-link>
    </form>
</template>

<script>
    import { mapActions } from 'vuex';
    import axios from "axios";
    import {urlMixin} from "../mixins/urlMixin";

    export default {
        mixins: [urlMixin],
        data(){
            return {
                name: "",
                surname: "",
                email: "",
                password: "",
                confirm_password: "",
                position: "",
                positions: []
            }
        },
        mounted() {
            this.getPositions();
        },
        methods: {
            ...mapActions(['register']),
            registerUser() {
                let user = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    position: this.position
                }
                this.register(user).then(res => {
                   if(res.data.success){
                       this.$router.push('/login');
                   }
                });
            },
            getPositions()
            {
                axios.get(this.apiUrl() + '/api/positions').then(res => {
                    this.positions = res.data.positions;
                });
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin-top: 80px;
        margin-bottom: 80px;
    }

    .form-signin {
        max-width: 380px;
        padding: 15px 35px 45px;
        margin: 20px auto;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .form-signin .form-signin-heading,
    .form-signin .checkbox {
        margin-bottom: 30px;
    }
    .form-signin .checkbox {
        font-weight: normal;
    }
    .form-signin .form-control, select {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="text"], select {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .form-signin input[id="confirm_password"] {
        margin-bottom: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>