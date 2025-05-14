import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "@/components/Avatar/index.tsx";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle: "아바타 컴포넌트",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "lg"],
      description: "아바타의 크기입니다.",
      table: {
        defaultValue: { summary: "lg" },
        type: {
          summary: "sm | lg",
        },
      },
    },
    variant: {
      control: { type: "radio" },
      options: ["blue", "green", "yellow", "red"],
      description: "아바타의 색상입니다.",
      table: {
        defaultValue: { summary: "blue" },
        type: {
          summary: "blue | green | yellow | red",
        },
      },
    },
    ImageComponent: {
      control: false,
      description: "아바타에 표시할 이미지 컴포넌트입니다.",
      table: {
        type: { summary: "ElementType" },
      },
    },
    imageUrl: {
      control: { type: "text" },
      description: "아바타에 표시할 이미지의 URL입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    username: {
      control: { type: "text" },
      description: "아바타 옆에 표시할 사용자 이름입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    orientation: {
      control: { type: "radio" },
      options: ["left", "right"],
      description:
        "사용자 이름 레이블의 방향입니다. size가 'sm'인 경우 지정할 수 있습니다.",
      table: {
        defaultValue: { summary: "right" },
        type: { summary: "left | right" },
      },
    },
    asProp: {
      control: false,
      description: "렌더링할 HTML 요소나 React 컴포넌트입니다.",
      table: {
        defaultValue: { summary: "div" },
        type: { summary: "React.ElementType" },
      },
    },
    ref: {
      description: "렌더링된 요소 또는 컴포넌트에 연결할 ref를 나타냅니다.",
      table: {
        type: { summary: 'ComponentPropsWithRef<T>["ref"]' },
      },
      control: false,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: "https://i.ibb.co/2hz6hNP/2024-06-06-11-52-22.png",
  },
};

export const LargeWithUsername: Story = {
  args: {
    username: "김홍익 님",
  },
};

export const SmallWithUsernameOrientationLeft: Story = {
  args: {
    username: "김홍익 님",
    size: "sm",
    orientation: "left",
  },
};

export const SmallWithUsernameOrientationRight: Story = {
  args: {
    username: "김홍익 님",
    size: "sm",
  },
};
