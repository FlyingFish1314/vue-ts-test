<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currTables">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone ref="phonetRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import loginAccount from "./login-account.vue";
import loginPhone from "./login-phone.vue";
export default defineComponent({
  components: {
    loginAccount,
    loginPhone,
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref<boolean>(false);
    const accountRef = ref<InstanceType<typeof loginAccount>>();
    const phonetRef = ref<InstanceType<typeof loginPhone>>();
    const currTables = ref<string>("account");
    // 定义方法
    const handleLoginClick = function () {
      if (currTables.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        console.log("手机登录");
      }
    };
    return {
      isKeepPassword,
      accountRef,
      phonetRef,
      currTables,
      handleLoginClick,
    };
  },
});
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
