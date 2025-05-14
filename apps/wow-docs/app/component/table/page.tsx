import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import ComponentTab from "@/component/table/_component/ComponentTab";
import GuidelineTab from "@/component/table/_component/GuidelineTab";
import TableCard from "@/component/table/_component/TableCard";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Table") ?? {};

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    ...defaultMetaData.openGraph,
    title: title,
    description: description,
    url: href,
  },
  twitter: {
    ...defaultMetaData.twitter,
    title: title,
    description: description,
  },
  alternates: { canonical: href },
};

const TablePage = () => {
  return (
    <section aria-label="Table 컴포넌트 소개 페이지입니다.">
      <Title main={title} sub={description} variant="header" />
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
