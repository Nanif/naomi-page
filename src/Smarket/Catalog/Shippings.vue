<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <b-card title="" class="main-card mb-4">
            <div class="app-header-left">
                <b-button class="mr-2 mb-2 btn-transition btn-smarket-1"
                          @click="reloadShippings"
                >טעינת משלוחים מהאתר &nbsp;<i class="icon-upload-alt"></i>
                </b-button>
            </div>
            <loader :loading="loading"></loader>
            <div v-if="!loading">
                <b-table :striped="true"
                         :hover="true"
                         :items="shippings"
                         :fields="fields">
                </b-table>
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
            heading: 'משלוחים',
            subheading: 'הגדרת משלוחים',
            icon: 'icon-truck',

            fields: [{'name': {label: 'משלוח'}},{'price': {label: 'מחיר'}}, {'minimumCost': {label: 'מינימום להזמנה'}}, {'maximumCost': {label: 'מקסימום להזמנה'}}, {'externalId': {label: 'מזהה חיצוני'}}],
            loading: false
        }),
        mounted() {
            this.loading = true;
            this.getShippings().then(() => {
                this.loading = false;
            });
        },
        computed: {
            ...mapState('shippings', ['shippings']),
        },
        methods: {
            ...mapActions('shippings', ['getShippings', 'reloadShippings']),
        }
    }
</script>

<style>
    .card-header {
        cursor: pointer;
    }
</style>
