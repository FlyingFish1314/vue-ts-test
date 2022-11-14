<template>
  <div class="page-modal">
    <div class="page-model">
      <el-dialog
        v-model="centerDialogVisible"
        title="新建用户"
        width="30%"
        center
        destroy-on-close
      >
        <form-plus v-bind="modalConfig" v-model="formData"></form-plus>
        <slot></slot>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleConfimClick">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import FormPlus from "@/base-ui/form";
import { useStore } from "vuex";
export default defineComponent({
  components: { FormPlus },
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
      default: () => ({}),
    },
    otherInfo: {
      type: Object,
      default: () => ({}),
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  name: "page-modal",
  setup(props) {
    const formData = ref<any>({});
    const centerDialogVisible = ref(false);
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.filed}`] = newValue[`${item.filed}`];
        }
      }
    );
    // 点击确定按钮逻辑
    const store = useStore();
    const handleConfimClick = () => {
      centerDialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log(formData.value);

        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        });
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
        });
      }
    };
    return { centerDialogVisible, formData, handleConfimClick };
  },
});
</script>

<style lang="less" scoped></style>
