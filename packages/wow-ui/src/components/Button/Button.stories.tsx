import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import { Help } from "wowds-icons";

import Button from "@/components/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    children: {
      description: "버튼의 자식 요소를 나타냅니다.",
      table: {
        type: { summary: "ReactNode" },
        required: true,
      },
      control: false,
    },
    label: {
      description: "버튼의 라벨을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    asProp: {
      description: "버튼을 구성할 HTML 태그의 종류를 나타냅니다.",
      table: {
        type: { summary: "ElementType" },
      },
      control: false,
    },
    disabled: {
      description: "버튼이 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "버튼의 크기를 나타냅니다.",
      table: {
        type: { summary: "lg | sm" },
        defaultValue: { summary: "lg" },
      },
      options: ["lg", "sm"],
      control: {
        type: "radio",
      },
    },
    variant: {
      description: "버튼의 종류를 나타냅니다.",
      table: {
        type: { summary: "solid | outline" },
        defaultValue: { summary: "solid" },
      },
      options: ["solid", "outline"],
      control: {
        type: "radio",
      },
    },
    subText: {
      description: "버튼의 서브 텍스트를 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    icon: {
      description: "버튼에 표시할 아이콘을 나타냅니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    style: {
      description: "버튼의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
      },
      control: { type: "object" },
    },
    className: {
      description: "버튼에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "버튼",
  },
};

export const LargeSolidButton: Story = {
  args: {
    children: "버튼",
    variant: "solid",
  },
};

export const LargeOutlineButton: Story = {
  args: {
    children: "버튼",
    variant: "outline",
  },
};

export const SmallSolidButton: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "solid",
  },
};

export const SmallOutlineButton: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "outline",
  },
};

export const SmallSubButton: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "sub",
  },
};

export const LargeButtonWithIcon: Story = {
  args: {
    children: "버튼",
    variant: "solid",
    icon: <Help />,
  },
};

export const SmallButtonWithIcon: Story = {
  args: {
    children: "버튼",
    size: "sm",
    variant: "solid",
    icon: <Help />,
  },
};

export const LargeButtonWithSubText: Story = {
  args: {
    children: "버튼",
    variant: "solid",
    subText: "최종 수정 일시 : 2024년 5월 23일 23:11",
    icon: <Help />,
  },
};

export const LinkButton: Story = {
  args: {
    children: "버튼",
    asProp: Link,
    href: "/",
  },
};

export const DisabledButton: Story = {
  args: {
    children: "버튼",
    disabled: true,
  },
};
