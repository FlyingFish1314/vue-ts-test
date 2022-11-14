// 正常工作。
export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $filters: any;
  }
}
