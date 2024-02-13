<template>
  <v-sheet
    class="feed-div"
  >
    <div
      v-for="feed in feeds"
    >
      <v-card
        class="feed-card"
      >
        <v-card-title>{{ feed.feedTitle }}</v-card-title>
        <v-card-subtitle>{{ feed.feedTime }}</v-card-subtitle>
        <v-card-text> {{ feed.feedSubject }}</v-card-text>
      </v-card>
    </div>
    <v-breadcrumbs-divider></v-breadcrumbs-divider>
  </v-sheet>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      feeds: [
        {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        }, {
          feedTitle: "This is feed 1",
          feedTime: "Feb",
          feedSubject: "This is feed 1 text"
        }, {
          feedTitle: "This is feed 2",
          feedTime: "Feb",
          feedSubject: "This is feed 2 text"
        }, {
          feedTitle: "This is feed 3",
          feedTime: "Feb",
          feedSubject: "This is feed 3 text"
        },
      ]
    }
  }
}
</script>

<style>
.feed-card {
  background-color: #B0BEC5;
  max-height: 500px;
  overflow: scroll;
}
</style>
