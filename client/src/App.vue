<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn
        :to="{ name: 'Default' }"
      >
        Home
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        :to="{ name: 'D3' }"
        text
        class="mx-1"
      >
        D3.js
      </v-btn>
      <v-btn
        :to="{ name: 'Cytoscape' }"
        text
        class="mx-1"
      >
        Cytoscape.js
      </v-btn>
      <v-btn
        :to="{ name: 'Fusionchart' }"
        text
        class="mx-1"
      >
        Fusioncharts.js
      </v-btn>
      <v-btn
        :to="{ name: 'SimpleFlowchart' }"
        text
        class="mx-1"
      >
        SimpleFlowchart.js
      </v-btn>
      <v-btn
        :to="{ name: 'GoChart' }"
        text
        class="mx-1"
      >
        GoChart.js
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: "App"
  };
</script>