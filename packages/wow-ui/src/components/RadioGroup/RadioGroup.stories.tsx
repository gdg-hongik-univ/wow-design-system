import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import RadioButton from "@/components/RadioGroup/RadioButton";
import type { RadioGroupProps } from "@/components/RadioGroup/RadioGroup";
import RadioGroup from "@/components/RadioGroup/RadioGroup";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "라디오 그룹 컴포넌트",
    docs: {
      description: {
        component: "children 에 RadioButton 컴포넌트를 넣어서 사용합니다.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: "라디오 그룹의 초기 선택값을 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
    name: {
      description: "라디오 그룹의 이름을 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
    children: {
      description: "RadioButton들을 children 으로 받습니다.",
      table: {
        type: { summary: "RadioButton" },
        defaultValue: {
          summary: undefined,
        },
      },
      type: {
        name: "function",
        required: true,
      },
    },
    disabled: {
      description: "라디오 그룹이 비활성화되어 있는지 여부를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    value: {
      description: "외부에서 제어할 활성된 라디오 버튼의 값을 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출될 콜백 함수를 나타냅니다.",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
        defaultValue: { summary: undefined },
      },
      action: "onChange",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Default: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: "1학년",
    name: "defaultgrade",
    children: (
      <>
        <RadioButton label="1학년" value="1학년" />
        <RadioButton label="2학년" value="2학년" />
        <RadioButton label="3학년" value="3학년" />
        <RadioButton disabled label="4학년" value="4학년" />
      </>
    ),
  },
};

export const ReadOnly: StoryObj<RadioGroupProps> = {
  args: {
    disabled: true,
    defaultValue: "2학년",
    name: "readonlygrade",
    children: (
      <>
        <RadioButton label="1학년" value="1학년" />
        <RadioButton label="2학년" value="2학년" />
        <RadioButton label="3학년" value="3학년" />
        <RadioButton label="4학년" value="4학년" />
      </>
    ),
  },
};

export const Controlled = () => {
  const [value, setState] = useState("1학년");

  return (
    <RadioGroup
      defaultValue="1학년"
      name="conotrolledgrade"
      value={value}
      onChange={(e) => setState(e.target.value)}
    >
      <RadioButton label="1학년" value="1학년" />
      <RadioButton label="2학년" value="2학년" />
      <RadioButton label="3학년" value="3학년" />
      <RadioButton disabled label="4학년" value="4학년" />
    </RadioGroup>
  );
};
