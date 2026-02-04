<script setup>
import ExerciseBase from '../components/ExerciseBase.vue'
import {ref} from "vue";

const operations = [
  {id: 'add', label: 'Additionner'},
  {id: 'subtract', label: 'Soustraire'},
  {id: 'multiply', label: 'Multiplier'},
  {id: 'divide', label: 'Diviser'}
];

const firstOperator = ref(0)
const secondOperator = ref(0)
const result = ref(0)
const selectedOperation = ref("add")

const calculate = () => {
  if (selectedOperation.value === 'add')
    result.value = firstOperator.value + secondOperator.value
  else if (selectedOperation.value === 'subtract')
    result.value = firstOperator.value - secondOperator.value
  else if (selectedOperation.value === 'multiply')
    result.value = firstOperator.value * secondOperator.value
  else if (selectedOperation.value === 'divide')
    result.value = firstOperator.value / secondOperator.value
}
</script>

<template>
  <ExerciseBase number="1" title="Excercice 3">
    <h2>Calculatrice</h2>
    <section class="container">
      <div class="input-container">
        <label for="first">Premier opérande</label>
        <input id="first" v-model="firstOperator" placeholder="First Operator" required
               type="number">
      </div>
      <div class="input-container">
        <label for="second">Deuxième opérande</label>
        <input id="second" v-model="secondOperator" placeholder="Second Operator" required
               type="number">
      </div>
      <div v-for="op in operations" :key="op.id" class="radio-container">
        <input
          :id="op.id"
          v-model="selectedOperation"
          :value="op.id"
          name="operation"
          type="radio"
        >
        <label :for="op.id">{{ op.label }}</label>
      </div>
      <button v-on:click="calculate()">Additionner</button>
      <p>Résultat: {{ result }}</p>
    </section>
  </ExerciseBase>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.input-container {
  display: flex;
  flex-direction: row;
  width: 25em;
  justify-content: space-between;
}

.radio-container {
  display: flex;
  flex-direction: row;
  gap: 1em;
}
</style>
