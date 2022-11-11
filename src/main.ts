import { createPinia } from "pinia";
import { createApp } from "vue-termui";
import App from "./App.vue";

const app = createApp(App, {
  swapScreens: true,
});
app.use(createPinia());

app.mount();
