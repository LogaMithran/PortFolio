<template>
  <v-app>
    <v-tabs
      align-tabs="center"
      color="blue-grey-darken-1"
    >
      <v-tab v-for="tab in header_tabs" :key=tab> {{ tab }}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="" cols="3">
            <BasicDetail/>
          </v-col>
          <v-col cols="6" class="feed-non-scrollable">
            <Feed/>
          </v-col>
          <v-col cols="3">
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


<style>
.details-div {
  padding-top: 10px;
  padding-left: 10px;
}
.feed-non-scrollable {
  max-height: 100vh;
  overflow: scroll;
}
</style>
