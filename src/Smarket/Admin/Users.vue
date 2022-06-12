<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <b-card title="" class="main-card mb-4">
            <loader :loading="loading"></loader>
            <div v-if="!loading">
                <b-table :striped="true"
                         :hover="true"
                         :items="usersByPage"
                         :fields="fields">
                </b-table>
                <b-pagination v-if="users.length > 10" size="md" :total-rows="users.length" v-model="currentPage"
                              :per-page="10">
                </b-pagination>
            </div>

        </b-card>
    </div>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";
    import {mapState, mapActions} from 'vuex'
    import Loader from "../Components/Loader";
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faSpinner,
        faTrashAlt,
        faCheck,
        faCalendarAlt,
        faAngleDown,
        faAngleUp,
        faTh,
    } from '@fortawesome/free-solid-svg-icons'

    library.add(
        faSpinner,
        faTrashAlt,
        faCheck,
        faAngleDown,
        faAngleUp,
        faTh,
        faCalendarAlt,
    );

    export default {
        components: {
            PageTitle,
            Loader
        },
        data: () => ({
            heading: 'משתמשים',
            subheading: 'תצוגת משתמשים',
            icon: 'pe-7s-users',

            fields: [{'id': {label: 'מזהה'}}, {'email': {label: 'מייל'}}, {'password': {label: 'סיסמה'}}, {'role': {label: 'תפקיד'}}],
            currentPage: 1,
            loading: false
        }),
        mounted() {
            this.loading = true;
            this.getUsers().then(() => {
                this.loading = false;
            });
        },
        computed: {
            ...mapState('admin', ['users']),
            usersByPage() {
                return this.users ? this.users.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
            }
        },
        methods: {
            ...mapActions('admin', ['getUsers']),
        }
    }
</script>

<style>
    .card-header {
        cursor: pointer;
    }
</style>
