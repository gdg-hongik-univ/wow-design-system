import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Avatar from "wowds-ui/Avatar";

import ComponentTab from "@/component/avatar/_components/ComponentTab";
import GuidelineTab from "@/component/avatar/_components/GuidelineTab";

export const metadata: Metadata = {
  title: "Avatar",
  description: "와우 디자인 시스템의 avatar component 입니다.",
};

const AvatarPage = () => {
  const avatarPageData = componentItems.find((item) => item.title === "Avatar");
  return (
    <>
      <Title
        main={avatarPageData?.title ?? ""}
        sub={avatarPageData?.description ?? ""}
        variant="header"
      />
      <Space height={40} />
      <Card style={{ padding: "50px 144px" }}>
        <Avatar />
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

export default AvatarPage;
