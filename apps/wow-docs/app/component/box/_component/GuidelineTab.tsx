import Card from "@components/Card";
import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { boxUsage, widthBoxItems } from "@constants/store/boxData";
import {
  combinationButtonItems,
  withIconButtonItems,
  withSubjectButtonItems,
} from "@constants/store/buttonData";
import Image from "next/image";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <section aria-label="Box Guideline Tab">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />

      <ImageCards items={boxUsage} />
      <Card isBackground style={{ marginTop: "-60px" }}>
        <Image
          alt="Box 안에 긴 글을 적어 넣은 컴포넌트 이미지"
          height={121}
          src="/box/long_text_box.svg"
          width={358}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Width
      </Text>
      <Space height={40} />
      <ImageCards items={widthBoxItems} />
      <Space height={80} />
    </section>
  );
};

export default GuidelineTab;
