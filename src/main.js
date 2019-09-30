import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vuescroll from 'vue-scroll'

Vue.use(vuescroll)


new Vue({
  render: h => h(App),
}).$mount('#app')
