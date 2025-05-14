import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Switch from "wowds-ui/Switch";

import ComponentTab from "@/component/switch/_components/ComponentTab";
import GuidelineTab from "@/component/switch/_components/GuidelineTab";

export const metadata: Metadata = {
  title: "Switch",
  description: "와우 디자인 시스템의 switch component 입니다.",
};

const SwitchPage = () => {
  const SwitchPageData = componentItems.find((item) => item.title === "Switch");

  return (
    <>
      <Title
        main={SwitchPageData?.title ?? ""}
        sub={SwitchPageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <Card
        style={{
          padding: "86px auto",
        }}
      >
        <Switch defaultChecked label="Text" />
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

export default SwitchPage;
