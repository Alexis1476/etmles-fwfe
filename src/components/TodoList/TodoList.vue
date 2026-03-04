<script setup>
import TodoItem from "@/components/TodoList/TodoItem.vue";

defineProps({
  todos: {
    type: Array,
  }
}) // Liste

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
    <TodoItem v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              @change-selected="handleCheckboxSelection"
              @delete-todo="handleButtonDeleteTask"/>
  </ul>
</template>

<style scoped>

</style>
