import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import ComponentTab from "@/component/pagination/_component/ComponentTab";
import GuidelineTab from "@/component/pagination/_component/GuidelineTab";
import PaginationCard from "@/component/pagination/_component/PaginationCard";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Pagination") ?? {};

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

const PaginationPage = () => {
  return (
    <section>
      <Title main={title} sub={description} variant="header" />
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
