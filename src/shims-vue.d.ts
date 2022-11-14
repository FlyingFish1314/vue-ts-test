/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  interface ComponentCustomProperties {
    $filters: (key: string) => string;
  }

  export default component;
}
