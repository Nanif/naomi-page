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
                                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>נתונים
                                </div>
                                <b-form-checkbox name="ordersCheck" v-model="ordersCheck" switch @change="currentPage = 1">
                                    הצגת הזמנות פעילות בלבד
                                </b-form-checkbox>
                            </div>
                            <div class="no-gutters row">
                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-10 bg-tempting-azure"></div>
                                            <i class="pe-7s-cart text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers">{{filteredOrders.length}}</div>
                                            <div class="widget-subheading" style="text-align: right"> כמות הזמנות
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-9 bg-tempting-azure"></div>
                                            <i class="pe-7s-cash text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">

                                            <div class="widget-numbers">{{parseInt(totalAmount).toLocaleString()}} ₪
                                            </div>
                                            <div class="widget-subheading" style="text-align: right">סכום כולל
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-xl-4">
                                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                                        <div class="icon-wrapper rounded-circle">
                                            <div class="icon-wrapper-bg opacity-9 bg-tempting-azure"></div>
                                            <i class="pe-7s-calculator text-white opacity-8"></i></div>
                                        <div class="widget-chart-content">

                                            <div class="widget-numbers">{{avgAmount}} ₪</div>
                                            <div class="widget-subheading" style="text-align: right">סכום ממוצע להזמנה
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider m-0 d-md-none d-sm-block"></div>
                                </div>
                            </div>

                            <div class="card-body">
                                <div>
                                    <b-table :striped="true"
                                             :hover="true"
                                             :items="ordersByPage"
                                             :fields="ordersFields">
                                        <template #cell(currentStatus)="data">
                                            <div v-if="data.value.status" class="mb-2 ml-2 badge"
                                                 :class="(statusMapping[data.value.status || 'none']||{}).badge"
                                                 style="vertical-align: -webkit-baseline-middle">{{data.value.name || 'לא ידוע'}}
                                            </div>
                                            <i class="fas fa-history" style="cursor: pointer" title="היסטורית סטטוסים" @click="data.toggleDetails"></i>
                                        </template>
                                        <template #row-details="data">
                                            <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                <div v-for="s in data.item.statuses" :key="s.id"
                                                     class="vertical-timeline-element"
                                                     :class="statusMapping[s.status].class">
                                                    <div>
                                                        <span class="vertical-timeline-element-icon bounce-in"></span>
                                                        <div class="vertical-timeline-element-content bounce-in">
                                                            <h4 class="timeline-title">{{s.insertTime}} {{s.insertDate}}
                                                                - {{s.title}}</h4>
                                                        </div>
                                                    </div>
                                                </div>
