import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from '../router/index';

Vue.use(VueRouter);

let routerInstance = new VueRouter({
  routes,
});
export default routerInstance;