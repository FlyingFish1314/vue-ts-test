import { ref } from "vue";
import PageContent from "@/components/page-content";

export function usePageSearch(): any {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleRestClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleQueryClick = (quertInfo: any) => {
    console.log(pageContentRef.value);

    pageContentRef.value?.getPageData(quertInfo);
  };
  return [pageContentRef, handleRestClick, handleQueryClick];
}
