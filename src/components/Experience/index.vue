<template>
  <v-container>
    <div
      v-for="experience in experiences"
    >
      <v-row class="exp-row">
        <v-col
        >
          {{ experience.timeFrame }}
        </v-col>
        <v-col
          class="details-column"
        >
          <v-row>
            <h3>{{ experience.title }}</h3>
            <p>{{ experience.description }}</p>
          </v-row>
          <v-row class="chip-div">
            <v-chip
              v-for="expChip in experience.skills"
              color="#092635"
            >
              {{ expChip }}
            </v-chip>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style>

.exp-row {
  padding: 10px;
}

.details-column > h3, p {
  text-align: justify;
  margin-bottom: 15px;
}

.chip-div {
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>

<script lang="ts">
export default {
  data: () => {
    return {
      experiences: [
        {
          timeFrame: "Jul/2022 - Present",
          title: "TEST TEST TEST TILE",
          skills: ["skill1", "skill2", "skill3"],
          description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    }
  }
}
</script>
