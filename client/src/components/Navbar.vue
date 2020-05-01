<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Журнал взаимопосещений</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link to="/lists" class="nav-link" v-if="isLoggedIn">
                        Журналы
                        <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/users" class="nav-link" v-if="isAdmin">
                        Преподаватели
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/statistics" class="nav-link" v-if="isAdmin">
                        Статистика
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/subjects" class="nav-link" v-if="isAdmin">
                        Предмет
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/login" class="nav-link">
                        Войти
                    </router-link>
                </li>
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/register" class="nav-link">
                        Регистрация
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/profile" class="nav-link">
                        Профиль
                    </router-link>
                </li>
                <li class="nav-item" v-if="isLoggedIn" @click.prevent="logoutUser">
                    <a to="/logout" class="nav-link">
                        Выйти
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapGetters(["isLoggedIn", "isAdmin"])
        },
        methods: {
            ...mapActions(["logout"]),
            logoutUser() {
                this.logout();
            }
        }
    }
</script>

<style scoped>

</style>