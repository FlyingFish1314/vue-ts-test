<template>
  <div class="goods">
    <page-content :contenTableConfig="contenTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px,z-index: 100 ;"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          hide-on-click-modal
        />
      </template>
      <template #oldPrice="scope">{{ "￥" + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ "￥" + scope.row.newPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "@/components/page-content";
import { contenTableConfig } from "./config/content-config";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "goods",
  components: { PageContent },
  setup() {
    return { contenTableConfig };
  },
});
</script>

<style scoped></style>
