<template>
    <VisitForm :row="row" v-if="row"/>
</template>

<script>
    import VisitForm from "../../components/VisitForm";
    import axios from "axios";
    import { urlMixin } from "../../mixins/urlMixin";

    export default {
        mixins: [urlMixin],
        components: { VisitForm },
        data(){
          return {
            row: ''
          }
        },
        created() {
            this.getRow();
            console.log(this.row);
        },
        methods: {
            getRow(){
                axios.get(this.apiUrl() + '/api/visits/' + this.$route.params.visit_id)
                .then(res => {
                   this.row = res.data.visit;
                });
            }
        }
    }
</script>

<style scoped>

</style>