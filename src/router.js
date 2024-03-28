import { createRouter, createWebHistory } from 'vue-router';
import PrimeraVentana from './components/AbrirPuerta.vue';
import SegundaVentana from './components/SegundaVentana.vue';
import Opcion1 from './components/Opcion1.vue';
import Opcion2 from './components/Opcion2.vue';
import Opcion3 from './components/Opcion3.vue';

const routes = [
    {
      path: '/',
      name: 'ComponenteA',
      component: PrimeraVentana
    },
    {
      path: '/segunda-ventana',
      name: 'ComponenteB',
      component: SegundaVentana
    },
    {
      path: '/Viajes',
      name: 'Opcion1',
      component: Opcion1
    },
    {
      path: '/Opcion2',
      name: 'Opcion2',
      component: Opcion2
    },
    {
      path: '/Opcion3',
      name: 'Opcion3',
      component: Opcion3
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
