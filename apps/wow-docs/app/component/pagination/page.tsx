import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import ComponentTab from "@/component/pagination/_component/ComponentTab";
import GuidelineTab from "@/component/pagination/_component/GuidelineTab";
import PaginationCard from "@/component/pagination/_component/PaginationCard";

export const metadata: Metadata = {
  title: "Pagination",
  description: "와우 디자인 시스템의 Pagination 입니다.",
};

const PaginationPage = () => {
  const paginationPageData = componentItems.find(
    (item) => item.title === "Pagination"
  );

  return (
    <section>
      <Title
        main={paginationPageData?.title ?? ""}
        sub={paginationPageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <PaginationCard />
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </section>
  );
};

export default PaginationPage;
