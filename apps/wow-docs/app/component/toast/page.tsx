import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Toast from "wowds-ui/Toast";
import ToastProvider from "wowds-ui/ToastProvider";

import { metadata as defaultMetaData } from "@/layout";

import ComponentTab from "./_component/ComponentTab";
import GuidelineTab from "./_component/GuidelineTab";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Toast") ?? {};

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

const ToastPage = () => {
  return (
    <ToastProvider>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card style={{ padding: "73px 429px" }}>
        <Toast id="1" subText="Subtext" text="Text" />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </ToastProvider>
  );
};

export default ToastPage;
