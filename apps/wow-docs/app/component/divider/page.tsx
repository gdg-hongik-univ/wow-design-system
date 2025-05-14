import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import { metadata as defaultMetaData } from "@/layout";

import ComponentTab from "./_component/ComponentTab";
import DividerCard from "./_component/DividerCard";
import GuidelineTab from "./_component/GuidelineTab";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Divider") ?? {};

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

const DividerPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <DividerCard />
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default DividerPage;
