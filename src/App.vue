<template>
  <v-app>
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
          >
            <BasicDetail/>
          </v-col>
          <v-col
            xs="12"
            sm="10"
            lg="6"
            md="12"
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
  min-height: 500px;
  overflow: auto;
  width: fit-content;
}

@media (max-width: 600px) {
  .full-row {
    flex-direction: column;
    background-color: #00b0ff;
  }
}

@media (min-width: 1280px) {
  .feed-non-scrollable {
    background-color: #00c853;
    overflow: scroll;
  }
}

</style>

