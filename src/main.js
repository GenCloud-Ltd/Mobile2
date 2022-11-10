import { createApp } from 'vue'
import App           from './App.vue'

import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';
import { Quasar, Dialog, Loading } from 'quasar';

const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Dialog,
    Loading
  }
 })


app.mount('#app')
