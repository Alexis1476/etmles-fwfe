<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['changeSelected', 'deleteTodo'])
const handleChangeSelected = () => {
  emit('changeSelected', props.todo.id)
}
const handleDeleteTask = () => {
  emit('deleteTodo', props.todo.id)
}
</script>

<template>
  <li :class="{ completed: props.todo.completed }" class="todo-item">
    <div class="todo-content">
      <label class="checkbox-container">
        <input :checked="props.todo.completed" type="checkbox" @change="handleChangeSelected"/>
        <span class="checkmark"></span>
      </label>
      <span class="todo-title">{{ props.todo.title }}</span>
    </div>
    <button class="btn-delete" type="button" @click="handleDeleteTask">
      <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round"
           stroke-linejoin="round"
           stroke-width="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
      </svg>
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 8px;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.todo-item:hover {
  background: #f9fafb;
  border-color: #f3f4f6;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.todo-title {
  color: #374151;
  font-weight: 500;
  transition: all 0.2s;
}

/* État complété */
.completed .todo-title {
  text-decoration: line-through;
  color: #9ca3af;
}

/* Custom Checkbox */
.checkbox-container {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 6px;
  transition: all 0.2s;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #ddd;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #10b981;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.btn-delete {
  background: transparent;
  border: none;
  color: #ef4444;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  padding: 5px;
}

.todo-item:hover .btn-delete {
  opacity: 1;
}
</style>
