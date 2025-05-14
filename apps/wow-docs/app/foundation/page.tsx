import Space from "@components/Space";
import Title from "@components/Text/Title";
import { foundationItems, foundationPageData } from "@constants/pageData";
import { css } from "@styled-system/css";
import { Flex, Grid } from "@styled-system/jsx";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { metadata as defaultMetaData } from "@/layout";

const { title, description, href } = foundationPageData;

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

const FoundationPage = () => {
  return (
    <>
      <Title main={title} sub={description} variant="header" />
      <Space height={68} />
      <Grid gap="22px" gridTemplateColumns="repeat(2, 1fr)">
        {foundationItems.map((item) => (
          <Link className={containerStyle} href={item.href} key={item.imageAlt}>
            <Flex>
              <Title
                justifyContent="end"
                main={item.title}
                padding="20px"
                sub={item.description}
                variant="component"
              />

              <Image
                alt={item.imageAlt}
                height={200}
                src={item.imageSrc}
                width={200}
              />
            </Flex>
          </Link>
        ))}
      </Grid>
      <Space height={127} />
    </>
  );
};

export default FoundationPage;

const containerStyle = css({
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "outline",
});
