import type { Meta } from "@storybook/react";

import ActionSheet from "@/components/ActionSheet";
import Box from "@/components/Box";
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
  argTypes: {
    isOpen: {
      description: "액션시트의 표시 여부를 설정합니다.",
      control: {
        type: "boolean",
      },
    },
    onClose: {
      description: "액션시트를 닫는 함수입니다.",
      control: false,
    },
    style: {
      description: "액션시트의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: false,
    },
    className: {
      description: "액션시트에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
  },
} satisfies Meta<typeof ActionSheet>;

export default meta;

export const Default = () => {
  const { onClose } = useOpenState();

  return (
    <ActionSheet isOpen={true} onClose={onClose}>
      <ActionSheet.Header
        style={{ paddingBottom: "1rem" }}
        subText="subtext"
        text="Text"
      />
      <ActionSheet.Footer>
        <Button style={{ minWidth: "100%" }}>Button</Button>
      </ActionSheet.Footer>
    </ActionSheet>
  );
};

export const Controlled = () => {
  const { open, onClose, onOpen } = useOpenState();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <ActionSheet isOpen={open} onClose={onClose}>
        <ActionSheet.Header subText="subtext" text="Text" />
        <ActionSheet.Body gap="md" paddingY="md">
          <Box text="Box" />
          <Box text="Box" />
        </ActionSheet.Body>
        <ActionSheet.Footer gap="md">
          <Button variant="outline">Button</Button>
          <Button>Button</Button>
        </ActionSheet.Footer>
      </ActionSheet>
    </>
  );
};
