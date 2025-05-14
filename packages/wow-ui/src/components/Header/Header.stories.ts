import type { Meta, StoryObj } from "@storybook/react";

import Header from "@/components/Header";

const meta = {
  title: "UI/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "헤더 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["username", "login", "none"],
      table: {
        type: { summary: "username | login | none" },
      },
      description:
        '헤더 종류를 나타냅니다. variant가 "username"인 경우 오른쪽에 사용자 이름을, "login"인 경우 로그인 버튼을, "none"인 경우 아무것도 표시하지 않습니다.',
    },
    username: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
      description:
        'variant가 "username"인 경우 표시되는 오른쪽 요소입니다. 사용자가 로그인한 경우 사용자 이름을 표시합니다.',
    },
    onClick: {
      action: "clicked",
      control: false,
      table: {
        type: { summary: "function" },
      },
      description:
        'variant가 "login"인 경우 전달할 수 있습니다. 로그인 버튼 클릭 시 호출되는 함수입니다.',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {},
};

export const Login: StoryObj<typeof Header> = {
  args: {
    variant: "login",
  },
};

export const Username: StoryObj<typeof Header> = {
  args: {
    variant: "username",
    username: "김홍익",
  },
};
