// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

/*引入jquery*/
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
components: { App },
template: '<App/>'
})