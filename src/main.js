import { createApp } from 'vue'
import App from './App.vue'
import CardWrapper from './components/CardWrapper.vue'

const app = createApp(App);
app.component('card-wrapper', CardWrapper);

app.mount('#app')

