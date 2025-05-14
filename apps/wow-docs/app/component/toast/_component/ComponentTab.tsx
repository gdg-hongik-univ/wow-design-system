import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { Grid } from "@styled-system/jsx";
import type { ToastProps } from "wowds-ui/Toast";
import Toast from "wowds-ui/Toast";

const baseToast = {
  subText: "Subtext",
  text: "Text",
  style: { transition: "none !important" },
};

const toasts: ToastProps[] = [
  {
    id: "1",
    ...baseToast,
  },
  {
    id: "2",
    showLeftIcon: true,
    ...baseToast,
  },
  {
    id: "3",
    rightIcon: "close",
    ...baseToast,
  },
  {
    id: "4",
    rightIcon: "close",
    showLeftIcon: true,
    ...baseToast,
  },
  {
    id: "5",
    rightIcon: "arrow",
    ...baseToast,
  },
  {
    id: "6",
    rightIcon: "arrow",
    showLeftIcon: true,
    ...baseToast,
  },
];

const ComponentTab = () => {
  return (
    <>
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />

      <Card>
        <Grid columnGap={20} gridTemplateColumns="repeat(2, 1fr)" rowGap={32}>
          {toasts.map(({ id, ...props }) => (
            <Toast id={id} key={id} {...props} />
          ))}
        </Grid>
      </Card>
      <Space height={40} />
    </>
  );
};

export default ComponentTab;
