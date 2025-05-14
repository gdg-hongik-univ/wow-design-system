import ImageCards from "@components/ImageCards";
import Space from "@components/Space";
import Text from "@components/Text";
import {
  filterChipItems,
  multiSelectChipItem,
} from "@constants/store/chipData";
import Divider from "wowds-ui/Divider";

const GuidelineTab = () => {
  return (
    <section aria-label="Chip GuidelineTab">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Guideline
      </Text>
      <Space height={40} />
      <ImageCards items={multiSelectChipItem} />
      <Divider />
      <Space height={40} />
      <ImageCards items={filterChipItems} />
      <Space height={40} />
    </section>
  );
};

export default GuidelineTab;
