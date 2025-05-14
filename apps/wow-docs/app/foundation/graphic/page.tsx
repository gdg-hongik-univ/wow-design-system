import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { foundationItems } from "@constants/pageData";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import Image from "next/image";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = foundationItems.find((item) => item.title === "Graphic") ?? {};

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

const graphicExampleItems = [
  {
    imageAlt: "graphic-example-1",
    imageSrc: "/graphic/graphic-example-1.png",
  },
  {
    imageAlt: "graphic-example-2",
    imageSrc: "/graphic/graphic-example-2.png",
  },
  {
    imageAlt: "graphic-example-3",
    imageSrc: "/graphic/graphic-example-3.png",
  },
  {
    imageAlt: "graphic-example-4",
    imageSrc: "/graphic/graphic-example-4.png",
  },
];
const GraphicPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Theme
      </Text>
      <Space height={4} />
      <Text as="h2" color="sub" typo="body1">
        GDSC의 메인 색상을 활용하여 매트하고 깔끔한 조형들을 활용해요. <br />
        언제든지 테마에 어울리는 그래픽을 제작하여 응용할 수 있어요.
      </Text>
      <Space height={40} />
      <Card>
        <Image
          alt={graphicExampleItems[0]?.imageAlt as string}
          className={imageStyle}
          height={572}
          src={graphicExampleItems[0]?.imageSrc as string}
          width={908}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Text as="h2" typo="display2WebPage">
        Example
      </Text>
      <Space height={40} />
      <div className={containerStyle}>
        <Flex flexDirection="column" gap="40px">
          {graphicExampleItems.slice(1).map((item) => (
            <Image
              alt={item.imageAlt}
              className={imageStyle}
              height={572}
              key={item.imageAlt}
              src={item.imageSrc}
              width={908}
            />
          ))}
        </Flex>
      </div>
      <Space height={80} />
    </>
  );
};

export default GraphicPage;

const containerStyle = css({
  backgroundColor: "backgroundAlternative",
  borderRadius: "sm",
  padding: "32px 40px",
});

const imageStyle = css({
  width: "100%",
});
