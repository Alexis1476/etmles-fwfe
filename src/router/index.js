import { createRouter, createWebHistory } from 'vue-router';

// On importe les exercices
import Ex02 from '../exercises/02-Serie.vue';

const routes = [
  {
    path: '/exercices',
    children: [
      { path: '02', component: Ex02, meta: { title: 'Les Directives' } },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
