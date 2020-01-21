import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import App from './App.vue'

import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  data: {
    // data or computed to override
  },
  computed: {
    // data or computed to override
  },
  methods: {
    getDefaultEventColor: () => '#29b475'
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
