<template>
  <div class="myLogin">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import loginPanel from "./components/login-panel.vue";
export default defineComponent({
  components: {
    loginPanel,
  },
  name: "myLogin",
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="less" scoped>
.myLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
