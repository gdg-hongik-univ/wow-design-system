import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Image from "next/image";

const GuidelineTab = () => {
  return (
    <section aria-label="Table Guideline Section">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Text as="p" color="sub" typo="body1">
        항목 칸(상단)과 내용 칸(하단)을 구분하여 사용, 표의 너비는 그리드에
        맞추어 적용
      </Text>
      <Space height={40} />
      <Card>
        <Image
          alt="표의 너비를 그리드에 맞추어 적용하고 있는 모습을 담은 이미지"
          height={222}
          src="/component/table/guideline_table.svg"
          width={907}
        />
      </Card>
      <Space height={40} />
      <Card>
        <Image
          alt="페이지네이션 컴포넌트와 함게 자세한 table 컴포넌트의 사용 방법을 나타내는 이미지"
          height={271}
          src="/component/table/table_with_pagination.svg"
          width={907}
        />
      </Card>
      <Space height={120} />
    </section>
  );
};

export default GuidelineTab;
