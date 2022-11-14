import hyRequest from "../index";
import { IAccountType, IDataReasult } from "./type";
import { IDataType } from "../types";
import { userMenus } from "@/uitl/data-userMenus";
enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/user/",
  UserMenus = "/role/",
}
export function accountLoginRequest(account: IAccountType) {
  return hyRequest.post<IDataType<IDataReasult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}
export function requestLoginUserInfo(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
  });
}
export function requestUserMenuByRole(id: number) {
  // return hyRequest.get<IDataType>({
  //   url: LoginAPI.UserMenus + id + "/menu",
  // });
  console.log(id);

  return {
    code: 1,
    data: userMenus,
  };
}
