<script setup>
import ExerciseBase from '../components/ExerciseBase.vue'
import {ref} from "vue";

const characters = [
  {
    id: 1,
    name: "Jedi",
    style: {
      background: 2,
      color: "green"
    },
    image: "https://preview.redd.it/who-was-the-most-powerful-jedi-in-your-opinion-v0-0o43kmihipee1.jpg?width=640&crop=smart&auto=webp&s=273293e3413f0d3f88ac064b6bf1122d82aa8c78",
  },
  {
    id: 2,
    name: "Wookie",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/SWC4_-_Costume_Pageant-_Chewbacca_%28518145361%29.jpg",
  },
  {
    id: 3,
    name: "Droide",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/R2-D2_%26_C-3PO_%28Star_Wars%29.jpg/250px-R2-D2_%26_C-3PO_%28Star_Wars%29.jpg",
  },
]

const characterSelected = ref(characters[0]);
const changeCharacter = (char) => {
  characterSelected.value = char
}
</script>

<template>
  <ExerciseBase title="Exercise 5">
    <h2>Personnages de StarWars</h2>
    <div class="characters-container">
      <figure :key="characterSelected.id">
        <img :alt="characterSelected.name" :src="characterSelected.image" height="150"/>
      </figure>

      <button v-for="char in characters" :key="char.id"
              :class="['btn', `${char.name.toLowerCase()}-btn`, { 'selected-character': char.id === characterSelected.id }]"
              @mouseenter="changeCharacter(char)">
        {{ char.name }}
      </button>
    </div>
  </ExerciseBase>
</template>

<style scoped>
.btn.selected-character, .btn:hover {
  background-color: red;
}

.btn {
  border: none;
  padding: 8px;
}

.jedi-btn {
  background: lightgray;
}

.wookie-btn {
  background: lightskyblue;
}

.droide-btn {
  background: yellow;
}

.characters-container {
  margin-top: 2em;
  display: flex;
  flex-direction: column; /* Aligne tout en colonne */
  width: 10em;
  gap: 5px;
}

img {
  width: 100%;
  height: 10em;
}

.btn {
  width: 100%;
  padding: 5px;
  cursor: pointer;
}
</style>
