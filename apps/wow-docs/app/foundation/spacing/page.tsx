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

export const metadata: Metadata = {
  title: "Spacing",
  description: "와우 디자인 시스템의 spacing foundation 입니다.",
};

const SpacingPage = () => {
  const spacingPageData = foundationItems.find(
    (item) => item.title === "Spacing"
  );

  return (
    <>
      <Title
        main={spacingPageData?.title ?? ""}
        sub={spacingPageData?.description ?? ""}
        variant="header"
      />
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
