<template>
  <div class="nav-info">
    <div class="'info'">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="circleUrl" />
          {{ name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><SwitchButton /></el-icon>
              退出
            </el-dropdown-item>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import localCache from "@/uitl/cache";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore();
    const circleUrl =
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F04%2F20210504062111_d8dc3.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670467198&t=3c210d384e67367b5036341ad8189096";
    const name = computed(() => store.state.login.userInfo.name);

    const router = useRouter();
    const handleExitClick = () => {
      localCache.deleteCache("token");
      router.push("/main");
    };
    return { circleUrl, name, handleExitClick };
  },
});
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
