<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>

        <div class="content">
            <div class="row">
                <div class="col-md-6">
                    <loader :loading="loadingSite"></loader>
                    <div v-if="!loadingSite" class="main-card mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                הקטגוריות באתר
                            </div>
                        </div>
                        <ul class="todo-list-wrapper list-group list-group-flush">
                            <li v-for="externalParent in allExternalParentCategories" :key="externalParent.id"
                                class="list-group-item">
                                <div v-b-toggle:[`collapse-${externalParent.id}`] class="card-header">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">{{externalParent.name}}
                                                    <div v-if="externalParent.smarketId"
                                                         class="badge badge-pill badge-success">מופיעה בקטלוג
                                                    </div>
                                                    <div v-else class="badge badge-pill badge-secondary">לא מופיעה
                                                        בקטלוג
                                                    </div>
                                                </div>
                                            </div>&nbsp;
                                            ({{allExternalChildCategories.filter(c=>c.parent ==
                                            externalParent.id).length}} תת קטגוריות)
                                            <div class="widget-content-right widget-content-actions">
                                                <button v-if="externalParent.smarketId"
                                                        class="border-0 btn-transition btn btn-outline-danger"
                                                        @click="deleteSmarketCategory(externalParent.smarketId)">
                                                    <font-awesome-icon icon="trash-alt"/>
                                                    הסרה מהקטלוג
                                                </button>
                                                <button v-else class="border-0 btn-transition btn btn-outline-success"
                                                        @click="addExternalCategory(externalParent.id)">
                                                    <font-awesome-icon icon="check"/>
                                                    הוספה לקטלוג
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <b-collapse :id="`collapse-${externalParent.id}`" class="mt-2">
                                    <div class="main-card mb-3 card">
                                        <!--                                <div class="card-header">תתי קטגוריות של {{parent.name}}</div>-->
                                        <ul class="todo-list-wrapper list-group list-group-flush">
                                            <li v-for="externalChild in allExternalChildCategories.filter(c=>c.parent == externalParent.id)"
                                                :key="externalChild.id"
                                                class="list-group-item">
                                                <div class="todo-indicator bg-warning"></div>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left">
                                                            <div class="widget-heading">{{externalChild.name}}
                                                                <div v-if="externalChild.smarketId"
                                                                     class="badge badge-pill badge-success">מופיעה
                                                                    בקטלוג
                                                                </div>
                                                                <div v-else class="badge badge-pill badge-secondary">לא
                                                                    מופיעה
                                                                    בקטלוג
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="widget-content-right widget-content-actions">
                                                            <button v-if="externalChild.smarketId"
                                                                    class="border-0 btn-transition btn btn-outline-danger"
                                                                    @click="deleteSmarketCategory(externalChild.smarketId)">
                                                                <font-awesome-icon icon="trash-alt"/>
                                                                הסרה מהקטלוג
                                                            </button>
                                                            <button v-else
                                                                    class="border-0 btn-transition btn btn-outline-success"
                                                                    @click="addExternalCategory(externalChild.id)">
                                                                <font-awesome-icon icon="check"/>
                                                                הוספה לקטלוג
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </b-collapse>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="col-md-6">
                    <loader :loading="loadingSmarket"></loader>
                    <div v-if="!loadingSmarket" class="main-card mb-3 card">
                        <div class="card-header-tab card-header">
                            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                                הקטגוריות בקטלוג החכם
                            </div>
                        </div>
                        <ul class="todo-list-wrapper list-group list-group-flush">
                            <li v-for="parent in allParentCategories" :key="parent.id"
                                class="list-group-item">
                                <div v-b-toggle:[`collapse-${parent.id}`] class="card-header">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">{{parent.name}}
                                                </div>
                                            </div>&nbsp;
                                            ({{allChildCategories.filter(c=>c.parentId == parent.id).length}} תת
                                            קטגוריות)
                                        </div>
                                    </div>
                                </div>
                                <b-collapse :id="`collapse-${parent.id}`" class="mt-2">
                                    <div class="main-card mb-3 card">
                                        <!--                                <div class="card-header">תתי קטגוריות של {{parent.name}}</div>-->
                                        <ul class="todo-list-wrapper list-group list-group-flush">
                                            <li v-for="child in allChildCategories.filter(c=>c.parentId == parent.id)"
                                                :key="child.id"
                                                class="list-group-item">
                                                <div class="todo-indicator bg-warning"></div>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left">
                                                            <div class="widget-heading">{{child.name}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </b-collapse>
                            </li>
                        </ul>
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
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
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
            Loader,
            FontAwesomeIcon
        },
        data: () => ({
            heading: 'קטגוריות',
            subheading: 'הגדרת קטגוריות מוצרים',
            icon: 'pe-7s-albums',

            loadingSite: false,
            loadingSmarket: false
        }),
        mounted() {
            this.loadingSite = true;
            this.loadingSmarket = true;
            this.getExternalCategories().then(() => this.loadingSite = false);
            this.getCategories().then(() => this.loadingSmarket = false);
        },
        computed: {
            ...mapState('categories', ['externalCategories', 'categories']),
            allParentCategories() {
                return this.categories.filter(c => !c.parentId)
            },
            allChildCategories() {
                return this.categories.filter(c => c.parentId)
            },
            allExternalCategories() {
                let all = this.externalCategories;
                for (let category of all) {
                    let smarketCategory = this.categories.find(c => c.externalId == category.id);
                    if (smarketCategory) {
                        category.smarketId = smarketCategory.id;
                        category.smarketOrder = smarketCategory.order;
                    }
                }
                return all;
            },
            allExternalParentCategories() {
                return this.allExternalCategories.filter(c => !c.parent)
            },
            allExternalChildCategories() {
                return this.allExternalCategories.filter(c => c.parent)
            }
        },
        methods: {
            ...mapActions('categories', ['getExternalCategories', 'getCategories', 'addCategory', 'deleteCategory']),
            addExternalCategory(categoryId) {
                this.addCategory(categoryId)
                this.getCategories();
            },
            deleteSmarketCategory(categoryId) {
                this.deleteCategory(categoryId)

                this.getExternalCategories();
                this.getCategories();
            }
        }
    }
</script>

<style>
    .card-header {
        cursor: pointer;
    }
</style>
