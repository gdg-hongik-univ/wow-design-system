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

export const metadata: Metadata = {
  title: "Header",
  description: "와우 디자인 시스템의 header component 입니다.",
};

const HeaderPage = () => {
  const headerPageData = componentItems.find((item) => item.title === "Header");
  return (
    <>
      <Title
        main={headerPageData?.title ?? ""}
        sub={headerPageData?.description ?? ""}
        variant="header"
      />
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
