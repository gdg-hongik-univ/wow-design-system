import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import type { Metadata } from "next/types";
import Checkbox from "wowds-ui/Checkbox";

import ComponentTab from "@/component/checkbox/_components/ComponentTab";
import GuidelineTab from "@/component/checkbox/_components/GuidelineTab";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Checkbox") ?? {};

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

const CheckboxComponentPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card className={cardStyle}>
        <Checkbox checked label="Text" />
        <Checkbox label="Text" />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
      <Space height={92} />
    </>
  );
};

export default CheckboxComponentPage;

const cardStyle = css({
  alignItems: "end",
  gap: "32px",
});
