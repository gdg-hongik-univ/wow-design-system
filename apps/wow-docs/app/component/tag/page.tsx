import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import type { Metadata } from "next";
import Tag from "wowds-ui/Tag";

import ComponentTab from "@/component/tag/_components/ComponentTab";
import GuidelineTab from "@/component/tag/_components/GuidelineTab";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Tag") ?? {};

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

const TagComponentPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card className={tagContainerStyle}>
        <Tag color="blue" variant="outline">
          Tag
        </Tag>
        <Tag color="blue" variant="solid2">
          Tag
        </Tag>
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

export default TagComponentPage;

const tagContainerStyle = css({
  gap: "20px",
});
