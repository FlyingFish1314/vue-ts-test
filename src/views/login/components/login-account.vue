<template>
  <el-form
    :model="account"
    label-width="60px"
    ref="formRef"
    :rules="accountRules"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
// import { Account } from "../types";
import { accountRules } from "../config/account-config";
import { ElForm } from "element-plus";
import LocalCache from "@/uitl/cache";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      name: LocalCache.getCache("name") ?? "",
      password: LocalCache.getCache("account") ?? "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = function (isKeepPassword: boolean) {
      // console.log("开始登录");
      formRef.value?.validate((valid) => {
        if (valid) {
          // console.log("验证通过，执行真正的登录逻辑");
          // 1、判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            LocalCache.setCache("name", account.name);
            LocalCache.setCache("password", account.password);
          } else {
            LocalCache.deleteCache("name");
            LocalCache.deleteCache("password");
          }
          // 2、开始进行登录验证
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };
    return {
      account,
      accountRules,
      loginAction,
      formRef,
    };
  },
});
</script>

<style scoped></style>
