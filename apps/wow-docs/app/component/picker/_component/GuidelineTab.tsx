import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import { datePickerItems, timePickerItems } from "@constants/store/pickerData";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <ImageCards items={timePickerItems} />
      <Divider />
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Date
      </Text>
      <Space height={40} />
      <ImageCards items={datePickerItems} />
      <Space height={40} />
    </>
  );
};

export default GuidelineTab;
