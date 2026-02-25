<script setup>
const exercises = [
  { id: '02', title: 'Directives', path: '/exercices/02' },
  { id: '03', title: 'Calculatrice', path: '/exercices/03' },
  { id: '04', title: 'Star Wars', path: '/exercices/04' },
  { id: '05', title: 'Star Wars 2', path: '/exercices/05' },
  { id: '06', title: 'Composants', path: '/exercices/06' },
];
</script>

<template>
  <div class="app-container">
    <nav class="sidebar">
      <div class="sidebar-header">
        <img src="./assets/logo.svg" alt="Vue logo" width="40">
        <h2>FWFE</h2>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">🏠 Accueil</router-link></li>
        <li class="section-title">Exercices</li>
        <li v-for="ex in exercises" :key="ex.path">
          <router-link :to="ex.path">
            <span class="ex-number">{{ ex.id }}</span> {{ ex.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.section-title{
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.app-container {
  display: flex;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
}

.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e2e8f0;
  padding: 2rem;
  height: 100vh;
  position: sticky;
  top: 0;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.nav-links a {
  display: block;
  padding: 0.75rem 1rem;
  color: #475569;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s;
  margin-bottom: 0.5rem;
}

.nav-links a.router-link-active {
  background: #42b88320;
  color: #42b883;
  font-weight: 600;
}

.nav-links a:hover:not(.router-link-active) {
  background: #f1f5f9;
}

.content {
  flex: 1;
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Animation de transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
