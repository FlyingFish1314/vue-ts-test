type IFormType = "input" | "password" | "select" | "datepicker";
export interface IFormItem {
  filed: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: string;
  // 针对select
  options?: any[];
  // 针对其他属性
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IForm {
  labelWidth?: string;
  formItems: IFormItem[];
  itemLayouot?: any;
  itemStyle?: any;
  colLayout?: any;
}
