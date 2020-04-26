<template>
    <div class="wrapper">
    <form class="form-signin" @submit.prevent="loginUser">
        <h2 class="form-signin-heading">Please login</h2>
        <input id="email" type="text" class="form-control" name="email" v-model="email" placeholder="Email Address" required="" autofocus="" />
        <input id="password" type="password" class="form-control" name="password" v-model="password" placeholder="Password" required=""/>
        <input type="submit" class="btn btn-lg btn-primary btn-block btn-success" value="Login"/>
        <router-link to="/register" class="btn btn-lg btn-primary btn-block">Register</router-link>
    </form>
    </div>

</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Login",
        data(){
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            ...mapActions(['login']),
            loginUser() {
                let user = {
                    email: this.email,
                    password: this.password
                };
                this.login(user)
                    .then(res => {
                        if(res.data.success){
                            this.$router.push('/profile');
                        }
                    }).catch(err => {
                        console.log(err);
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
        margin: 0 auto;
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
    .form-signin .form-control {
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
    .form-signin input[type="text"] {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>