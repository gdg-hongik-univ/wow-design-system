import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import { foundationItems } from "@constants/pageData";
import { breakpointItems, gridItems } from "@constants/store";
import type { Metadata } from "next/types";
import Divider from "wowds-ui/Divider";

import { metadata as defaultMetaData } from "@/layout";

const {
  title = "",
  description = "",
  href = "",
} = foundationItems.find((item) => item.title === "Grid") ?? {};

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

const GridPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Text as="h2" typo="display2WebPage">
        Layout Grid
      </Text>
      <Space height={40} />
      <ImageCards items={gridItems} />
      <Divider />
      <Space height={40} />
      <Text as="h2" typo="display2WebPage">
        Breakpoint
      </Text>
      <Space height={40} />
      <ImageCards items={breakpointItems} />
    </>
  );
};

export default GridPage;
