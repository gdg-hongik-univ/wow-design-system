import Card from "@components/Card";
import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import {
  componentDescriptions,
  globalDescription,
  semanticDescriptions,
} from "@constants/document/foundation/color";
import { foundationItems } from "@constants/pageData";
import Image from "next/image";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = foundationItems.find((item) => item.title === "Color") ?? {};

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

const ColorPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Semantic
      </Text>
      <Text color="sub" typo="body1">
        전체 컬러 팔레트 중 서비스에 사용되는 컬러를 용도별로 지정해서
        시스템화해요.
      </Text>
      <Space height={40} />
      <ImageCards items={semanticDescriptions} />
      <Text as="h3" typo="headingWebPage">
        Component
      </Text>
      <Text color="sub" typo="body1">
        UI 내 요소들에 사용되는 컬러로, State별로 나누어서 정리했어요.
        <br />
        정리된 토큰 외 컬러 사용시 변형 및 확장이 가능해요.
      </Text>
      <Space height={20} />
      <ImageCards items={componentDescriptions} />
      <Divider />
      <Space height={40} />
      <Text as="h2" typo="display2WebPage">
        Global
      </Text>
      <Text color="sub" typo="body1">
        모든 컬러의 셰이드를 지정했어요. 그래픽 및 UI 요소를 확장할 시 이 안에서
        참조하여 사용해요.
      </Text>
      <Space height={40} />
      <Card>
        <Image
          alt={globalDescription.imageAlt}
          height={globalDescription.imageHeight}
          src={globalDescription.imageSrc}
          width={globalDescription.imageWidth}
        />
      </Card>
      <Space height={40} />
    </>
  );
};

export default ColorPage;
