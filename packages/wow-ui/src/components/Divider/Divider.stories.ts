import type { Meta, StoryObj } from "@storybook/react";

import Divider from "@/components/Divider";

const meta = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "디바이더 컴포넌트",
  },
  argTypes: {
    type: {
      description: "라이트모드, 다크모드에 따라 디바이더의 색상이 달라집니다.",
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: "light" },
      },
      control: {
        type: "radio",
        options: ["light", "dark"],
      },
    },
    style: {
      description: "디바이더의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "디바이더에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {
    type: "dark",
  },
};
