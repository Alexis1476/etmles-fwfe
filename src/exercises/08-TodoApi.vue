<script setup>
import {computed, onMounted, ref} from "vue"
import ExerciseBase from '../components/ExerciseBase.vue'
import TodoList from "@/components/TodoList/TodoList.vue"
import taskService from "@/services/TaskService.js"

import {toast} from "vue3-toastify";

const todos = ref([])
const newTodoTitle = ref('')

// Compteur calculé automatiquement
const pendingCount = computed(() => todos.value.filter(t => !t.completed).length)

// 1. Charger les données au montage du composant
onMounted(async () => {
  try {
    todos.value = await taskService.fetchTasks()
  } catch {
    toast.error("Impossible de charger les tâches")
  }
})

// 2. Ajouter une tâche
const addTodo = async () => {
  if (!newTodoTitle.value) return

  try {
    const payload = {
      title: newTodoTitle.value,
      completed: false,
      userId: 1
    }
    const savedTodo = await taskService.createTask(payload)

    // On l'ajoute en haut de la liste (unshift)
    todos.value.unshift(savedTodo)
    newTodoTitle.value = ''
    toast.success("Tâche ajoutée !")
  } catch {
    toast.error("Erreur lors de l'ajout")
  }
}

// 3. Changer le statut (terminé / à faire)
const switchTodoStatus = async (id) => {
  const todo = todos.value.find(x => x.id === id)
  if (!todo) return

  try {
    const newStatus = !todo.completed
    await taskService.updateTask(id, {completed: newStatus})

    // Mise à jour locale après succès API
    todo.completed = newStatus
    toast.info("Statut mis à jour")
  } catch {
    toast.error("Erreur de mise à jour")
  }
}

// 4. Supprimer une tâche
const deleteTodo = async (id) => {
  try {
    await taskService.deleteTask(id)
    todos.value = todos.value.filter(x => x.id !== id)
    toast.success("Tâche supprimée")
  } catch {
    toast.error("Erreur lors de la suppression")
  }
}
</script>

<template>
  <ExerciseBase title="Exercise 7">
    <header class="todo-header">
      <h1>Mes Tâches</h1>
      <span class="todo-count">{{ pendingCount }} en cours</span>
    </header>

    <div class="add-todo">
      <input
        v-model="newTodoTitle"
        placeholder="Ajouter une nouvelle tâche..."
        type="text"
        @keyup.enter="addTodo"
      />
      <button class="btn-add" @click="addTodo">Ajouter</button>
    </div>

    <TodoList
      :todos="todos"
      @change-selected="switchTodoStatus"
      @delete-task="deleteTodo"
    />
  </ExerciseBase>
</template>

<style scoped>
/* Tes styles restent inchangés car ils sont déjà très propres */
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
</style>
