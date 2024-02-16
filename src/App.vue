<template>
  <v-app
    class="source-app">
    <v-tabs
      align-tabs="center"
      color="#092635"
      v-model="headerTabValue"
    >
      <v-tab
        v-for="tab in header_tabs"
        :key=tab
      >
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-main>
      <v-container>
        <v-row
          class="full-row"
        >
          <v-col
            xs="12"
            sm="12"
            lg="3"
            class="basic-detail-col"
          >
            <BasicDetail/>
          </v-col>
          <v-col
            lg="6"
            class="feed-non-scrollable"
            v-model="headerTabValue"
          >
            <About v-if="parseInt(headerTabValue) == 0"/>
            <Experience v-if="parseInt(headerTabValue) == 1"/>
            <YT v-if="parseInt(headerTabValue) == 2"/>
          </v-col>
          <v-col
            xs="12"
            sm="12"
            lg="3"
            class="connect-col"
          >
            <Connect/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
let header_tabs = ["About", "Experience", "Yt"]
</script>

<script lang="ts">
export default {
  data: () => {
    return {
      headerTabValue: "About",
    }
  }
}
</script>

<style>

.feed-non-scrollable {
  height: 90vh;
  overflow: auto;
  width: fit-content;
}

.basic-detail-col, .connect-col {
  height: fit-content;
}

@media (max-width: 600px) {
  .full-row {
    flex-direction: column;
    background-color: #00c853;
    grid-auto-rows: 1fr;
  }

  .source-app {
    font-size: small;
  }
  .feed-non-scrollable {
    //overflow: auto;
    //width: fit-content;
  }
}

@media (min-width: 1280px) {
  .feed-non-scrollable {
    background-color: #00c853;
    //overflow: scroll;
  }
}

</style>

