import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";

import { DatePicker, TimePicker } from "./Pickers";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Time
      </Text>
      <Space height={20} />
      <Card>
        <TimePicker />
      </Card>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Date
      </Text>
      <Space height={20} />
      <Card>
        <DatePicker />
      </Card>
      <Space height={40} />
    </>
  );
};

export default ComponentTab;
