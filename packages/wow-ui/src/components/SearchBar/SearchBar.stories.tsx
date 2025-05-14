import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import SearchBar from "@/components/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "UI/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "서치바 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    placeholder: {
      description: "서치바에 표시할 플레이스홀더 텍스트입니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    defaultValue: {
      description: "서치바에 기본으로 입력될 값을 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    value: {
      description: "외부에서 값을 제어할 때 사용하는 속성입니다.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    maxLength: {
      description: "입력할 수 있는 최대 글자 수를 설정합니다.",
      table: {
        type: { summary: "number" },
      },
      control: { type: "number" },
    },
    onChange: {
      description: "값이 변경될 때 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "(value: string) => void" },
      },
      action: "changed",
    },
    onBlur: {
      description: "서치바가 포커스를 잃을 때 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "blurred",
    },
    onFocus: {
      description: "서치바가 포커스를 얻었을 때 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
      action: "focused",
    },
    disabled: {
      description: "서치바를 비활성화할 수 있습니다.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    style: {
      description: "드롭다운의 커스텀 스타일을 설정할 수 있습니다.",
      table: {
        type: { summary: "CSSProperties" },
      },
      control: "object",
    },
    className: {
      description: "드롭다운 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    ref: {
      description: "렌더링된 요소 또는 컴포넌트에 연결할 ref를 나타냅니다.",
      table: {
        type: { summary: 'ComponentPropsWithRef<T>["ref"]' },
      },
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    defaultValue: "",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 서치바.",
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    defaultValue: "안녕하세요!",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 값이 설정된 서치바.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    defaultValue: "",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "비활성화된 서치바.",
      },
    },
  },
};

const ControlledSearchBar = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <SearchBar
      placeholder="제어된 검색어를 입력하세요"
      value={value}
      onChange={handleChange}
    />
  );
};

export const ControlledValue: Story = {
  render: () => <ControlledSearchBar />,
  parameters: {
    docs: {
      description: {
        story: "외부에서 값이 제어되는 서치바.",
      },
    },
  },
};

export const WithMaxLength: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    maxLength: 10,
  },
  parameters: {
    docs: {
      description: {
        story: "최대 입력 길이가 설정된 서치바.",
      },
    },
  },
};
