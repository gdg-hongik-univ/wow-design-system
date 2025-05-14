import Card from "@components/Card";
import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { usageStepperItems } from "@constants/store/stepperData";
import Image from "next/image";

const GuidelineTab = () => {
  return (
    <section aria-label="Stepper Guideline Tab">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <ImageCards items={usageStepperItems} />
      <Text typo="headingWebPage">Width</Text>
      <Text color="sub" typo="body1">
        단계에 따라 너비는 자율로 변경 가능, 영역에 중앙 정렬하기
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="단계에 따라 너비는 자율로 변경 가능, 영역에 중앙 정렬하기"
          height={135}
          src="/component/stepper/width_stepper.svg"
          width={907}
        />
      </Card>
      <Space height={20} />
      <Text color="sub" typo="body1">
        너무 적은 단계를 길게 늘리지 말 것!
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="사용하지 말아야 하는 stepper 의 형태"
          height={136}
          src="/component/stepper/donotuse_width_stepper.svg"
          width={907}
        />
      </Card>
      <Space height={80} />
    </section>
  );
};

export default GuidelineTab;
