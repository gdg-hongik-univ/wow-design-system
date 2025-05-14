import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import TextField from "@/components/TextField";

const meta = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "텍스트필드 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    label: {
      description: "텍스트필드의 라벨입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "텍스트필드의 플레이스홀더 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    defaultValue: {
      description: "텍스트필드의 기본 값입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    value: {
      description: "외부에서 제어할 활성 상태입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    maxLength: {
      description: "텍스트필드의 최대 입력 길이입니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "number",
      },
    },
    error: {
      description: "텍스트필드의 오류 상태 여부입니다.",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
    success: {
      description: "텍스트필드의 성공 상태 여부입니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    helperText: {
      description: "텍스트필드 아래 추가적인 텍스트입니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: false,
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출될 콜백 함수입니다.",
      table: {
        type: { summary: "(value: string) => void" },
      },
      action: "onChange",
    },
    onBlur: {
      description: "텍스트필드가 포커스를 잃을 때 호출될 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onBlur",
    },
    onFocus: {
      description: "텍스트필드가 포커스됐을 때 호출될 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "onFocus",
    },
    textareaProps: {
      description: "텍스트필드에 전달할 추가 textarea 속성입니다.",
      table: {
        type: { summary: "TextareaHTMLAttributes<HTMLTextAreaElement>" },
      },
      control: false,
    },
    style: {
      description: "텍스트필드의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
      },
      control: { type: "object" },
    },
    className: {
      description: "텍스트필드에 전달하는 커스텀 클래스를 설정합니다.",
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
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
  },
};

export const WithMaxLength: Story = {
  args: {
    label: "Label",
    maxLength: 10,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Label",
    placeholder:
      "PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Label",
    defaultValue: "Text",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Label",
    helperText: "*Caption",
  },
};

export const WithMaxLengthAndHelperText: Story = {
  args: {
    label: "Label",
    maxLength: 100,
    helperText: "*Caption",
  },
};

export const Success: Story = {
  args: {
    label: "Label",
    maxLength: 100,
    helperText: "*Caption",
    success: true,
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    maxLength: 100,
    helperText: "*Caption",
    error: true,
  },
};

const ControlledTextField = () => {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return <TextField label="Label" value={value} onChange={handleChange} />;
};

export const ControlledState: Story = {
  render: () => <ControlledTextField />,
  args: {
    label: "Label",
  },
};
