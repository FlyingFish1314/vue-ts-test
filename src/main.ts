import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/css/index.css";
import registerApp from "./global";
import { setupStore } from "./store";
import "default-passive-events";
// import hyRequest from "./service";

// declare module "vue" {
//   interface ComponentCustomProperties {
//     $store: typeof store;
//   }
// }

const app = createApp(App);
setupStore();
app.use(router).use(store).use(registerApp).mount("#app");
// console.log(process.env);
// console.log(process.env.VUE_APP_BASE_URL);

// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }
// hyRequest
//   .get({
//     url: "home/multidata",
//     showLoading: true,
//   })
//   .then((response) => {
//     console.log(response);
//   });
