import type { Meta, StoryObj } from "@storybook/react";

import BlueSpinner from "@/components/Spinner/BlueSpinner";

const meta = {
  title: "UI/BlueSpinner",
  component: BlueSpinner,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "블루 스피너 컴포넌트",
  },
  argTypes: {
    width: {
      description: "스피너의 너비를 나타냅니다.",
      table: {
        type: { summary: "CSSProperties['width']" },
        defaultValue: { summary: "223px" },
      },
      control: {
        type: "text",
      },
    },
    height: {
      description: "스피너의 높이를 나타냅니다.",
      table: {
        type: { summary: "CSSProperties['height']" },
        defaultValue: { summary: "200px" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof BlueSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomSize: Story = {
  args: {
    width: "446px",
    height: "400px",
  },
};
