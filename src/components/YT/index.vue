<template>
  <v-container
    class="yt-container"
    v-for="yt in ytData"
  >
    <h3>{{ yt.videoTitle }}</h3>
    <p>{{yt.videoDesscription}}</p>
    <iframe
      class="yt-frames"
      src="https://www.youtube.com/embed/t1pLdDadcN4"
      allowfullscreen>
    </iframe>
  </v-container>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      ytData: [
        {
          videoTitle: "This is video 1",
          videoDesscription: "THIS IS VIDEO 1 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 2",
          videoDesscription: "THIS IS VIDEO 2 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 3",
          videoDesscription: "THIS IS VIDEO 3 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
        {
          videoTitle: "This is video 4",
          videoDesscription: "THIS IS VIDEO 4 DESCRIPTION",
          videoUrl: "https://www.youtube.com/embed/t1pLdDadcN4"
        },
      ]
    }
  }
}
</script>
<style>
.yt-frames {
  width: fit-content;
}

.yt-container {
  //padding: 15px;
}

@media (max-width: 600px) {
  .yt-frames {
    max-width: 600px;
  }
}
</style>
