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
                                  <b-button class="mr-2 mb-2 btn-transition btn-smarket-1" :variant="'secondary'"
                                            @click="downloadCSV"
                                            style="float: left"
                                  >הורדת CSV &nbsp;<i class="icon-download-alt"></i>
                                  </b-button>
                                </div>
                            </div>
                            <div class="no-gutters row">
                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-10 bg-tempting-azure"></div>
                                            <i class="pe-7s-paper-plane text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers">{{meshivon.messages.length}}</div>
                                            <div class="widget-subheading" style="text-align: right">הודעות שנשלחו
                                                מהמשיבון
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-9 bg-tempting-azure"></div>
                                            <i class="pe-7s-mail-open text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">

                                            <div class="widget-numbers">{{distinctEmailsLength}}</div>
                                            <div class="widget-subheading" style="text-align: right">כתובות מייל יחודיות
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <b-table :striped="true"
                                         :hover="true"
                                         :items="messagesByPage"
                                         :fields="messagesFields">
                                </b-table>
                                <b-pagination v-if="meshivon.messages.length > 10" size="md"
                                              :total-rows="meshivon.messages.length" v-model="currentPage"
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
    import utils from "../../utils";
    export default {
        components: {
            PageTitle,
            Loader
        },
        data: () => ({
            heading: 'הודעות',
            subheading: 'הודעות מייל עם קטלוג חכם שנשלחו דרך המשיבון.',
            icon: 'icon-envelope-alt',

            messagesFields: [{'email': {label: 'כתובת מייל'}}, {'personName': {label: 'שם נמען'}}, {'sendingDate': {label: 'תאריך שליחה'}}, {'sendingTime': {label: 'שעת שליחה'}}],
            currentPage: 1,
            loading: false
        }),
        computed: {
            ...mapState('distribution',['meshivon']),
            messagesByPage() {
                return this.meshivon.messages.slice((this.currentPage - 1) * 10, this.currentPage * 10);
            },
            distinctEmailsLength() {
                let emails = this.meshivon.messages.map(m => m.email);
                return [...new Set(emails)].length;
            }
        },
        mounted() {
            this.loading = true;
            this.getMeshivonMessages().then(() => {
                this.loading = false;
            })
        },
        methods: {
            ...mapActions('distribution', ['getMeshivonMessages']),
          downloadCSV(){
              let data= this.meshivon.messages.map(m=>{
                return {email:m.email, sendingDate:m.sendingDate, sendingTime:m.sendingTime}
              })
            let csv = utils.ConvertToCSV(data)

            let csvContent = "data:text/csv;charset=utf-8," + csv;

            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "messages.csv");

            link.click()
          }
        }

    }
</script>

<style>
    #meshivon-form div {
        margin-bottom: 10px !important;
    }
</style>
