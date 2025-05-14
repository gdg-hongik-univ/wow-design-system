import Card from "@components/Card";
import { checkboxAndTexts } from "@constants/store";
import { Flex } from "@styled-system/jsx";
import Checkbox from "wowds-ui/Checkbox";

const CheckboxAndTextCard = () => {
  return (
    <Card>
      <Flex gap="32px">
        {checkboxAndTexts.map(({ key, ...props }) => (
          <Checkbox key={key} {...props} />
        ))}
      </Flex>
    </Card>
  );
};

export default CheckboxAndTextCard;
