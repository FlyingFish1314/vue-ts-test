import { IForm } from "@/base-ui/form";
export const searchFormConfig: IForm = {
  labelWidth: "100px",
  formItems: [
    {
      filed: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      filed: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      filed: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      filed: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请输入用户状态",
      options: [
        { value: 1, label: "启用" },
        { value: 0, label: "禁用" },
      ],
    },

    {
      filed: "datepicker",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
  itemLayouot: { padding: "5px 10px" },
  itemStyle: { span: 8 },
};
