import { useStore } from "@/store";

export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const verifyPermissions = `system:${pageName}:${handleName}`;
  console.log(permissions);
  console.log(pageName);
  console.log(handleName);
  console.log(verifyPermissions);

  return !!permissions.find((item) => item === verifyPermissions);
}
