import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Flex } from "@styled-system/jsx";
import Chip from "wowds-ui/Chip";

type ChipProps = {
  key: number;
  disabled?: boolean;
  ischecked?: boolean;
  "data-hover"?: boolean;
  "data-selected"?: boolean;
  "data-pressed"?: boolean;
};

const multiSelectChips: ChipProps[] = [
  { key: 1 },
  { key: 2, "data-selected": false, "data-hover": true },
  { key: 3, "data-pressed": true },
  { key: 4, disabled: true },
  { key: 5, ischecked: true },
  { key: 6, ischecked: true, "data-hover": true },
  { key: 7, ischecked: true, "data-pressed": true },
];

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Multi-Select
      </Text>
      <Text color="sub" typo="body1">
        여러 옵션을 선택/해제하는 액션에 이용해요.
      </Text>
      <Space height={20} />
      <Card>
        <Flex gap="sm" padding="20px">
          {multiSelectChips.map(({ key, ...props }) => (
            <Chip
              data-hover={props["data-hover"]}
              key={key}
              label="Chip"
              {...props}
            ></Chip>
          ))}
        </Flex>
      </Card>
      <Space height={80} />
    </>
  );
};

export default ComponentTab;
