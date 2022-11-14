export const contenTableConfig = {
  title: "菜单列表",
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "150" },
    { prop: "type", label: "类型", minWidth: "100" },
    { prop: "url", label: "菜单url", minWidth: "150" },
    { prop: "icon", label: "菜单icon", minWidth: "100" },
    { prop: "premession", label: "按钮权限", minWidth: "100" },
    { label: "操作", minWidth: "130", slotName: "handler" },
  ],
  showIndexColum: false,
  showSelectColum: false,
  showFooter: false,
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children",
    },
  },
};
