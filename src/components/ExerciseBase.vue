<script setup>
defineProps(['number', 'title', 'description'])
</script>

<template>
  <div class="exercise-wrapper">
    <header class="ex-header">
      <h1>{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </header>

    <section class="work-area">
      <div class="area-label">Rendu :</div>
      <div class="canvas">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<style scoped>
.exercise-wrapper {
  animation: slideUp 0.4s ease-out;
}

.ex-header {
  margin-bottom: 2rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
}

.description {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.5;
}

.work-area {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.area-label {
  background: #f8fafc;
  padding: 8px 16px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  border-bottom: 1px solid #e2e8f0;
}

.canvas {
  padding: 2rem;
  min-height: 200px;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
