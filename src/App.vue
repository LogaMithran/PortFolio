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
        <v-row>
          <v-col
            xs="12"
            lg="3"
            md="3"
          >
            <BasicDetail/>
          </v-col>
          <v-col
            xs="10"
            lg="6"
            md="6"
            class="feed-non-scrollable"
            v-model="headerTabValue"
          >
            <Feed v-if="headerTabValue == 0"/>
            <Skills v-if="headerTabValue == 1"/>
            <Experience v-if="headerTabValue == 2"/>
            <YT v-if="headerTabValue == 3"/>
          </v-col>
          <v-col
            xs="12"
            lg="3"
            md="3"
          >
            <Connect/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
let header_tabs = ["About", "Skills", "Experience", "Yt"]
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
.details-div {
  padding: 20px;
}

.feed-non-scrollable {
  max-height: 100vh;
  overflow: scroll;
  min-width: 400px;
}
</style>

