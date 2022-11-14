<template>
  <div class="page-content">
    <div class="content">
      <table-plus
        v-bind="contenTableConfig"
        :listCount="dataCount"
        :listData="dataList"
        v-model:page="pageInfo"
      >
        <template #headerHandler>
          <el-button v-if="isCreate" @click="handleNewClick"
            >新建用户</el-button
          >
        </template>
        <!-- 列中的插槽 -->
        <template #status="scope">
          <el-button>{{
            scope.row.enable === "1" ? "启用" : "禁用"
          }}</el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler="scope">
          <div class="handle-btns">
            <el-button
              v-if="isUpdate"
              type="primary"
              text
              size="small"
              @click="handleEditClick(scope.row)"
            >
              编辑</el-button
            >
            <el-button
              text
              v-if="isDelete"
              size="small"
              @click="handleDeleClick(scope.row)"
              >删除</el-button
            >
          </div>
        </template>
        <!-- 动态插入剩余的插槽 -->
        <template
          v-for="item in otherPropSlots"
          :key="item.prop"
          #[item.slotName]="scope"
        >
          <template v-if="item.slotName">
            <slot :name="item.slotName" :row="scope.row"> </slot>
          </template>
        </template>
      </table-plus>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import TablePlus from "@/base-ui/table";
import { usePermission } from "@/hooks/usePermission";
export default defineComponent({
  props: {
    contenTableConfig: {
      type: Object,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  components: { TablePlus },
  name: "page-content",
  emits: ["newBtnClick", "newEditClick"],
  setup(props, { emit }) {
    const store = useStore();
    // 获取操作权限
    const isCreate = usePermission(props.pageName, "create");
    const isUpdate = usePermission(props.pageName, "update");
    const isDelete = usePermission(props.pageName, "delete");
    const isQuery = usePermission(props.pageName, "query");
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageData());
    console.log("isQuery", isQuery);

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      // 判断权限
      // if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
        showLoading: true,
      });
    };
    getPageData();
    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters["system/pageListData"](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters["system/pageListCount"](props.pageName)
    );
    // 获取其他的动态插槽名称
    const otherPropSlots = props.contenTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false;
        if (item.slotName === "createAt") return false;
        if (item.slotName === "updateAt") return false;
        if (item.slotName === "handler") return false;
        return true;
      }
    );
    // 删除/编辑/添加
    const handleDeleClick = (item: any) => {
      console.log(item);
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id,
      });
    };
    const handleEditClick = (item: any) => {
      console.log("item", item);

      emit("newEditClick", item);
    };
    const handleNewClick = () => {
      emit("newBtnClick");
    };
    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      getPageData,
      handleDeleClick,
      handleEditClick,
      handleNewClick,
    };
  },
});
</script>

<style lang="less" scoped>
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
