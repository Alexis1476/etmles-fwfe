<script setup>
import ExerciseBase from '../components/ExerciseBase.vue'
import {ref} from "vue"
import { v4 as uuidv4 } from 'uuid'
import TodoList from "@/components/TodoList/TodoList.vue";

const todos = ref([
  {
    id: 1,
    title: 'Faire les devoirs',
    completed: false
  },
  {
    id: 2,
    title: 'Manger avec Crasson',
    completed: false
  }
])

const switchTodoStatus = (id) => {
  const todo = todos.value.find(x => x.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
  console.log(todos)
}
const deleteTodo = (id) => {
  todos.value = todos.value.filter(x => x.id !== id)
}
const newTodoTitle = ref('')
const addTodo = () => {
  todos.value.push({
    id: uuidv4(),
    title: newTodoTitle.value,
    completed: false
  })
  newTodoTitle.value = ''
}
</script>

<template>
  <ExerciseBase title="Exercise 7">
    <header class="todo-header">
      <h1>Mes Tâches</h1>
      <span class="todo-count">{{ todos.filter(t => !t.completed).length }} en cours</span>
    </header>

    <div class="add-todo">
      <input placeholder="Ajouter une nouvelle tâche..." type="text" v-model="newTodoTitle" @keyup.enter="addTodo"/>
      <button class="btn-add" @click="addTodo">Ajouter</button>
    </div>

    <TodoList :todos="todos" @change-selected="switchTodoStatus" @delete-task="deleteTodo" />
  </ExerciseBase>
</template>

<style scoped>
.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.todo-count {
  background: #e0f2fe;
  color: #0369a1;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Input d'ajout */
.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
}

input[type="text"] {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #f3f4f6;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus {
  border-color: #3b82f6;
}

.btn-add {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-add:hover {
  background: #2563eb;
}

/* Liste */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
