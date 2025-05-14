import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import type { Metadata } from "next/types";
import Chip from "wowds-ui/Chip";

import ComponentTab from "@/component/chip/_component/ComponentTab";
import GuidelineTab from "@/component/chip/_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Chip",
  description: "와우 디자인 시스템의 Chip 입니다.",
};

const ChipPage = () => {
  return (
    <>
      <Title
        main="Chip"
        sub="사용자가 정보를 선택할 때 또는 필터링할 때 사용하는 컴포넌트입니다."
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "87px", gap: 24 }}>
        <Chip label="Chip" />
        <Chip ischecked={true} label="Chip" />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default ChipPage;
