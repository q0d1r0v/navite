import { createApp } from 'vue';
import {createPinia} from 'pinia'
import App from './App.vue';
import router from './routes/router';
import navie from 'naive-ui';
import './style.css';

const pinia = createPinia()

createApp(App)
.use(router)
.use(navie)
.use(pinia)
.mount('#app');
