import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Storage from 'vue-ls';
import "./assets/scss/main.scss";
import theme from "./mixins.js";

const ratapan = createApp(App);



const options = {
   namespace: 'vuejs__', // key prefix
   name: 'ls', // name variable Vue.[ls] or this.[$ls],
   storage: 'local', // storage name session, local, memory
 };

ratapan.use(store)
ratapan.use(router)
ratapan.use(Storage, options);
ratapan.mixin(theme.theme);

ratapan.mount('#app');
