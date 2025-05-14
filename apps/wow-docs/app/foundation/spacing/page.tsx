import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import {
  paddingDescription,
  radiusDescription,
  strokeDescription,
} from "@constants/document/foundation/spacing";
import { foundationItems } from "@constants/pageData";
import Image from "next/image";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = foundationItems.find((item) => item.title === "Spacing") ?? {};

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

const SpacingPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Radius
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt={radiusDescription.imageAlt}
          height={radiusDescription.imageHeight}
          src={radiusDescription.imageSrc}
          width={radiusDescription.imageWidth}
        />
      </Card>
      <Divider style={{ margin: "40px 0" }} />
      <Text as="h2" typo="display2WebPage">
        Padding
      </Text>
      <Text color="sub" typo="body1">
        {paddingDescription.sub}
      </Text>
      <Space height={40} />
      <Card>
        <Image
          alt={paddingDescription.imageAlt}
          height={paddingDescription.imageHeight}
          src={paddingDescription.imageSrc}
          width={paddingDescription.imageWidth}
        />
      </Card>
      <Divider style={{ margin: "40px 0" }} />
      <Text as="h2" typo="display2WebPage">
        Stroke
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt={strokeDescription.imageAlt}
          height={strokeDescription.imageHeight}
          src={strokeDescription.imageSrc}
          width={strokeDescription.imageWidth}
        />
      </Card>
      <Space height={40} />
    </>
  );
};

export default SpacingPage;
