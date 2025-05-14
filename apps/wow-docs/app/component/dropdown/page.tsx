import Card from "@components/Card";
import ComponentDetailTabs from "@components/ComponentDetailTabs";
import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import { ComponentTab } from "@/component/dropdown/_components/ComponentTab";
import { GuidelineTab } from "@/component/dropdown/_components/GuidelineTab";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = componentItems.find((item) => item.title === "Dropdown") ?? {};

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

const DropDownComponentPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={40} />
      <Card className={cardStyle}>
        <DropDown label="Label" placeholder="선택하세요" style={dropdownStyle}>
          <DropDownOption text="Text" value="Text" />
        </DropDown>
        <DropDown
          defaultValue="Text"
          placeholder="내용을 입력하세요"
          style={dropdownStyle}
        >
          <DropDownOption text="Text" value="Text" />
        </DropDown>
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

export default DropDownComponentPage;

const dropdownStyle: CSSProperties = {
  width: "300px",
};

const cardStyle = css({
  alignItems: "end",
  gap: "20px",
});
