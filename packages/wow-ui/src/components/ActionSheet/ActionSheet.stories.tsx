import type { Meta, StoryObj } from "@storybook/react";

import ActionSheet from "@/components/ActionSheet";
import Button from "@/components/Button";
import useOpenState from "@/hooks/useOpenState";

const meta = {
  title: "UI/ActionSheet",
  component: ActionSheet,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "액션시트 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof ActionSheet>;

export default meta;

export const Default = () => {
  const { open, onClose, onOpen } = useOpenState();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <ActionSheet isOpen={open} onClose={onClose}>
        <ActionSheet.Header subText="subtext" text="Text" />
        <ActionSheet.Footer>
          <Button style={{ minWidth: "100%" }}>Button</Button>
        </ActionSheet.Footer>
      </ActionSheet>
    </>
  );
};
