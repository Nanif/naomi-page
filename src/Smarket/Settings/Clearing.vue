<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <div>

                            <b-form-radio-group id="clearingRadio"
                                                buttons
                                                button-variant="outline-primary"
                                                size="lg"
                                                v-model="selectedClearingOption"
                                                :options="clearingOptions"
                                                name="clearingRadio"/>

                            <div v-if="selectedClearingOption == 'none'">
                                <action-button @execute="deleteClearing" :title="'שמירה'"></action-button>
                            </div>

                            <div v-if="selectedClearingOption == 'manual'">
                                <!--                                לשים הסבר וגם שדה לסיסמה להצפנה-->
                                <div class="mb-2 ml-sm-2 mb-sm-0 mt-5 position-relative form-group">
                                    <label for="manualPassword" class="ml-sm-2">סיסמת הצפנה</label>
                                    <input v-if="!clearing.password" name="manualPassword" id="manualPassword"
                                           type="text"
                                           class="form-control" v-model="manualPassword">
                                    <p v-else>{{paddedPassword}}</p>
                                    <label for="clearingOnlineLink" class="ml-sm-2">קישור לדף סליקה אינטרנטי</label>
                                    <input name="clearingOnlineLink" id="clearingOnlineLink" type="text"
                                           class="form-control" v-model="clearingOnlineLink">

                                </div>
                                <action-button @execute="saveManualClearing" :title="'שמירה'"></action-button>
                            </div>

                            <div v-if="selectedClearingOption == 'kesher'" id="clearing-form" class="mt-5">
                                <div>
                                    לפתיחת מסוף בקשר <a href="https://www.kesherhk.co.il/transnew" target="_blank">לחצו
                                    כאן</a>
                                    <div>יש להקיש את קוד הקופון:
                                        <div class="mb-2 ml-2 badge badge-success"
                                             style="vertical-align: -webkit-baseline-middle">SMARKET
                                        </div>
                                        (לא לשלם בעמוד התשלום, המחיר בו גבוה יותר)
                                    </div>
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <label for="kesherUserName" class="ml-sm-2">שם משתמש</label>
                                    <input name="kesherUserName" id="kesherUserName" type="text"
                                           class="form-control" v-model="kesherUserName">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group"><label
                                        for="kesherPassword" class="ml-sm-2">סיסמה</label>
                                    <input name="kesherPassword" id="kesherPassword" type="text"
                                           class="form-control" v-model="kesherPassword">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group"><label
                                        for="kesherProject" class="ml-sm-2">מספר פרויקט</label>
                                    <input name="kesherPassword" id="kesherProject" type="text"
                                           class="form-control" v-model="kesherProject">
                                </div>
                                <action-button @execute="saveKesherClearing" :title="'שמירה'"></action-button>
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
            heading: 'סליקת אשראי',
            subheading: 'זה המקום להגדיר סליקת אשראי מובנית בקטלוג החכם.',
            icon: 'icon-credit-card',

            selectedClearingOption: 'none',
            clearingOptions: [
                {text: 'ללא סליקה', value: 'none'},
                {text: 'סליקה ידנית', value: 'manual'},
                {text: 'חברת קשר', value: 'kesher'},
                {text: 'נדרים פלוס - בקרוב!', value: 'nedarim', disabled: true}
            ],

            kesherUserName: '',
            kesherPassword: '',
            kesherProject: '',

            manualPassword: '',
            clearingOnlineLink: '',
        }),
        computed: {
            ...mapState('clearing', ['clearing']),
            paddedPassword() {
                let password = this.manualPassword.substr(this.manualPassword.length - 4);
                window.console.log('password', password)
                return password.padStart(this.manualPassword.length, '*')
            }
        },
        async mounted() {
            await this.getClearing();
            this.clearingOnlineLink = this.clearing.clearingOnlineLink;

            this.selectedClearingOption = this.clearing.type;
            switch (this.clearing.type) {
                case "kesher":
                    this.kesherUserName = this.clearing.userName;
                    this.kesherPassword = this.clearing.password;
                    this.kesherProject = this.clearing.project;
                    break;
                case "manual":
                    this.manualPassword = this.clearing.password;
                    break;
            }
        },
        methods: {
            ...mapActions('clearing', ['getClearing', 'setClearing', 'deleteClearingSetting']),
            async saveKesherClearing({onExecuted}) {
                await this.setClearing({
                    type: this.selectedClearingOption,
                    userName: this.kesherUserName,
                    password: this.kesherPassword,
                    project: this.kesherProject
                })
                onExecuted();
            },
            async saveManualClearing({onExecuted}) {
                await this.setClearing({
                    type: this.selectedClearingOption,
                    password: this.manualPassword,
                    clearingOnlineLink: this.clearingOnlineLink
                })
                onExecuted();
            },
            async deleteClearing({onExecuted}) {
                await this.deleteClearingSetting()
                onExecuted()
            }
        },
    }

</script>

<style>
    #clearing-form div {
        margin-bottom: 10px !important;
    }
</style>
