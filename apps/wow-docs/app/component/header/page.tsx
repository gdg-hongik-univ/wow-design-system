import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import { Wrap } from "@styled-system/jsx";
import type { Metadata } from "next/types";
import Header from "wowds-ui/Header";

import ComponentTab from "@/component/header/_components/ComponentTab";
import GuidelineTab from "@/component/header/_components/GuidelineTab";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Header") ?? {};

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

const HeaderPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card
        style={{
          padding: "78.4px 54px",
        }}
      >
        <Wrap className={headerWrapperStyle}>
          <Header username="김홍익" variant="username" />
        </Wrap>
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

export default HeaderPage;

const headerWrapperStyle = css({
  backgroundColor: "background",
  width: "880px",
});
