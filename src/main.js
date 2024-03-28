import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importa el router aquí

const app = createApp(App);

app.use(router);  // Usa el router aquí

app.mount('#app');
