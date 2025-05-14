import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Grid } from "@styled-system/jsx";
import Box from "wowds-ui/Box";

const ComponentTab = () => {
  return (
    <section aria-label="Box Component Tab">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <Card>
        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          justifyItems="center"
          maxWidth={728}
          width="100%"
        >
          <Box subText="SubText" text="Text"></Box>
          <Box disabled={true} subText="SubText" text="Text"></Box>
          <Box subText="SubText" text="Text" variant="arrow"></Box>
          <Box disabled subText="SubText" text="Text" variant="arrow"></Box>
          <Box subText="SubText" text="Text" variant="checkbox"></Box>
          <Box disabled subText="SubText" text="Text" variant="checkbox"></Box>
        </Grid>
      </Card>
      <Space height={130} />
    </section>
  );
};

export default ComponentTab;
