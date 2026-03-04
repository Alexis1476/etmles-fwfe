<script setup>
import TodoItem from "@/components/TodoList/TodoItem.vue";

defineProps(['todos'])

const emit = defineEmits(['change-selected', 'delete-task'])
const handleCheckboxSelection = (id) => {
  emit('change-selected', id);
}
const handleButtonDeleteTask = (id) => {
  emit('delete-task', id);
}
</script>

<template>
  <ul class="todo-list">
    <TodoItem v-for="todo in todos" v-bind:key="todo.id" :class="{ completed: todo.completed }"
              v-bind:todo="todo" v-on:change-selected="handleCheckboxSelection($event)"
              v-on:delete-todo="handleButtonDeleteTask($event)"/>
  </ul>
</template>

<style scoped>

</style>