<!--                                                close dropdown-->
                                            </div>
                                        </template>

                                        <!--                                        <template #row-details="row">-->
                                        <!--                                            <b-table :striped="true"-->
                                        <!--                                                     :hover="true"-->
                                        <!--                                                     :items="row.item.statuses || []"-->
                                        <!--                                                     :fields="statusesFields">-->

                                        <!--                                                <template #cell(insertDate)="data">-->
                                        <!--                                                    {{data.item.insertDate}} {{data.item.insertTime}}-->
                                        <!--                                                </template>-->
                                        <!--                                            </b-table>-->
                                        <!--&lt;!&ndash;                                            <b-card>&ndash;&gt;-->
                                        <!--&lt;!&ndash;                                            </b-card>&ndash;&gt;-->
                                        <!--                                        </template>-->

                                        <template #cell(externalId)="data">
                                            <!-- `data.value` is the value after formatted by the Formatter -->
                                            <a :href="`${integration.website}/wp-admin/post.php?post=${data.value}&action=edit`"
                                               target="_blank">{{ data.value }}</a>
                                        </template>
                                        <template #cell(paymentOptionId)="data">
                                            <div v-if="data.item.paymentData && pendingStatuses.includes(data.item.currentStatus.status)">
                                                <b-button v-b-modal:[`modal-${data.item.id}`] class="btn-hover-shine btn-transition" :variant="'outline-info'">סליקה
                                                    ידנית
                                                </b-button>

                                                <b-modal :id="`modal-${data.item.id}`" size="lg" title="פרטי תשלום"
                                                         ok-title-html="<span>סגירה</span>"
                                                         :ok-only="true"
                                                         @show="decryptPayment(data.item.id)"
                                                         @hide="clearPaymentData">
                                                    <div v-show="currentPaymentData">
                                                        <p v-if="clearing.clearingOnlineLink"><a :href="clearing.clearingOnlineLink" target="_blank">קישור
                                                            לדף סליקה אינטרנטי</a></p>
                                                        <div class="divider"></div>
                                                        <p><strong>מספר כרטיס: </strong> <span class="my-4">{{currentPaymentData.creditNumber}}</span>
                                                        </p>
                                                        <p><strong>תוקף: </strong><span class="my-4">{{currentPaymentData.creditMonth}}</span>/<span
                                                                class="my-4">{{currentPaymentData.creditYear}}</span>
                                                        </p>
                                                        <p><strong>3 ספרות בגב הכרטיס: </strong><span class="my-4">{{currentPaymentData.creditCVV}}</span>
                                                        </p>
                                                        <p><strong>מספר זהות: </strong><span class="my-4">{{currentPaymentData.identity}}</span>
                                                        </p>
                                                        <p><strong>סכום לתשלום: </strong><span class="my-4">{{data.item.total}}</span>
                                                        </p>
                                                    </div>
                                                </b-modal>
                                            </div>
                                        </template>
                                    </b-table>
                                    <b-pagination v-if="filteredOrders.length > 10" size="md" :total-rows="filteredOrders.length"
                                                  v-model="currentPage"
                                                  :per-page="10">
                                    </b-pagination>
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
    import Loader from "../Components/Loader";
    import utils from '../../utils';

    export default {
        components: {
            PageTitle,
            Loader
        },
        data: () => ({
            heading: 'הזמנות',
            subheading: 'הזמנות שבוצעו דרך הקטלוג החכם.',
            icon: 'pe-7s-cart',
            /*SELECT o.id, o.status, o."priceSum", o.products, o."insertDate", o."insertTime", o.shipping, o.note, o."publishBySmarket", o."noteInEmail", o."paymentOptionId", o."customerId", o."externalId",' +
                            ' c.email, c.phone1, c.phone2, c.city, c.street, c."houseNumber", c.floor, c."firstName", c."lastName"' +
                            ' FROM orders o LEFT JOIN customers c ON o."customerId" = c.id WHERE "storeId" = $1*/
            ordersFields: [
                {'id': {label: 'מזהה'}},
                {'customerFullName': {label: 'שם לקוח'}},
                {'total': {label: 'סכום כולל'}},
                {'insertDateTime': {label: 'תאריך ושעת הזמנה'}},
                {'externalId': {label: 'מזהה חיצוני'}},
                {'paymentOptionId': {label: 'תשלום'}},
                // {'statuses': {label: 'סטטוס'}},
                {'currentStatus': {label: 'סטטוס נוכחי'}},
            ],
            statusesFields: [
                {'status': {label: 'סטטוס'}},
                {'insertDate': {label: 'תאריך ושעת עדכון'}},
                {'insertBy': {label: 'עודכן על ידי'}},
            ],
            statusMapping: {
                'none': {class: 'dot-success', badge:'badge-success'},
                'created': {class: 'dot-success', badge:'badge-success'},
                'updated': {class: 'dot-warning', badge:'badge-warning'},
                'deleted': {class: 'dot-danger', badge:'badge-danger'},
                'restored': {class: 'dot-info', badge:'badge-info'},
                'pending': {class: 'dot-warning', badge:'badge-warning'},
                'processing': {class: 'dot-warning', badge:'badge-warning'},
                'on-hold': {class: 'dot-warning', badge:'badge-warning'},
                'completed': {class: 'dot-success', badge:'badge-success'},
                'cancelled': {class: 'dot-danger', badge:'badge-danger'},
                'refunded': {class: 'dot-warning', badge:'badge-warning'},
                'failed': {class: 'dot-danger', badge:'badge-danger'},
                'trash': {class: 'dot-danger', badge:'badge-danger'},
                'post_to_woocommerce': {class: 'dot-danger', badge:'badge-warning'},
                'saved_manual_smarket_clearing': {class: 'dot-danger', badge:'badge-warning'},
            },
            activeStatuses: ['post_to_woocommerce','saved_manual_smarket_clearing', 'pending', 'processing', 'on-hold', 'completed'],
            pendingStatuses: ['pending', 'processing', 'on-hold','saved_manual_smarket_clearing'],
            currentPage: 1,
            manualPassword: '',
            currentPaymentData: '',
            loading: false,
            ordersCheck: true
        }),
        computed: {
            ...mapState('orders', ['orders']),
            ...mapState('clearing', ['clearing']),
            ...mapState('settings', ['integration']),
            filteredOrders(){
                if(this.ordersCheck) {
                    return  this.orders.filter(o => this.activeStatuses.includes(o.currentStatus? o.currentStatus.status : ''))
                }
                return this.orders
            },
            ordersByPage() {
                return this.filteredOrders ? this.filteredOrders.slice((this.currentPage - 1) * 10, this.currentPage * 10) : [];
            },
            totalAmount() {
                return this.filteredOrders.map(o => parseFloat(o.priceSum)).reduce((a, b) => a + b, 0).toFixed(0)
            },
            avgAmount() {
                if (this.filteredOrders.length) {
                    return (this.totalAmount / this.filteredOrders.length).toFixed(0);
                }
                return 0;
            }
        },
        mounted() {
            this.loading = true;
            this.getOrders().then(() => {
                this.loading = false;
            });
            this.getClearing();
            if (!this.integration.website) {
                this.getIntegrationData();
            }
        },
        methods: {
            ...mapActions('orders', ['getOrders']),
            ...mapActions('settings', ['getIntegrationData']),
            ...mapActions('clearing', ['getClearing']),
            async decryptPayment(orderId) {
                let encryptedPayment = this.orders.find(o => o.id == orderId).paymentData
                let decrypted = await utils.decryptCipher(encryptedPayment, this.clearing.password)
                this.currentPaymentData = JSON.parse(decrypted);
                // navigator.clipboard.writeText(decrypted);
            },
            clearPaymentData() {
                this.currentPaymentData = '';
            },
        }

    }
</script>

<style>
    #meshivon-form div {
        margin-bottom: 10px !important;
    }
</style>
