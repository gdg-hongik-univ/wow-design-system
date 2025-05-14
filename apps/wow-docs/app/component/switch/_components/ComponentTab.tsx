import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Grid } from "@styled-system/jsx";
import Switch from "wowds-ui/Switch";

import SwitchBtns from "@/component/switch/_components/SwitchBtns";

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text typo="display2WebPage">Component</Text>
      <Space height={40} />
      <Text typo="headingWebPage">Btn</Text>
      <Space height={20} />
      <Card style={{ padding: "32px auto" }}>
        <Grid columnGap="20px" columns={2}>
          <SwitchBtns />
        </Grid>
      </Card>
      <Space height={40} />
      <Text typo="headingWebPage">Btn + Text</Text>
      <Space height={20} />
      <Card
        style={{
          padding: "52px auto",
        }}
      >
        <Switch defaultChecked label="Text" />
      </Card>
    </>
  );
};

export default ComponentTab;
