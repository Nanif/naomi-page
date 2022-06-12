<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <loader :loading="loading"></loader>
                        <div v-if="!loading">
                            <div class="card-header-tab card-header">
                                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                    נתונים
                                </div>
                              <div>לתשומת לב! הנתונים המוצגים מתיחסים ל1000 הבקשות האחרונות בלבד.</div>
                            </div>
                            <div class="no-gutters row">
                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-10 bg-tempting-azure"></div>
                                            <i class="pe-7s-cloud-download text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers">{{downloads.length}}</div>
                                            <div class="widget-subheading" style="text-align: right">סך הכל הורדות וצפיות
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-9 bg-tempting-azure"></div>
                                            <i class="pe-7s-cloud-download text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">

                                            <div class="widget-numbers">{{downloadsCount}}</div>
                                            <div class="widget-subheading" style="text-align: right">סך הכל הורדות
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-9 bg-tempting-azure"></div>
                                            <i class="pe-7s-look text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">

                                            <div class="widget-numbers">{{viewsCount}}</div>
                                            <div class="widget-subheading" style="text-align: right">סך הכל צפיות
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <b-table :striped="true"
                                         :hover="true"
                                         :items="downloadsByPage"
                                         :fields="downloadsFields">
                                    <template #cell(eventName)="data">
                                        <div v-if="data.value == 'download'">
                                            הורדה <i class="icon-cloud-download"></i>
                                        </div>
                                        <div v-if="data.value == 'view'">
                                            צפיה <i class="icon-eye-open"></i>
                                        </div>
                                    </template>
                                </b-table>
                                <b-pagination v-if="downloads.length > 10" size="md"
                                              :total-rows="downloads.length" v-model="currentPage"
                                              :per-page="10">
                                </b-pagination>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";
    import {mapState, mapActions} from 'vuex'
    import Loader from "../Components/Loader";

    export default {
        components: {
            Loader,
            PageTitle,
        },
        data: () => ({
            heading: 'הורדות',
            subheading: 'הורדות מדרייב של הקטלוג החכם.',
            icon: 'pe-7s-cloud-download',
            //TODO למפות למילים בהעברית הורדה או צפיה עם איקון
            downloadsFields: [{'actorEmail': {label: 'לקוח'}}, {'eventName': {label: 'פעולה'}}, {'dateTime': {label: 'תאריך ושעה'}}],
            currentPage: 1,
            loading: false
        }),
        computed: {
            ...mapState('distribution', ['downloads']),
            downloadsByPage() {
                return this.downloads.slice((this.currentPage - 1) * 10, this.currentPage * 10);
            },
            downloadsCount() {
                return this.downloads.filter(d=>d.eventName == "download").length;
            },
            viewsCount() {
                return this.downloads.filter(d=>d.eventName == "view").length;
            }
        },
        mounted() {
            this.loading = true;
            this.getDownloads().then(() => {
                this.loading = false;
            })
        },
        methods: {
            ...mapActions('distribution', ['getDownloads']),
        }

    }
</script>

<style>
    #meshivon-form div {
        margin-bottom: 10px !important;
    }
</style>
