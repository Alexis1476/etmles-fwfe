<script setup>
import ExerciseBase from '../components/ExerciseBase.vue'
import {ref} from "vue";

const characters = ref([
  {
    id: 1,
    name: "Jedi",
    image: "https://preview.redd.it/who-was-the-most-powerful-jedi-in-your-opinion-v0-0o43kmihipee1.jpg?width=640&crop=smart&auto=webp&s=273293e3413f0d3f88ac064b6bf1122d82aa8c78"
  },
  {
    id: 1,
    name: "Wookie",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/SWC4_-_Costume_Pageant-_Chewbacca_%28518145361%29.jpg"
  },
  {
    id: 1,
    name: "Droide",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/R2-D2_%26_C-3PO_%28Star_Wars%29.jpg/250px-R2-D2_%26_C-3PO_%28Star_Wars%29.jpg"
  },
])
</script>

<template>
  <ExerciseBase title="Excercice 4">
    <h2>Personnages de StarWars</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">{{ character.name }}</li>
    </ul>
    <ul class="characters-container">
      <figure v-for="character in characters" :key="character.id">
        <img :src="character.image" :alt="character.name" height="150" width="110" />
        <figcaption>{{character.name}}</figcaption>
      </figure>
    </ul>
  </ExerciseBase>
</template>

<style scoped>
.characters-container{
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
