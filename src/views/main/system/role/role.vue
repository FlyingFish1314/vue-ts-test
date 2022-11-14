<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleRestClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contenTableConfig="contenTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @newEditClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      pageName="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :check-strictly="false"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleHandleClick"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue";
import { useStore } from "@/store";

import { getMenuChecks } from "@/uitl/map-menu";
import { ElTree } from "element-plus";
import { searchFormConfig } from "./config/search-config";
import PageSearch from "@/components/page-search";

import { contenTableConfig } from "./config/content-config";
import PageContent from "@/components/page-content";

import PageModal from "@/components/page-model";
import { modalConfig } from "./config/modal-config";

import { usePageModal } from "@/hooks/usePageModal";
import { usePageSearch } from "@/hooks/usePageSearch";
export default defineComponent({
  components: { PageContent, PageModal },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "role",
  setup() {
    // ElTree的处理逻辑
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    // 处理pageModal的hook
    const editCallback = (item: any) => {
      console.log({ ...item.menuList });

      nextTick(() => {
        const checks = getMenuChecks(item.menuList);

        elTreeRef.value?.setCheckedKeys(checks, true);
      });
    };

    const [pageContentRef, handleRestClick, handleQueryClick] = usePageSearch();
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback);
    const store = useStore();
    const menus = computed(() => store.state.entireMenu);

    const otherInfo = ref({});

    const handleHandleClick = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      console.log("menuList", menuList);
      otherInfo.value = { menuList };
    };
    return {
      PageSearch,
      menus,
      contenTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      pageContentRef,
      handleRestClick,
      handleQueryClick,
      otherInfo,
      handleHandleClick,
      elTreeRef,
    };
  },
});
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
