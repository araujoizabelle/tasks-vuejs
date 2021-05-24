import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import store from '../src/store';

const app = createApp(App);
app.use(createStore(store));
app.mount('#app');
