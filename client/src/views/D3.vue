<template>
  <div class="fill-height">
    <v-btn @click="d3NetworkIsShow = !d3NetworkIsShow">Show</v-btn>
    <d3-network
      v-if="d3NetworkIsShow"
      :net-nodes="d3Data.nodes"
      :net-links="d3Data.links"
      :options="d3Options"
      @node-click="nodeClick"
      @link-click="linkClick"
      ref="d3-network"
    />
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "D3Page",

    data: () => ({
      d3Data: {
        nodes: [],
        links: []
      },
      d3Options: {
        force: 1000,
        nodeSize: 10,
        nodeLabels: true,
        linkLabels: false,
        canvas: false
      },
      d3NetworkIsShow: false
    }),

    created() {
      axios.get("/graphs/d3").then(res => {
        console.log(res.data.graphs[0])
        this.d3Data = res.data.graphs[0];
      });
    },

    methods: {
      nodeClick(e, q) {
        console.log(e);
        console.log(q);
      },
      linkClick(e, q) {
        console.log(e);
        console.log(q);
      }
    }
  };
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>