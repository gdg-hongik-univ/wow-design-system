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
      <Text typo="display2WebPage">Guideline</Text>
      <Space height={40} />
      <Title
        main="Style"
        sub="기본 아바타 그래픽은 4종을 제공해요. 프로필 이미지를 지정할 경우 대체하여 사용해요."
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "49px auto" }}>
        <Image
          alt="기본 아바타 그래픽을 제공하고 사용자 지정 이미지를 사용할 수 있습니다"
          height={138}
          src="/component/avatar/avatar-guide-1.svg"
          width={354}
        />
      </Card>
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <Title
        main="Size"
        sub="크기에 따라 다른 방식으로 활용해요."
        variant="component"
      />
      <Space height={40} />
      <Title
        main="S Size"
        sub="이름과 함께 병행하여 사용 가능"
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Image
          alt="S size를 아바타만 사용하거나 이름과 병행한 이미지"
          height={140}
          src="/component/avatar/avatar-guide-2.svg"
          width={908}
        />
      </Card>
      <Space height={40} />
      <Text color="sub" typo="body1">
        헤더에 적용할 경우, 아바타만 사용하거나 이름과 병행 가능
      </Text>
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Image
          alt="S size를 헤더에 적용한 경우, 아바타만 사용하거나 이름과 병행한 이미지"
          height={150}
          src="/component/avatar/avatar-guide-3.svg"
          width={390}
        />
      </Card>
      <Space height={40} />
      <Title
        main="L Size"
        sub="헤더에 적용할 경우, 아바타만 사용하거나 이름과 병행 가능"
        variant="component"
      />
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Image
          alt="L size를 아바타만 사용하거나 이름과 병행한 이미지"
          height={233}
          src="/component/avatar/avatar-guide-4.svg"
          width={908}
        />
      </Card>
    </>
  );
};

export default GuidelineTab;
