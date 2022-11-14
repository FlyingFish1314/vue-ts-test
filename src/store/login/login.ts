import { Module } from "vuex";
import router from "@/router";
import {
  accountLoginRequest,
  requestLoginUserInfo,
  requestUserMenuByRole,
} from "@/service/login/index";
import localCache from "@/uitl/cache";
import { ILoginState } from "./type";
import { IRootState } from "../types";
import { IAccountType } from "@/service/login/type";
import { menuMapToRoutes, menuMapToPermissions } from "@/uitl/map-menu";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    chanegUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
      // userMenus => routes

      const routes = menuMapToRoutes(userMenus);
      // console.log("routes", routes);
      // 将routes => router.main.children
      // 动态添加路由
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
      // 获取用户按钮权限

      const permissions = menuMapToPermissions(userMenus);
      console.log(permissions);
      state.permissions = permissions;
    },
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccountType) {
      // 实现登录逻辑
      // console.log(commit);
      // console.log("执行accountLoginAction", payload);

      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      localCache.setCache("token", token);
      // 发送初始化的请求（弯沉的role/department）
      dispatch("getInitDataAction", null, { root: true });
      // 请求用户信息
      const userInfoResult = await requestLoginUserInfo(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);
      // console.log(userInfoResult);

      // 请求用户权限树
      const userMenusResult = requestUserMenuByRole(userInfo.role.id);
      const userMenus = userMenusResult.data;
      commit("chanegUserMenus", userMenus);
      localCache.setCache("userMenus", userMenus);
      // console.log(userMenus);
      // 跳转首页
      router.push("/main");
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(commit);
      console.log("phoneLoginAction", payload);
    },
    loadLocalCache({ commit, dispatch }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
        dispatch("getInitDataAction", null, { root: true });
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("chanegUserMenus", userMenus);
      }
    },
  },
};

export default loginModule;
