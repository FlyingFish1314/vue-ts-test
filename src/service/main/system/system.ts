import HYRequest from "../../index";
import { IDataType } from "../../types";

export function getPageListData(url: string, queryInfo: any) {
  console.log("url", url);

  return HYRequest.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}

// url:/users/id
export function deletePageData(url: string) {
  return HYRequest.delete<IDataType>({
    url: url,
  });
}

export function createPageData(url: string, newData: any) {
  console.log(url, newData);

  return HYRequest.post<IDataType>({
    url: url,
    data: newData,
  });
}
export function editPageData(url: string, editData: any) {
  return HYRequest.patch<IDataType>({
    url: url,
    data: editData,
  });
}
