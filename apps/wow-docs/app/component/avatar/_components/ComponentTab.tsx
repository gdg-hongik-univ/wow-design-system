import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import Avatar from "wowds-ui/Avatar";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">S Size</Text>
      <Space height={20} />
      <Card style={{ padding: "46px auto" }}>
        <Flex gap={12}>
          <Avatar size="sm" />
          <Avatar size="sm" variant="green" />
          <Avatar size="sm" variant="yellow" />
          <Avatar size="sm" variant="red" />
        </Flex>
      </Card>
      <Space height={40} />
      <Text typo="headingWebPage">L Size</Text>
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Flex gap={20}>
          <Avatar />
          <Avatar variant="green" />
          <Avatar variant="yellow" />
          <Avatar variant="red" />
        </Flex>
      </Card>
    </>
  );
};

export default ComponentTab;
