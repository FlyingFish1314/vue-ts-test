import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { ISystemState } from "./type";
import { menuListData } from "@/uitl/data-menuList";
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData,
} from "@/service/main/system/system";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    };
  },
  mutations: {
    changeUserList(state, list: any[]) {
      state.userList = list;
    },
    changeUserCount(state, count: number) {
      state.userCount = count;
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list;
    },
    changeRoleCount(state, count: number) {
      state.goodsCount = count;
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list;
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count;
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list;
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count;
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        const listData: any[] = (state as any)[`${pageName}List`] ?? [];
        return listData;
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        const listData: any[] = (state as any)[`${pageName}Count`] ?? [];
        return listData;
      };
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 获取pageUrl
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;
      console.log(payload);

      // 对页面发送请求
      if (pageName === "menu") {
        const pageResult: any[string] = menuListData;
        const list = menuListData;
        const totalCount = 5;
        console.log("pageResult", pageResult.data);
        commit(
          `change${
            pageName.slice(0, 1).toUpperCase() + pageName.slice(1).toLowerCase()
          }List`,
          list
        );
        commit(
          `change${
            pageName.slice(0, 1).toUpperCase() + pageName.slice(1).toLowerCase()
          }Count`,
          totalCount
        );
      } else {
        const pageResult = await getPageListData(pageUrl, payload.queryInfo);
        const { list, totalCount } = pageResult.data;
        console.log("pageResult", pageResult.data);
        console.log("userMenus", menuListData);
        commit(
          `change${
            pageName.slice(0, 1).toUpperCase() + pageName.slice(1).toLowerCase()
          }List`,
          list
        );
        commit(
          `change${
            pageName.slice(0, 1).toUpperCase() + pageName.slice(1).toLowerCase()
          }Count`,
          totalCount
        );
      }
      // 将数据储存到state中
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await deletePageData(pageUrl);

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 1,
          pageSize: 10,
        },
      });
    },
    async createPageDataAction({ dispatch }, payload: any) {
      // 创建网络请求
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      console.log(payload);

      await createPageData(pageUrl, newData);
      // 请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 1,
          pageSize: 10,
        },
      });
    },
    async editPageDataAction({ dispatch }, payload: any) {
      // 创建网络请求
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);
      // 请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 1,
          pageSize: 10,
        },
      });
    },
  },
};

export default systemModule;
