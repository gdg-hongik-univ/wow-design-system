import Space from "@components/Space";
import Text from "@components/Text";

import CheckboxAndTextCard from "@/component/checkbox/_components/CheckboxAndTextCard";
import CheckboxCard from "@/component/checkbox/_components/CheckboxCard";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">Box</Text>
      <Space height={20} />
      <CheckboxCard />
      <Space height={40} />
      <Text typo="headingWebPage">Box + Text</Text>
      <Space height={20} />
      <CheckboxAndTextCard />
    </>
  );
};

export default ComponentTab;
