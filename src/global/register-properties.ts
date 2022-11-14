import { App } from "vue";

function registerGlobalProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(key: string): string {
      return key;
    },
  };
}
export default registerGlobalProperties;
