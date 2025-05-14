import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import Button from "wowds-ui/Button";
import Checkbox from "wowds-ui/Checkbox";

const ComponentTab = () => {
  return (
    <section aria-label="Table Component Section">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <Card>
        <Flex align="center" gap="xl">
          <Text color="sub" typo="label2">
            Label
          </Text>
          <Text color="textBlack" typo="body2">
            Text
          </Text>
          <Checkbox />
          <Flex align="center" gap="xxs">
            <Button
              size="sm"
              style={{ color: "#2A8642", borderColor: " #2A8642" }}
              variant="outline"
            >
              Button
            </Button>
            <Button
              color="success"
              size="sm"
              style={{ color: "#BB362A", borderColor: " #BB362A" }}
              variant="outline"
            >
              Button
            </Button>
          </Flex>
        </Flex>
      </Card>
      <Space height={120} />
    </section>
  );
};

export default ComponentTab;
