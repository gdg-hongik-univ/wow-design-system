import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import { metadata as defaultMetaData } from "@/layout";

import ComponentTab from "./_component/ComponentTab";
import GuidelineTab from "./_component/GuidelineTab";
import { DatePicker } from "./_component/Pickers";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Picker") ?? {};

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

const PickerPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card style={{ padding: "73px 0" }}>
        <DatePicker />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default PickerPage;
