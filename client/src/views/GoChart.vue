<template>
  <div class="fill-height calc-height">
    <v-btn @click="goChartIsShow = !goChartIsShow">Show</v-btn>
    <vue-diagram
      v-if="goChartIsShow"
      divClassName="vue-diagram"
      :initDiagram="initDiagram"
      :nodeDataArray="nodeDataArray"
      :linkDataArray="linkDataArray"
      :modelData="modelData"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import go from 'gojs';

  export default {
    name: 'GoChartPage',

    data: () => ({
      height: 500,
      modelData: {
        canRelink: true
      },
      nodeDataArray: [
        { key: '1', color: 'orange' },
        { key: '2', color: 'orange' },
        { key: '3', color: 'orange' },
        { key: '4', color: 'orange' }
      ],
      linkDataArray: [
        { key: -1, from: '1', to: '2' },
        { key: -2, from: '1', to: '3' },
        { key: -3, from: '2', to: '3' },
        { key: -4, from: '4', to: '3' },
        { key: -5, from: '2', to: '1' }
      ],
      // modelData: {
      //   canRelink: true
      // },
      goChartIsShow: false
    }),

    created() {
      axios.get('/graphs/gochart').then((res) => {
        console.log(res.data.graphs[0]);
        this.nodeDataArray = res.data.graphs[0].nodes;
        this.linkDataArray = res.data.graphs[0].links;
      });
    },

    methods: {
      initDiagram() {
        const $ = go.GraphObject.make;
        const diagram = $(go.Diagram, {
          'undoManager.isEnabled': true,
          model: $(go.GraphLinksModel, {
            linkKeyProperty: 'key'
          })
        });
        diagram.nodeTemplate = $(
          go.Node,
          'Auto',
          $(
            go.Shape,
            'RoundedRectangle',
            {
              strokeWidth: 0,
              fill: 'white',
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer'
            },
            new go.Binding('fill', 'color')
          ),
          $(
            go.TextBlock,
            {
              margin: 8,
              font: 'bold 14px sans-serif',
              stroke: '#333'
            },
            new go.Binding('text', 'key')
          )
        );

        diagram.linkTemplate = $(
          go.Link,
          new go.Binding('relinkableFrom', 'canRelink').ofModel(),
          new go.Binding('relinkableTo', 'canRelink').ofModel(),
          $(go.Shape),
          $(go.Shape, { toArrow: 'Standard' })
        );

        return diagram;
      }
    }
  };
</script>
