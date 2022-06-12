<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                            כיווץ תמונות
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="mb-2 ml-sm-2 mb-sm-0 position-relative form-group">

                                <b-form-radio-group id="reduceRadio"
                                                    buttons
                                                    button-variant="outline-primary"
                                                    size="lg"
                                                    v-model="selectedReduceOption"
                                                    :options="reduceOptions"
                                                    name="reduceRadio"/>

                                <div class="mt-2">מומלץ להפעיל כיווץ תמונות רק אם קובץ הקטלוג שוקל מעל 16MB</div>
                            </div>
                            <action-button @execute="saveMinimalPublish" :title="'שמירה'"></action-button>
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
            heading: 'הגדרות כלליות',
            subheading: 'זה המקום להגדיר הגדרות עבור הקטלוג החכם.',
            icon: 'icon-cog',

            selectedReduceOption: false,
            reduceOptions: [{text: 'מושבת', value: false}, {text: 'מופעל', value: true}],
        }),
        computed: {
            ...mapState('settings', ['settings'])
        },
        mounted() {
            this.getCatalogSettings().then(() => {
                this.selectedReduceOption = !!this.settings.minimalPublish;
            });
        },
        methods: {
            ...mapActions('settings', ['getCatalogSettings', 'setMinimalPublish']),
            async saveMinimalPublish({onExecuted}) {
                await this.setMinimalPublish({
                    minimalPublish: this.selectedReduceOption,
                })
                onExecuted();
            },
        },


    }

</script>

<style>
    #clearing-form div {
        margin-bottom: 10px !important;
    }
</style>
