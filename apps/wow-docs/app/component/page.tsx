import Space from "@components/Space";
import Title from "@components/Text/Title";
import { componentItems, componentPageData } from "@constants/pageData";
import { css } from "@styled-system/css";
import { Grid } from "@styled-system/jsx";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { metadata as defaultMetaData } from "@/layout";

const { title, description, href } = componentPageData;

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
const ComponentPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Grid gap="22px" gridTemplateColumns="repeat(3, 1fr)">
        {componentItems.map((item) => (
          <Link className={containerStyle} href={item.href} key={item.imageAlt}>
            <Image
              alt={item.imageAlt}
              className={imageStyle}
              height={200}
              src={item.imageSrc}
              width={314}
            />
            <Title
              className={titleStyle}
              main={item.title}
              padding="20px"
              sub={item.description}
              variant="component"
            />
          </Link>
        ))}
      </Grid>
      <Space height={127} />
    </>
  );
};

export default ComponentPage;

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
});

const titleStyle = css({
  borderRadius: "0 0 8px 8px",
  border: "1px solid",
  borderColor: "outline",
  borderTop: "none",
  flex: "auto",
});

const imageStyle = css({
  width: "100%",
});
