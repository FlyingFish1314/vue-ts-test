<template>
  <div class="nav-header">
    <el-icon class="menu-icon" @click="handelChangeClick">
      <component :is="!isFlod ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <div class="content">
      <breadcrumb-plus :breadcrumbs="breadcrumbs"></breadcrumb-plus>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserInfo from "./nav-info.vue";
import breadcrumbPlus from "@/base-ui/breadcrumb";
import { pathMapBreadcrumbs } from "@/uitl/map-menu";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
export default defineComponent({
  components: { UserInfo, breadcrumbPlus },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFlod = ref(false);
    const handelChangeClick = () => {
      isFlod.value = !isFlod.value;
      emit("foldChange", isFlod.value);
    };

    const store = useStore();
    const route = useRoute();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });
    return {
      isFlod,
      breadcrumbs,
      handelChangeClick,
    };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;

  .menu-icon {
    font-size: 28px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
