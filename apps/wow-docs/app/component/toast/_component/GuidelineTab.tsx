import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { usageItems, widthItems } from "@constants/store/toastData";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        PC
      </Text>
      <Space height={40} />
      <ImageCards items={usageItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Mobile
      </Text>
      <Space height={40} />
      <ImageCards items={widthItems} />
      <Space height={40} />
    </>
  );
};

export default GuidelineTab;
