import {createRouter, createWebHistory} from 'vue-router';

// On importe les exercices
import Ex02 from '../exercises/02-Serie.vue';
import Ex03 from '../exercises/03-Calculator.vue';
import Ex04 from '../exercises/04-StarWars.vue';
import Ex05 from '../exercises/05-StarWars2.vue';
import Ex06 from '../exercises/06-Components.vue';
import Ex07 from '../exercises/07-Todo.vue';
import Home from "@/Home.vue";

const routes = [
  {path: '/', component: Home},
  {
    path: '/exercices',
    children: [
      {path: '02', component: Ex02, meta: {title: 'Les Directives'}},
      {path: '03', component: Ex03, meta: {title: 'Calculatrice'}},
      {path: '04', component: Ex04, meta: {title: 'Star Wars'}},
      {path: '05', component: Ex05, meta: {title: 'Star Wars 2'}},
      {path: '06', component: Ex06, meta: {title: 'Composants'}},
      {path: '07', component: Ex07, meta: {title: 'Todo List'}},
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
