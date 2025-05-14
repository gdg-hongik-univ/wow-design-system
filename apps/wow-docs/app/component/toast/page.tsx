import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Toast from "wowds-ui/Toast";
import ToastProvider from "wowds-ui/ToastProvider";

import ComponentTab from "./_component/ComponentTab";
import GuidelineTab from "./_component/GuidelineTab";

export const metadata: Metadata = {
  title: "Toast",
  description:
    "사용자가 요청한 작업의 결과에 대해 빠르게 피드백을 주는 컴포넌트입니다. ",
};

const ToastPage = () => {
  const title = componentItems.find((item) => item.title === "Toast");
  return (
    <ToastProvider>
      <Title
        main={title?.title || ""}
        sub={title?.description || ""}
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "73px 429px" }}>
        <Toast id="1" subText="Subtext" text="Text" />
      </Card>
      <Space height={92} />
      <ComponentDetailTabs
        componentTab={<ComponentTab />}
        guidelineTab={<GuidelineTab />}
      />
    </ToastProvider>
  );
};

export default ToastPage;
