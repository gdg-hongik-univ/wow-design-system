import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import ComponentTab from "./_component/ComponentTab";
import GuidelineTab from "./_component/GuidelineTab";
import { DatePicker } from "./_component/Pickers";

export const metadata: Metadata = {
  title: "Picker",
  description: "사용자가 시간, 날짜를 선택할 때 사용하는 컴포넌트입니다. ",
};

const PickerPage = () => {
  const pageData = componentItems.find((item) => item.title === "Picker");
  return (
    <>
      <Title
        main={pageData?.title || ""}
        sub={pageData?.description || ""}
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "73px 0" }}>
        <DatePicker />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </>
  );
};

export default PickerPage;
