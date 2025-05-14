import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Checkbox from "@/components/Checkbox";

const meta = {
  title: "UI/CheckBox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "체크박스 컴포넌트",
  },
  argTypes: {
    value: {
      description: "체크박스의 값을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    defaultChecked: {
      description:
        "defaultChecked는 체크박스가 활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "체크박스가 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    checked: {
      description: "외부에서 제어할 활성 상태를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "체크박스 오른쪽이나 위쪽에 들어갈 텍스트입니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onChange",
    },
    onClick: {
      description: "체크박스 클릭 시 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onClick",
    },
    onKeyDown: {
      description:
        "체크박스에 포커스 됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onKeyDown",
    },
    onMouseEnter: {
      description: "마우스가 체크박스 위로 진입할 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onMouseEnter",
    },
    onMouseLeave: {
      description: "마우스가 체크박스에서 벗어날 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onMouseLeave",
    },
    position: {
      description:
        "체크박스와 텍스트의 배치를 설정합니다. 'vertical' 또는 'horizontal' 값을 가집니다.",
      table: {
        type: { summary: '"vertical" | "horizontal"' },
        defaultValue: { summary: "horizontal" },
      },
      options: ["vertical", "horizontal"],
      control: {
        type: "radio",
      },
    },
    inputProps: {
      description:
        "체크박스의 기본 input 요소에 전달할 추가 속성들을 나타냅니다.",
      table: {
        type: { summary: "InputHTMLAttributes<HTMLInputElement>" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    style: {
      description: "체크박스의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "체크박스에 전달하는 커스텀 클래스를 설정합니다.",
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
    value: "checkbox",
    onChange: undefined,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    value: "checkbox",
    onChange: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "checkbox",
  },
};

export const Vertical: Story = {
  args: {
    checked: true,
    label: "string",
    position: "vertical",
    value: "checkbox",
  },
};

export const Horizontal: Story = {
  args: {
    checked: true,
    label: "string",
    position: "horizontal",
    value: "checkbox",
  },
};

const ControlledCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Checkbox checked={isChecked} value="checkbox" onChange={handleChange} />
  );
};

export const ControlledState: Story = {
  render: () => <ControlledCheckBox />,
  args: {
    value: "checkbox",
  },
};
