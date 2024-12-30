import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'

import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

import store from './store.js'
import './registerServiceWorker'

app.use(store).mount('#app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
