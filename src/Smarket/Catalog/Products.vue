<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <b-card title="" class="main-card mb-4">
            <div class="app-header-left">
                <b-button class="mr-2 mb-2 btn-transition btn-smarket-1" :variant="'secondary'"
                          @click="reloadProducts"
                >טעינת מוצרים מהאתר &nbsp;<i class="icon-upload-alt"></i>
                </b-button>
            </div>
            <loader :loading="loading"></loader>
            <div v-if="!loading">
                <b-table :striped="true"
                         :hover="true"
                         :items="productsByPage"
                         :fields="fields">
                </b-table>
                <b-pagination v-if="products.length > 10"  size="md" :total-rows="products.length" v-model="currentPage" :per-page="10">
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
            heading: 'מוצרים',
            subheading: 'הגדרת מוצרים',
            icon: 'pe-7s-box1',

            fields: [{'number': {label: 'מק"ט'}}, {'name': {label: 'שם'}}, {'price': {label: 'מחיר'}}, {'externalId': {label: 'מזהה חיצוני'}}],
            currentPage: 1,
            loading: false
        }),
        mounted() {
            this.loading = true;
            this.getProducts().then(() => {
                this.loading = false;
            });
        },
        computed: {
            ...mapState('products', ['products']),
            productsByPage() {
                return this.products ? this.products.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
            }
        },
        methods: {
            ...mapActions('products', ['getProducts', 'reloadProducts']),
        }
    }
</script>

<style>
    .card-header {
        cursor: pointer;
    }
</style>
