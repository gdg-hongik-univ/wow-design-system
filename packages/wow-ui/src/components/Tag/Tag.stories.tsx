import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/components/Tag";

const meta = {
  title: "UI/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "태그 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    children: {
      description: "태그의 자식 요소.",
      table: {
        type: { summary: "ReactNode" },
        required: true,
      },
      control: {
        type: "text",
      },
    },
    variant: {
      description: "태그의 종류를 나타냅니다.",
      table: {
        type: { summary: "outline | solid1 | solid2" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "solid1", "solid2"],
      control: {
        type: "radio",
      },
    },
    color: {
      description: "태그의 색상을 나타냅니다.",
      table: {
        type: { summary: "red | blue | green | yellow | grey" },
      },
      options: ["red", "blue", "green", "yellow", "grey"],
      control: {
        type: "radio",
      },
    },
    style: {
      description: "태그의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
      },
      control: { type: "object" },
    },
    className: {
      description: "태그에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    ref: {
      description: "렌더링된 요소 또는 컴포넌트에 연결할 ref를 나타냅니다.",
      table: {
        type: { summary: 'ComponentPropsWithRef<T>["ref"]' },
      },
      control: false,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    children: "Tag",
    variant: "outline",
    color: "blue",
  },
};

export const Solid1: Story = {
  args: {
    children: "Tag",
    variant: "solid1",
    color: "blue",
  },
};

export const Solid2: Story = {
  args: {
    children: "Tag",
    variant: "solid2",
    color: "blue",
  },
};
