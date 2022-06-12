<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body">
                            <div class="branding-form">
                                <div class="card-header-tab card-header">
                                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                        לוגו
                                    </div>
                                </div>
                                <div class="">
                                    <div class="row">
                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12">
                                                <img v-if="branding.logo" :src="branding.logo.image" alt="logo"
                                                     class="branding-image">
                                            </div>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12"><input name="file" id="logoInput" type="file"
                                                                          v-on:change="setFile($event,'logo')"
                                                                          class="form-control-file">
                                                <small class="form-text text-muted">הלוגו שלכם יופיע בחלק העליון של
                                                    הקטלוג
                                                    החכם.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <action-button @execute="saveLogo" :title="'שמירת לוגו'"></action-button>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div class="main-card mb-3 card">
                        <div class="card-body">
                            <div class="branding-form">
                                <div class="card-header-tab card-header">
                                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                        פופאפ
                                    </div>
                                </div>
                                <div class="">
                                    <div class="row">
                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12">
                                                <img v-if="branding.popup" :src="branding.popup.image" alt="popup"
                                                     class="branding-image">
                                            </div>
                                        </div>
                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12"><input name="file" id="popupInput" type="file"
                                                                          class="form-control-file"
                                                                          v-on:change="setFile($event,'popup')">
                                                <small class="form-text text-muted">הפופאפ מיועד להצגת מידע אינפורמטיבי
                                                    ו/או
                                                    הסיפור
                                                    שלכם</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                        <label for="popupBtn" class="mr-sm-2">קישור לפתיחת פופאפ</label>
                                        <input name="popupBtn" id="popupBtn" type="text"
                                               class="form-control" v-model="popupBtnText"
                                               placeholder="טקסט על הקישור">
                                    </div>
                                    <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                        <input name="check" id="autoOpenPopup" type="checkbox" class="form-check-input"
                                               v-model="autoOpenPopup">
                                        <label for="autoOpenPopup" class="form-check-label mr-sm-4">פתיחה
                                            אוטומטית</label>
                                    </div>
                                    <action-button @execute="savePopup" :title="'שמירת פופאפ'"></action-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="main-card mb-3 card">
                        <div class="card-body">
                            <div class="branding-form">
                                <div class="card-header-tab card-header">
                                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                        באנר
                                    </div>
                                </div>
                                <div class="">
                                    <div class="row">
                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12">
                                                <img v-if="branding.banner" :src="branding.banner.image" alt="banner"
                                                     class="branding-image">
                                            </div>
                                        </div>
                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12"><input name="file" id="bannerInput" type="file"
                                                                          class="form-control-file"
                                                                          v-on:change="setFile($event,'banner')">
                                                <small class="form-text text-muted">הבאנר יופיע בחלק העליון של הקטלוג
                                                    החכם
                                                    ומיועד
                                                    להצגת מידע חשוב.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <action-button @execute="saveBanner" :title="'שמירת באנר'"></action-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body">
                            <div class="branding-form">
                                <div class="card-header-tab card-header">
                                    <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                        צבעים
                                    </div>
                                </div>
                                <div class="">
                                    <div class="row">

                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12">
                                                <label for="mainColor" class="ml-sm-2">צבע ראשי</label>
                                                <input name="mainColor" id="mainColor" type="color"
                                                       class="form-control-file" v-model="mainColor">
                                                <small class="form-text text-muted">הצבע הדומיננטי של המיתוג
                                                    שלכם.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="mb-2 mr-sm-2 mb-sm-0 position-relative form-group">
                                            <div class="col-sm-12">
                                                <label for="secondColor" class="ml-sm-2">צבע משני</label>
                                                <input name="secondColor" id="secondColor" type="color"
                                                       class="form-control-file" v-model="secondColor">
                                                <small class="form-text text-muted">הצבע המשני של המיתוג שלכם.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <action-button @execute="saveColors" :title="'שמירת צבעים'"></action-button>
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
            heading: 'עיצוב',
            subheading: 'זה המקום להגדיר איך יראה הקטלוג החכם שלכם.',
            icon: 'icon-tags',

            logoFile: '',
            bannerFile: '',
            popupFile: '',
            popupBtnText: '',
            autoOpenPopup: false,

            mainColor:'',
            secondColor:''
        }),
        computed: {
            ...mapState('settings', ['branding'])
        },
        async mounted() {
            await this.getBranding();
            this.popupBtnText = this.branding.popup.btnText;
            this.autoOpenPopup = this.branding.popup.autoOpen;
            this.mainColor = this.branding.mainColor
            this.secondColor = this.branding.secondColor
        },
        methods: {
            ...mapActions('settings', ['getBranding', 'uploadBrandingFile', 'updatePopup', 'updateColors']),
            setFile(e, type) {
                // let fileSize = e.target.files[0].size / 1024;
                // if(fileSize > 200){
                //
                // }else {
                switch (type) {
                    case 'logo':
                        this.logoFile = e.target.files[0]
                        break;
                    case 'banner':
                        this.bannerFile = e.target.files[0];
                        break;
                    case 'popup':
                        this.popupFile = e.target.files[0];
                        break;
                }
                // }
            },
            async saveLogo({onExecuted}) {
                if (this.logoFile) {
                    await this.uploadBrandingFile({type: 'logo', file: this.logoFile})
                }
                onExecuted();
            },
            async savePopup({onExecuted}) {
                if (this.popupFile) {
                    await this.uploadBrandingFile({type: 'popup', file: this.popupFile})
                }
                await this.updatePopup({autoOpenPopup: this.autoOpenPopup, popupBtnText: this.popupBtnText})
                onExecuted()
            },
            async saveBanner({onExecuted}) {
                if (this.bannerFile) {
                    await this.uploadBrandingFile({type: 'banner', file: this.bannerFile})
                }
                onExecuted();
            },
            async saveColors({onExecuted}){
                await this.updateColors({mainColor:this.mainColor, secondColor:this.secondColor});
                onExecuted();
            }
        }

    }
</script>

<style>
    .branding-form div {
        margin-bottom: 10px !important;
    }

    .branding-image {
        width: 50px;
    }
</style>
