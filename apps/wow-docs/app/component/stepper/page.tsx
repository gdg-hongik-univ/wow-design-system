import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Stepper from "wowds-ui/Stepper";

import ComponentTab from "@/component/stepper/_component/ComponentTab";
import GuidelineTab from "@/component/stepper/_component/GuidelineTab";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Stepper") ?? {};

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

const StepperPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card style={{ padding: "100px" }}>
        <Stepper maxStep={3} step={2} />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default StepperPage;
