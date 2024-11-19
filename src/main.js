import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'; // Import element-ui
import 'element-ui/lib/theme-chalk/index.css'; // Import element-ui css
import 'bootstrap'; // Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap css
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
