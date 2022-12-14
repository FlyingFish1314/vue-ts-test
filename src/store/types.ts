import { ILoginState } from "./login/type";
import { ISystemState } from "./main/system/type";
export interface IRootState {
  name: string;
  age: number;
  entireDepartments: any[];
  entireRoles: any[];
  entireMenu: any[];
}
export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
}
export type IStoreType = IRootState & IRootWithModule;
