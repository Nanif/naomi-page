<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                פרטים
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <div>מחובר לאתר בכתובת <a :href="integration.website" target="_blank">{{integration.website}}</a>
                                    </div>
                                    <div> מבוסס על מערכת
                                        <div class="mb-2 ml-2 badge badge-dark"
                                             style="vertical-align: -webkit-baseline-middle">{{integration.type}}
                                        </div>
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <div>טעינה אחרונה הופעלה על ידי
                                        <div class="mb-2 ml-2 badge badge-info"
                                             style="vertical-align: -webkit-baseline-middle">{{integration.lastUpdateBy
                                            || 'לא ידוע'}}
                                        </div>
                                        בתאריך {{integration.lastUpdated}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="main-card mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                עדכון אוטומטי
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="">
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <b-form-radio-group id="syncRadio"
                                                        buttons
                                                        button-variant="outline-primary"
                                                        size="lg"
                                                        v-model="selectedSync"
                                                        :options="syncOptions"
                                                        name="syncRadio"/>
                                    <label class="mr-lg-3">הפעלת עדכון מוצרים מהאתר באופן אוטומטי</label>
                                </div>

                                <action-button @execute="saveSyncData" :title="'שמירה'"></action-button>
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
    import ActionButton from "../Components/ActionButton";

    export default {
        components: {
            ActionButton,
            PageTitle,
        },
        data: () => ({
            heading: 'חיבור לאתר',
            subheading: 'זה המקום להגדיר את החיבור לאתר.',
            icon: 'icon-exchange',

            syncOptions: [
                {text: 'ללא', value: 'none'},
                {text: 'יומי', value: 'daily'},
                {text: 'סינכרון מלא', value: 'webhook'}],
            selectedSync: '',
        }),
        computed: {
            ...mapState('settings', ['integration']),
        },
        async mounted() {
            await this.getIntegrationData();
            this.selectedSync = this.integration.syncData;
        },
        methods: {
            ...mapActions('settings', ['getIntegrationData', 'setSyncData']),
            async saveSyncData({onExecuted}) {
                await this.setSyncData({syncData: this.selectedSync})
                onExecuted();
            }
        }

    }
</script>
