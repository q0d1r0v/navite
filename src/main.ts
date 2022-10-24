import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router';
import navie from 'naive-ui';
import './style.css';

createApp(App).use(router).use(navie).mount('#app');
