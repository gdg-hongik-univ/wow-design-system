import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { css } from "@styled-system/css";
import type { Metadata } from "next/types";
import Box from "wowds-ui/Box";

import ComponentTab from "@/component/box/_component/ComponentTab";
import GuidelineTab from "@/component/box/_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Box",
  description: "와우 디자인 시스템의 Box입니다.",
};

const BoxPage = () => {
  return (
    <>
      <Title
        main="Box"
        sub="내부 요소로 연관성 있는 정보들을 담는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "120px 132px", gap: 24 }}>
        <Box subText="Subtext" text="Text" variant="text"></Box>
        <Box disabled={true} subText="Subtext" text="Text"></Box>
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default BoxPage;
