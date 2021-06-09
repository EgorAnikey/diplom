<template>
  <div class="fill-height">
    <v-btn @click="fusionchartIsShow = !fusionchartIsShow">Show</v-btn>
    <fusioncharts
      v-if="fusionchartIsShow"
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      :menu="false"
    ></fusioncharts>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'FusionchartPage',
    data: () => ({
      fusionchartIsShow: false,
      type: 'dragnode',
      width: '100%',
      height: '100%',
      dataFormat: 'JSON',
      dataSource: {
        chart: {
          xaxisminvalue: '0',
          xaxismaxvalue: '100',
          yaxisminvalue: '0',
          yaxismaxvalue: '100',
          theme: 'fusion',
          basefontsize: '11',
          plothovereffect: '0',
        },
        dataset: [
          {
            data: []
          }
        ],
        connectors: [
          {
            stdthickness: '2',
            connector: []
          }
        ]
      }
    }),

    created() {
      axios.get('/graphs/fusion').then((res) => {
        console.log(res.data.graphs[0]);
        this.dataSource.dataset[0].data = res.data.graphs[0].nodes;
        this.dataSource.connectors[0].connector = res.data.graphs[0].links;
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
