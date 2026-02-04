<script setup>
import {ref} from 'vue'
import ExerciseBase from '../components/ExerciseBase.vue'

const today = new Date()

const person = ref({
  firstName: 'Alexis',
  lastName: 'Rojas',
  birthDate: new Date(2023, 0, 28)
})
const hasBirthday = () => {
  let birthDate = person.value.birthDate
  return (birthDate.getDate() === today.getDate() && birthDate.getMonth() === today.getMonth())
}
</script>

<template>
  <ExerciseBase title="Excercice 2">
    <p>Bienvenue {{ person.firstName }} {{ person.lastName }}</p>
    <img v-if="hasBirthday()"
         alt=""
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8dXEV2IUaDrVmUf1gTZcpv0Rii8IAWBEbQ&s">
  </ExerciseBase>
</template>

<style scoped>

</style>
