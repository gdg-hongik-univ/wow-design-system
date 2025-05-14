import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";

const ComponentTab = () => {
  return (
    <section>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <Text as="p" color="sub" typo="body1">
        진행 전, 중 , 후 3단계로 나누어 숫자칸을 설정했어요.
      </Text>
      <Space height={20} />
      <Card style={{ padding: "40px" }}>
        <Flex align="center" gap="xl">
          <styled.li
            className={stepperCircleStyle({
              status: "currentStep",
            })}
          >
            1
          </styled.li>
          <styled.li
            className={stepperCircleStyle({
              status: "default",
            })}
          >
            2
          </styled.li>
          <styled.li
            className={stepperCircleStyle({
              status: "checkedStep",
            })}
          >
            3
          </styled.li>
        </Flex>
      </Card>
      <Space height={40} />
    </section>
  );
};

export default ComponentTab;

const stepperCircleStyle = cva({
  base: {
    textStyle: "label2",
    alignItems: "center",
    borderRadius: "full",
    display: "flex",
    height: "1.5rem",
    justifyContent: "center",
    pointerEvents: "none",
    width: "1.5rem",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  variants: {
    status: {
      default: {
        borderWidth: "0.0625rem",
        borderColor: "outline",
        backgroundColor: "backgroundNormal",
        color: "sub",
      },
      checkedStep: {
        borderWidth: "0.0625rem",
        borderColor: "primary",
        color: "primary",
        backgroundColor: "backgroundNormal",
      },
      currentStep: {
        backgroundColor: "primary",
        color: "textWhite",
      },
    },
  },
});
