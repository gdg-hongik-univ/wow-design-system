import type { Meta, StoryObj } from "@storybook/react";
import { Flex, styled } from "@styled-system/jsx";
import { useState } from "react";

import Box from "@/components/Box";
const meta = {
  title: "UI/Box",
  component: Box,
  parameters: {
    componentSubtitle: "박스 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    leftElement: {
      description: "박스의 왼쪽에 넣을 리액트 요소를 입력합니다.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "text",
      },
    },
    variant: {
      description: "박스의 타입을 설정합니다.",
      options: ["text", "checkbox", "arrow", "warn"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "text" },
        type: {
          summary: "text | checkbox | arrow | warn",
        },
      },
    },
    disabled: {
      description: "박스가 활성 상태인지를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    text: {
      description: "박스에 메인으로 표기할 텍스트를 입력합니다.",
      table: {
        type: { summary: "ReactNode" },
      },
      control: {
        type: "text",
      },
    },
    textColor: {
      description: "박스에 메인으로 표기할 텍스트의 색상을 변경합니다.",
      table: {
        type: { summary: "ColorToken" },
        defaultValue: { summary: "{}" },
      },
      control: { type: "radio" },
      options: ["textBlack", "primary", "red.400"],
    },
    subText: {
      description: "박스에 서브로 표기할 텍스트를 입력합니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: {
        type: "text",
      },
    },
    subTextColor: {
      description: "박스에 서브로 표기할 텍스트의 색상을 변경합니다.",
      table: {
        type: { summary: "ColorToken" },
        defaultValue: { summary: "{}" },
      },
      control: { type: "radio" },
      options: ["textBlack", "primary", "red.400"],
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
    status: {
      description: "박스의 상태를 설정합니다.",
      options: ["default", "success", "error"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: "default | success | error",
        },
      },
    },
    onClick: {
      description: "arrow 타입의 박스를 클릭했을 때 호출되는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
    },
    onChange: {
      description: "checkbox 타입의 박스를 클릭했을 대 호출하는 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
    },
    style: {
      description: "박스의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: { type: "object" },
    },
    className: {
      description: "박스에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "text",
    text: "Text",
    subText: "Subtext",
  },
};

export const CheckBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    variant: "checkbox",
    onChange: () => {
      console.log("체크");
    },
  },
};

export const ArrowBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    variant: "arrow",
    onClick: () => {
      console.log("클릭 이벤트 발생");
    },
  },
};

export const LongBox: Story = {
  args: {
    text: "Q. 서류, 면접 전형이 있나요?",
    subText:
      "없습니다! 홍익대학교 학생이라면 누구나 본 사이트의 '지원하기'를 통해 가입할 수 있어요.",
  },
};

export const SuccessBox: Story = {
  args: {
    text: "Text",
    subText: "Subtext",
    variant: "checkbox",
    onChange: () => {
      console.log("체크");
    },
  },
};

export const LeftElementBox: Story = {
  args: {
    text: "GDSC Hongik Discord",
    subText: "디스코드 연동이 필요해요.",
    textColor: "discord",
    status: "error",
    variant: "arrow",
    onClick: () => {
      console.log("클릭");
    },
    leftElement: (
      <img
        alt="discord"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-color-icon.svg"
        width={50}
      />
    ),
  },
};

export const WarnBox: Story = {
  args: {
    text: "2024년 1학기 1차 정회원 지원 중이에요.",
    subText: "정회원 가입 조건을 완료해주세요.",
    status: "error",
    variant: "warn",
  },
};

export const TextReactElementBox: Story = {
  args: {
    text: (
      <Flex direction="column" gap="sm">
        <Flex align="center" direction="row" gap="xs">
          <styled.span color="GrayText" textStyle="h3">
            학번
          </styled.span>
          <styled.span color="textBlack">C000000</styled.span>
        </Flex>
        <Flex align="center" direction="row" gap="xs">
          <styled.span color="GrayText" textStyle="h3">
            학과
          </styled.span>
          <styled.span color="textBlack">컴퓨터공학과</styled.span>
        </Flex>
        <Flex align="center" direction="row" gap="xs">
          <styled.span color="GrayText" textStyle="h3">
            전화번호
          </styled.span>
          <styled.span color="textBlack">01000000000</styled.span>
        </Flex>
        <Flex align="center" direction="row" gap="xs">
          <styled.span color="GrayText" textStyle="h3">
            이메일
          </styled.span>
          <styled.span color="textBlack">000@GMAIL.COM</styled.span>
        </Flex>
      </Flex>
    ),
  },
};

const ControlledBox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      checked={checked}
      subText="checkBox controlled by checked"
      text="CheckBox Test"
      variant="checkbox"
      onChange={handleChange}
    />
  );
};

export const ControlledState: Story = {
  args: {
    text: "CheckBox Test",
  },
  render: () => <ControlledBox />,
};
