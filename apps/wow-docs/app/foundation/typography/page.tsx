import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { foundationItems } from "@constants/pageData";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

import BodyCard from "@/foundation/typography/_component/BodyCard";
import DisplayCard from "@/foundation/typography/_component/DisplayCard";
import HeaderCard from "@/foundation/typography/_component/HeaderCard";
import HeadingCard from "@/foundation/typography/_component/HeadingCard";
import LabelCard from "@/foundation/typography/_component/LabelCard";
import PrimaryCard from "@/foundation/typography/_component/PrimaryCard";
import SecondaryCard from "@/foundation/typography/_component/SecondaryCard";
import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = foundationItems.find((item) => item.title === "Typography") ?? {};

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
  alternates: {
    canonical: href,
  },
};

const TypographyPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Font
      </Text>
      <Space height={40} />

      <Title
        main="Primary"
        sub="일반적으로 UI에 사용되는 서체들이에요. 가독성이 중요한 대부분의 텍스트 영역은 이 서체를 사용해요."
        variant="component"
      />
      <Space height={20} />
      <PrimaryCard />
      <Space height={40} />
      <Title
        main="Secondary"
        sub="강조되거나 특별한 때에 사용되는 포인트 서체예요."
        variant="component"
      />
      <Space height={20} />
      <SecondaryCard />
      <Divider style={{ margin: "40px 0" }} />
      <Text as="h2" typo="display2WebPage">
        Typography System
      </Text>
      <Space height={40} />
      <Title
        main="Display"
        sub="랜딩페이지나 배너 등 주요 타이틀을 크게 배치할 때 사용해요."
        variant="component"
      />
      <Space height={20} />
      <DisplayCard />
      <Space height={40} />
      <Title
        main="Heading"
        sub="타 플랫폼 관련 정보가 들어갈 시 해당 키컬러를 따로 사용할 수 있어요."
        variant="component"
      />
      <Space height={20} />
      <HeadingCard />
      <Space height={40} />
      <Title
        main="Body"
        sub="많은 양의 글이 있는 단락, 본문에 주로 활용해요."
        variant="component"
      />
      <Space height={20} />
      <BodyCard />
      <Space height={40} />
      <Title
        main="Label"
        sub="버튼이나 부가적인 내용 등을 표시하는 데 사용해요."
        variant="component"
      />
      <Space height={20} />
      <LabelCard />
      <Space height={40} />
      <Title
        main="Header"
        sub="헤더 내의 GDSC 이름을 표시하는 데 사용해요."
        variant="component"
      />
      <Space height={20} />
      <HeaderCard />
      <Space height={40} />
    </>
  );
};

export default TypographyPage;
