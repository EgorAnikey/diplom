import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import D3Network from "vue-d3-network";
import Cytoscape from "vue-cytoscape";
import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';
import SimpleFlowchart from 'vue-simple-flowchart';
import { VueDiagram } from 'gojs-vue'


Vue.use(VueFusionCharts, FusionCharts, PowerCharts, FusionTheme);

Vue.use(VueAxios, axios);
Vue.use(Cytoscape)

Vue.config.productionTip = false;

Vue.axios.defaults.baseURL = "http://localhost:3001/api";

// Vue.component("d3-network", {
//   render(h) {
//     const start = new Date().getTime();
//     const a = h(D3Network, {
//       props: {
//         ...this.$attrs
//       },
//       on: {
//         ...this.$listeners
//       }
//     });
//     console.log(a);
//     const end = new Date().getTime();
//     const time = end - start;
//     console.log(time);
//     return a;
//   }
// });

Vue.component("d3-network", D3Network);
Vue.component("simple-flowchart", SimpleFlowchart);
Vue.component("vue-diagram", VueDiagram);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
