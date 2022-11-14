<template>
  <div class="menu">
    <page-content
      :contenTableConfig="contenTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { contenTableConfig } from "./config/content-config";
import PageContent from "@/components/page-content";
export default defineComponent({
  components: { PageContent },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "menus",
  setup() {
    return { contenTableConfig };
  },
});
</script>

<style scoped></style>
