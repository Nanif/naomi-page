<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <div class="">
                            <div id="contact-form" class="">
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <label for="storeEmail" class="ml-sm-2">כתובת
                                        מייל</label>
                                    <input name="email" id="storeEmail" type="email"
                                           class="form-control" v-model="storeEmail">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group"><label
                                        for="storePhone" class="ml-sm-2">טלפון</label>
                                    <input name="storePhone" id="storePhone" type="tel"
                                           class="form-control" v-model="storePhone">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group"><label
                                        for="storePhone2" class="ml-sm-2">טלפון נוסף</label>
                                    <input name="storePhone2" id="storePhone2" type="tel"
                                           class="form-control" v-model="storePhone2">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group"><label
                                        for="sotreWhatsApp" class="ml-sm-2">וואטסאפ</label>
                                    <input name="sotreWhatsApp" id="sotreWhatsApp" type="tel"
                                           class="form-control" v-model="storeWhatsApp">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <label for="storeSite" class="ml-sm-2">אתר</label>
                                    <input name="storeSite" id="storeSite" type="url" class="form-control"
                                           v-model="storeSite" style="min-width: 270px">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <label for="storeStreet" class="ml-sm-2">רחוב</label>
                                    <input name="storeStreet" id="storeStreet" placeholder="" type="text"
                                           class="form-control" v-model="storeStreet">
                                </div>
                                <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">
                                    <label for="storeCity" class="ml-sm-2">עיר</label>
                                    <input name="storeCity" id="storeCity" placeholder="" type="text"
                                           class="form-control"
                                           v-model="storeCity">
                                </div>
                                <action-button @execute="saveContactDetails" :title="'שמירה'"></action-button>
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
            heading: 'פרטי קשר',
            subheading: 'זה המקום להגדיר את פרטי הקשר שלכם.',
            icon: 'icon-user',

            storeEmail: '',
            storePhone: '',
            storePhone2: '',
            storeWhatsApp: '',
            storeStreet: '',
            storeCity: '',
            storeSite: '',
        }),
        computed: {
            ...mapState('settings', ['contactDetails'])
        },
        async mounted() {
            await this.getContactDetails();
            this.storeEmail = this.contactDetails.email;
            this.storePhone = this.contactDetails.phone;
            this.storePhone2 = this.contactDetails.phone2;
            this.storeWhatsApp = this.contactDetails.whatsApp;
            this.storeStreet = this.contactDetails.address;
            this.storeCity = this.contactDetails.town;
            this.storeSite = this.contactDetails.website;
        },
        methods: {
            ...mapActions('settings', ['getContactDetails', 'updateContactDetails']),
            async saveContactDetails({onExecuted}) {
                await this.updateContactDetails({
                    storeEmail: this.storeEmail,
                    storePhone: this.storePhone,
                    storePhone2: this.storePhone2,
                    storeWhatsApp: this.storeWhatsApp,
                    storeStreet: this.storeStreet,
                    storeCity: this.storeCity,
                    storeSite: this.storeSite
                });
                onExecuted();
            },
        }
    }
</script>

<style>
    #contact-form div {
        margin-bottom: 10px !important;
    }
</style>
