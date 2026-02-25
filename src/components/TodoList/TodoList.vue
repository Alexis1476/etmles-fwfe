<script setup>
import TodoItem from "@/components/TodoList/TodoItem.vue";
defineProps(['todos'])
</script>

<template>
  <ul class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }"
              :todo="todo"/>
  </ul>
</template>

<style scoped>

</style>
