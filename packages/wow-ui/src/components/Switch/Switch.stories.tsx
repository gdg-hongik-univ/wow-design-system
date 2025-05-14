import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Switch from "@/components/Switch";

const meta = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "스위치 컴포넌트",
  },
  argTypes: {
    defaultChecked: {
      description: "스위치가 처음에 활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "스위치가 비활성화되어 있는지 여부를 나타냅니다.",
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
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "스위치 오른쪽에 들어갈 텍스트입니다.",
      table: {
        type: { summary: "string" },
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
      control: false,
      action: "changed",
    },
    onClick: {
      description: "스위치를 클릭했을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
      action: "clicked",
    },
    onKeyDown: {
      description:
        "스위치가 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
      action: "keydown",
    },
    onMouseEnter: {
      description: "마우스가 스위치 위로 진입할 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
      action: "mouseenter",
    },
    onMouseLeave: {
      description: "마우스가 스위치에서 벗어날 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      control: false,
      action: "mouseleave",
    },
    inputProps: {
      description:
        "스위치의 기본 input 요소에 전달할 추가 속성들을 나타냅니다.",
      table: {
        type: { summary: "InputHTMLAttributes<HTMLInputElement>" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    style: {
      description: "스위치의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "스위치에 전달하는 커스텀 클래스를 설정합니다.",
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
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "switch",
    onChange: undefined,
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    value: "switch",
    onChange: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "switch",
  },
};

export const WithText: Story = {
  args: {
    label: "Label",
    value: "switch",
    onChange: undefined,
  },
};

const ControlledSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return <Switch checked={checked} value="switch" onChange={handleChange} />;
};

export const ControlledState: Story = {
  render: () => <ControlledSwitch />,
  args: {
    value: "switch",
  },
};
