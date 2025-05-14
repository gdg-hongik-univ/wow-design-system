import type { Meta, StoryObj } from "@storybook/react";

import Chip from "@/components/Chip";

const meta = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "칩 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    disabled: {
      description: "disabled는 칩 버튼이 비활성화 상태인지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    defaultChecked: {
      description:
        "defaultChecked는 칩 버튼이 처음에 눌려 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    ischecked: {
      description: "isChecked는 외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    clickable: {
      description: "Toggle이 가능한 칩인지에 대한 여부를 확인합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "칩에 들어가게 될 텍스트입니다.",
      table: {
        type: { summary: "string" },
        required: true,
      },
      control: {
        type: "text",
      },
    },
    onClick: {
      description: "칩 클릭 시 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onClick",
    },
    onDelete: {
      description: "칩에 대한 필터를 제거하기 위한 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onDelete",
    },
    onKeyDown: {
      description:
        "칩이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onKeyDown",
    },
    style: {
      description: "칩의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "칩에 전달하는 커스텀 클래스를 설정합니다.",
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
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Chip",
    asProp: "button",
    clickable: true,
  },
};

export const DivChip: Story = {
  args: {
    label: "Chip",
    clickable: false,
    asProp: "div",
  },
};
export const DisabledChip: Story = {
  args: {
    label: "Chip",
    clickable: true,
    disabled: true,
    asProp: "button",
  },
};

export const NonClickable: Story = {
  args: {
    label: "Chip",
    clickable: false,
  },
};
