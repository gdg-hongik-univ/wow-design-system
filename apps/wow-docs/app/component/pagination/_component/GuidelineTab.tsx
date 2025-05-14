import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import Image from "next/image";

const GuidelineTab = () => {
  return (
    <section aria-label="pagination guideline tab">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Text as="p" color="sub" typo="body1">
        배경에 따라 박스의 컬러 변경 가능
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="페이지네이션 컴포넌트의 다양한 상태에 따른 색 변화를 나타내는 이미지"
          height={140}
          src="/component/pagination/pagination.svg"
          width={907}
        />
      </Card>
      <Space height={40} />
      <Text as="p" color="sub" typo="body1">
        한 번에 5개 페이지를 노출하며, 다음으로 넘어간 경우 및 5개보다 모자랄
        경우 위와 같이 사용
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="페이지네이션 컴포넌트의 다양한 넘버링 방법을 나타낸 이미지"
          height={163}
          src="/component/pagination/pagination_numbering.svg"
          width={907}
        />
      </Card>
      <Space height={40} />
      <Text as="p" color="sub" typo="body1">
        칸 간격은 4, 화살표 칸 사이 간격은 0
      </Text>
      <Space height={20} />
      <Card>
        <Image
          alt="페이지네이션 버튼 사이의 패딩을(4px) 나타내는 이미지"
          height={140}
          src="/component/pagination/pagination_padding.svg"
          width={907}
        />
      </Card>
      <Space height={80} />
    </section>
  );
};

export default GuidelineTab;
