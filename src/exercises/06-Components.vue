<script setup>
import ExerciseBase from '../components/ExerciseBase.vue'
import SoftwareProduct from "@/components/SoftwareProduct.vue"
import {ref} from "vue"

const frameworks = ref([
  {
    id: 1,
    name: 'Vue.js',
    description: 'Super framework crée par Ewan You',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1280px-Vue.js_Logo_2.svg.png'
  },
  {
    id: 2,
    name: 'Angular.js',
    description: 'Le successeur d\'AngularJS',
    img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/angular-icon.png'
  },
  {
    id: 3,
    name: 'React',
    description: 'Bibliothèque js créée par Facebook',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpYAVJLgkxE71tskfMP2JMAIKxeBjbtjjvA&s'
  }
])
</script>

<template>
  <ExerciseBase title="Exercise 6">
    <main id="work-area">
      <SoftwareProduct v-for="framework in frameworks" :key="framework.id" :product="framework"/>
    </main>
  </ExerciseBase>
</template>

<style scoped>
#work-area{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
