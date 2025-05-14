import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import Image from "next/image";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Title
        main="Spacing"
        sub="여러 항목을 사용할 경우 세로로 배치 및 간격 지키기"
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "49px auto" }}>
        <Image
          alt="8px 간격으로 세로 배치함을 보여주는 이미지"
          height={140}
          src="/component/switch/switch-guide-1.svg"
          width={980}
        />
      </Card>
      <Space height={40} />
    </>
  );
};

export default GuidelineTab;
