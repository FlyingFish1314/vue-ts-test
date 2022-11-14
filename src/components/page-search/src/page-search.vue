<template>
  <div class="page-search">
    <form-plus v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高阶组件</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </form-plus>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FormPlus from "@/base-ui/form";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: { FormPlus },
  name: "page-search",
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    // 双向绑定的属性因该是由配置文件的filed来决定的
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOrigiData: any = {};
    for (const item of formItems) {
      formOrigiData[item.filed] = "";
    }
    const formData = ref(formOrigiData);

    // 用户点击重置
    const handleResetClick = () => {
      // for (const key in formOrigiData) {
      //   formData.value[`${key}`] = formOrigiData[key];
      // }
      formData.value = formOrigiData;

      emit("resetBtnClick");
    };
    // 用户点击搜索
    const handleQueryClick = () => {
      console.warn(11111);
      emit("queryBtnClick", formData.value);
    };
    return { formData, handleResetClick, handleQueryClick };
  },
});
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
