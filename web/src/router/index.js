import VueRouter from 'vue-router';
import Vue from 'vue';
import Board from '../view/Board.vue';
Vue.use(VueRouter);/* Vue.use?? */
const route = [
    {
        path:'/',
        name:'board',
        component:Board
    }
];
export default new VueRouter({
    routes:route
})