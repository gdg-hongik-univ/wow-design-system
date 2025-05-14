import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import ComponentTab from "@/component/table/_component/ComponentTab";
import GuidelineTab from "@/component/table/_component/GuidelineTab";
import TableCard from "@/component/table/_component/TableCard";

export const metadata: Metadata = {
  title: "Table",
  description: "와우 디자인 시스템의 Table 입니다.",
};

const TablePage = () => {
  const tablePageData = componentItems.find((item) => item.title === "Table");
  return (
    <section aria-label="Table 컴포넌트 소개 페이지입니다.">
      <Title
        main={tablePageData?.title ?? ""}
        sub={tablePageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <TableCard />
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </section>
  );
};

export default TablePage;
