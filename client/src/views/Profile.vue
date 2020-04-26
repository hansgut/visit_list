<template>
    <div>
        <h1>Profile</h1>
        <div class="card">
            <ul class="list-group">
                <li class="list-group-item">Email: {{ user.email }}</li>
                <li class="list-group-item">Full name: {{ user.name }} {{user.surname}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            ...mapActions(['getProfile'])
        },
        created() {
            this.getProfile();
        }
    }
</script>

<style scoped>

</style>