<template>
  <div class="fill-height">
    <v-btn @click="cytoscapeIsShow = !cytoscapeIsShow">Show</v-btn>
    <div v-if="cytoscapeIsShow">
      <cytoscape
        :config="config"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CytoscapePage",
  data: () => ({
    cytoscapeIsShow: false,

    config: {
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(id)"
          }
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle"
          }
        }
      ],
      // layout: {
      //   name: "random",
      //   // rows: 100
      // }
    }
  }),

  created() {
    axios.get("/graphs/cytoscape").then(res => {
      console.log(res.data.graphs[0], 'qwe')
      this.config.layout = res.data.graphs[0];
      this.config.elements = res.data.graphs[0];
    });
  }
};
</script>
