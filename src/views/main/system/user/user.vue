<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleRestClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contenTableConfig="contenTableConfig"
      pageName="user"
      @newBtnClick="handleNewData"
      @newEditClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      pageName="user"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { searchFormConfig } from "./config/search-config";
import { contenTableConfig } from "./config/content-config";
import { modalConfig } from "./config/modal-config";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModal } from "@/hooks/usePageModal";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-model";
export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "user",
  setup() {
    const [pageContentRef, handleRestClick, handleQueryClick] = usePageSearch();

    // pageModal相关的hook逻辑
    // 1、处理密码的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === "password"
      );
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === "password"
      );
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      passwordItem!.isHidden = true;
    };
    //2、 动态天机部门的逻辑和角色列表
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.filed === "departmentChoose"
      );
      if (departmentItem) {
        departmentItem.options = store.state.entireDepartments.map((item) => {
          return { label: item.name, value: item.id };
        });
      }
      const roleItem = modalConfig.formItems.find(
        (item) => item.filed === "roleChoose"
      );
      if (roleItem) {
        roleItem.options = store.state.entireRoles.map((item) => {
          return { label: item.name, value: item.id };
        });
      }
      return modalConfig;
    });

    // 3、调用hook公共变量和函数
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback);
    return {
      searchFormConfig,
      contenTableConfig,
      pageContentRef,
      handleRestClick,
      handleQueryClick,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
    };
  },
});
</script>

<style scoped lang="less"></style>
