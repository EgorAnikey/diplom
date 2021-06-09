import Vue from "vue";
import VueRouter from "vue-router";
import D3Page from "../views/D3.vue";
import CytoscapePage from "../views/Cytoscape.vue";
import FusionchartPage from "../views/Fusionchart.vue";
import SimpleFlowchartPage from "../views/SimpleFlowchart.vue";
import GoChartPage from "../views/GoChart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Default",
    // component: { template: '<router-view />'},
  },
  {
    path: "/d3",
    name: "D3",
    component: D3Page
  },
  {
    path: "/cytoscape",
    name: "Cytoscape",
    component: CytoscapePage
  },
  {
    path: "/fusionchart",
    name: "Fusionchart",
    component: FusionchartPage
  },
  {
    path: "/simpleflowchart",
    name: "SimpleFlowchart",
    component: SimpleFlowchartPage
  },
  {
    path: "/gochart",
    name: "GoChart",
    component: GoChartPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
