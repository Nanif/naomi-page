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
                                הגדרת משיבון
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <div id="meshivon-form">
                                    <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                        <b-form-radio-group id="activateMeshivon"
                                                            buttons
                                                            button-variant="outline-primary"
                                                            size="lg"
                                                            v-model="activateMeshivon"
                                                            :options="meshivonOptions"
                                                            name="activateMeshivon"/>
                                    </div>
                                    <div class="divider"></div>
                                    <div v-if="activateMeshivon"
                                         class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                        <label for="meshivonStoreCode" class="ml-sm-2">קוד חנות למשיבון</label>
                                        <input name="meshivonStoreCode" id="meshivonStoreCode" type="text"
                                               class="form-control" v-model="meshivonStoreCode"
                                               placeholder="מילה אחת באותיות אנגליות בלבד, ללא רווחים">
                                    </div>
                                    <div v-if="activateMeshivon"
                                         class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                        <label for="meshivonReplyTo" class="ml-sm-2">מייל לתגובה</label>
                                        <input name="meshivonReplyTo" id="meshivonReplyTo" type="text"
                                               class="form-control" v-model="meshivonReplyTo"
                                               placeholder="כתובת מייל שאליה יופנו המיילים בלחיצה על 'השב'">
                                    </div>
                                    <action-button @execute="saveMeshivon" :title="'שמירה'"></action-button>
                                </div>
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
            PageTitle,
            ActionButton
        },
        data: () => ({
            heading: 'משיבון חכם',
            subheading: 'משיבון במייל למענה אוטומטי עם קטלוג חכם מצורף.',
            icon: 'icon-cogs',

            activateMeshivon: false,
            meshivonStoreCode: '',
            meshivonReplyTo: '',

            meshivonOptions: [{text: 'מושבת', value: false}, {text: 'מופעל', value: true}],
        }),
        computed: {
            ...mapState('distribution', ['meshivon'])
        },
        mounted() {
            this.getMeshivon().then(() => {
                this.activateMeshivon = this.meshivon.activate;
                this.meshivonStoreCode = this.meshivon.storeCode;
                this.meshivonReplyTo = this.meshivon.replyTo;
            });

        },
        methods: {
            ...mapActions('distribution', ['getMeshivon', 'setMeshivon']),
            async saveMeshivon({onExecuted}) {
                if (this.activateMeshivon) {
                    await this.setMeshivon({storeCode: this.meshivonStoreCode, replyTo: this.meshivonReplyTo})
                } else {
                    //TODO remove
                }
                onExecuted();
            }
        }

    }
</script>

<style>
    #meshivon-form div {
        margin-bottom: 10px !important;
    }
</style>
