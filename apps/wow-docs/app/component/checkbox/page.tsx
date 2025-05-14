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

export const metadata: Metadata = {
  title: "Checkbox",
  description: "와우 디자인 시스템의 Checkbox 입니다.",
};

const CheckboxComponentPage = () => {
  const CheckboxPageData = componentItems.find(
    (item) => item.title === "Checkbox"
  );
  return (
    <>
      <Title
        main={CheckboxPageData?.title ?? ""}
        sub={CheckboxPageData?.description ?? ""}
        variant="header"
      />
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
