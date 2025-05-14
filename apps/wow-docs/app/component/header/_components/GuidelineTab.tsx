import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Title from "@components/Text/Title";
import Image from "next/image";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Title
        main="PC"
        sub="그리드의 양끝에 정렬하여, 스크린 사이즈와 상관 없이 고정."
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "49px auto" }}>
        <Image
          alt="그리드의 양끝에 정렬하여, 스크린 사이즈와 상관 없이 988px로 고정함을 보여주는 이미지"
          height={125.6}
          src="/component/header/header-guide-1.svg"
          width={880}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Title
        main="Mobile"
        sub="좌우 Margin에 맞게 정렬하여, 반응형으로 조정"
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Image
          alt="모바일 환경에서 좌우 Margin 16px에 맞게 정렬함을 보여주는 이미지"
          height={133}
          src="/component/header/header-guide-2.svg"
          width={390}
        />
      </Card>
    </>
  );
};

export default GuidelineTab;
