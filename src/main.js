// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/*con estas 2 lineas de codigo ya podemos empezar a utilizar la integracion de VueJs y Firebase*/
import VueFire from 'vuefire';
Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
