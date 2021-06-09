<template>
  <div class="fill-height calc-height">
    <v-btn @click="show">Show</v-btn>
    <simple-flowchart v-if="simpleFlowchartIsShow" :height="height" :scene.sync="data" />
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'SimpleFlowchartPage',

    data: () => ({
      height: 500,
      data: {
        centerX: 0,
        centerY: 0,
        scale: 1,
        nodes: [],
        links: []
      },
      simpleFlowchartIsShow: false
    }),

    created() {
      axios.get("/graphs/simpleflowchart").then(res => {
        console.log(res.data.graphs[0])
        this.data.nodes = res.data.graphs[0].nodes;
        this.data.links = res.data.graphs[0].links;
      });
    },

    methods: {
      show() {
        const calcHBlock = document.querySelector('.fill-height.calc-height');
        console.log(calcHBlock)
        this.height = calcHBlock.clientHeight - 43;
        this.simpleFlowchartIsShow = true;
      }
    }
  };
</script>

<style src="vue-simple-flowchart/dist/vue-flowchart.css"></style>
<style>
  .flowchart-node {
    /* height: unset !important;
    width: unset !important;
    border-radius: ; */
  }
  /* .flowchart-node>.node-main>.node-type {
    display: none;
  } */
</style>