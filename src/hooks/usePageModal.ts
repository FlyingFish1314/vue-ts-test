import { ref } from "vue";
import PageModal from "@/components/page-model";

type CallPackFun = (item?: any) => void;
export function usePageModal(newCb?: CallPackFun, editCb?: CallPackFun): any {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
      newCb && newCb();
    }
  };
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true;
      editCb && editCb(item);
    }
  };
  return [pageModalRef, defaultInfo, handleNewData, handleEditData];
}
