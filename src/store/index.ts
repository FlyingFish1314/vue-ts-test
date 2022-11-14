import { createStore, Store, useStore as useVueStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import login from "./login/login";
import system from "./main/system";
import { menuListData } from "@/uitl/data-menuList";

import { getPageListData } from "@/service/main/system/system";
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "test",
      age: 18,
      height: "12",
      entireDepartments: [],
      entireRoles: [],
      entireMenu: [],
    };
  },
  mutations: {
    changeEntireRoles(state, entireRoles) {
      state.entireRoles = entireRoles;
    },
    changeEntireDepartments(state, entireDepartments) {
      state.entireDepartments = entireDepartments;
    },
    changeEntireMenu(state, entireMenu) {
      state.entireMenu = entireMenu;
    },
  },
  getters: {},
  actions: {
    async getInitDataAction({ commit }) {
      // 请求部门和角色数据
      const entireDepartments = menuListData;
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 100,
      });
      const { list: entireRoles } = roleResult.data;
      // const menuResult = await getPageListData("/menu/list", {});
      // const { list: menuLIst } = menuResult.data;

      commit("changeEntireRoles", entireRoles);
      commit("changeEntireDepartments", entireDepartments);
      commit("changeEntireMenu", entireDepartments);
    },
  },
  modules: {
    login,
    system,
  },
});
export function setupStore() {
  store.dispatch("login/loadLocalCache");
  // store.dispatch("getInitDataAction");
}
export function useStore(): Store<IStoreType> {
  return useVueStore();
}
export default store;
