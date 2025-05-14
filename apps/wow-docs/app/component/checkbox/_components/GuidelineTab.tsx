import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Image from "next/image";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Text color="sub" typo="body1">
        사용되는 텍스트의 길이 및 용도에 따라 컴포넌트 버전을 선택
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="사용되는 텍스트의 길이 및 용도에 따라 컴포넌트 버전을 선택"
          height={90}
          src="/component/checkbox/checkbox-guide-1.svg"
          width={379}
        />
      </Card>
      <Space height={40} />
      <Text color="sub" typo="body1">
        너비 규칙은 Horizontal에만 적용
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="너비 규칙은 Horizontal에만 적용"
          height={140}
          src="/component/checkbox/checkbox-guide-2.svg"
          width={908}
        />
      </Card>
    </>
  );
};

export default GuidelineTab;
