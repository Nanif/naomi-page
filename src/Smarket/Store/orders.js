import {OrdersService} from "../Services/OrdersService";

const state = {
    orders: []
};

const actions = {
    async getOrders({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let orders = await OrdersService.getOrders(currentCatalogId)
        orders = orders.map(o => {
            return {...o, total:`${o.priceSum} ₪`, insertDateTime: `${o.insertTime} ${o.insertDate}`}
        })
        let statuses = await OrdersService.getStatuses(currentCatalogId)

        commit('orders', {orders, statuses});
    },

    // async getStatuses({commit}) {
    //     let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
    //     let statuses = await OrdersService.getStatuses(currentCatalogId)
    //     commit('statuses', statuses);
    // },


};

const mutations = {
    orders(state, {orders, statuses}) {
        state.orders = orders;
        state.orders.forEach(o=>{
            o.statuses = [];
            //smarket statuses
            let idIndex = 0.1
            let smarketStatuses = o.status.split(',').map(oName=>{return {id: idIndex++, name:oName, status:oName}});
            o.statuses = o.statuses.concat(smarketStatuses)
            //woocommerce statuses
            o.statuses = o.statuses.concat(statuses.filter(s=>s.orderId == o.id));
            let currentStatusId = Math.max.apply(Math, o.statuses.map(function(o) { return o.id; }))
            o.currentStatus = o.statuses.find(ord => ord.id == currentStatusId)
        })
    },
};

export const orders = {
    namespaced: true,
    state,
    actions,
    mutations
};
