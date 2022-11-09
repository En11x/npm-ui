import { createApp } from "vue-termui";
import App from "./App.vue";

const app = createApp(App, {
  swapScreens: process.env.NODE_ENV === "production",
});
app.mount();
