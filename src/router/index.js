import {createRouter, createWebHistory} from 'vue-router';

// On importe les exercices
import Ex02 from '../exercises/02-Serie.vue';
import Ex03 from '../exercises/03-Calculator.vue';
import Home from "@/Home.vue";

const routes = [
  {path: '/', component: Home},
  {
    path: '/exercices',
    children: [
      {path: '02', component: Ex02, meta: {title: 'Les Directives'}},
      {path: '03', component: Ex03, meta: {title: 'Calculatrice'}},
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
