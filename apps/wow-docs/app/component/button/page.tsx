import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Button from "wowds-ui/Button";

import { metadata as defaultMetaData } from "@/layout";

import ComponentTab from "./_component/ComponentTab";
import GuidelineTab from "./_component/GuidelineTab";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Button") ?? {};

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

const ButtonPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card style={{ padding: "156px 154px", gap: 24 }}>
        <Button>Button1</Button>
        <Button variant="outline">Button1</Button>
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default ButtonPage;
