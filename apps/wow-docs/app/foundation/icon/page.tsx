import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { iconDescriptions } from "@constants/document/foundation/icon";
import { foundationItems } from "@constants/pageData";
import type { Metadata } from "next/types";

import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = foundationItems.find((item) => item.title === "Icon") ?? {};

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

const IconPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={48} />
      <ImageCards items={iconDescriptions} />
      <Space height={200} />
    </>
  );
};

export default IconPage;
