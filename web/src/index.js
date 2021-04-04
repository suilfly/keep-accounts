import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'

new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(App);
    },
    router:router
}).$mount('#app');
