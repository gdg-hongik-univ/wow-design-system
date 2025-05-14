import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import Header from "wowds-ui/Header";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="headingWebPage">PC</Text>
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Flex className={pcHeaderContainerStyle} direction="column" gap={20}>
          <Header username="김홍익" variant="username" />
          <Header variant="login" />
          <Header variant="none" />
        </Flex>
      </Card>
      <Space height={40} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">Mobile</Text>
      <Space height={20} />
      <Card style={{ padding: "46px auto" }}>
        <Flex
          className={mobileHeaderContainerStyle}
          direction="column"
          gap={20}
        >
          <Header username="김홍익" variant="username" />
          <Header variant="login" />
          <Header variant="none" />
        </Flex>
      </Card>
    </>
  );
};

export default ComponentTab;

const mobileHeaderContainerStyle = css({
  width: "390px",
  "& > header": {
    backgroundColor: "background",
    height: "66px",
    paddingX: "16px",

    "& > div > section > div": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "space-between",
    },
  },
});

const pcHeaderContainerStyle = css({
  width: "880px",
  "& > header": {
    backgroundColor: "background",
    height: "43.2px",
  },
});
