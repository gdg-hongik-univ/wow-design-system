import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

import Button from "@/components/Button";

import Toast from ".";
import ToastProvider from "./ToastProvider";
import useToast from "./useToast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Toast 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
    docs: {
      description: {
        component:
          "토스트가 필요한 레이아웃에서 children을 ToastProvider로 감싸 사용합니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    text: {
      description: "Toast에 들어갈 메인 텍스트를 나타냅니다.",
      control: { type: "text" },
    },
    subText: {
      description: "Toast에 들어갈 보조 텍스트를 나타냅니다.",
      control: { type: "text" },
    },
    rightIcon: {
      description: "Toast의 우측에 들어갈 아이콘을 나타냅니다.",
      table: {
        type: { summary: "none | close | arrow" },
        defaultValue: { summary: "none" },
      },
      control: "radio",
      options: ["none", "close", "arrow"],
    },
    id: {
      description: "Toast 컴포넌트의 id를 나타냅니다.",
      control: { type: "text" },
    },
    onClickArrowIcon: {
      description:
        "Toast 컴포넌트의 화살표 아이콘을 클릭했을 때 호출되는 함수를 나타냅니다.",
      control: false,
    },
    onRemove: {
      description: "Toast 컴포넌트가 닫힌 이후 호출되는 함수를 나타냅니다.",
      control: false,
    },
    showLeftIcon: {
      description: "Toast 좌측에 들어갈 아이콘의 노출 여부를 나타냅니다.",
      control: "boolean",
    },
    toastDuration: {
      description: "Toast가 보여지는 시간(ms)을 나타냅니다.",
      control: { type: "number" },
    },
    style: {
      description: "Toast에 커스텀 스타일을 설정합니다.",
      control: { type: "object" },
    },
    className: {
      description: "Toast에 커스텀 클래스를 설정합니다.",
      control: { type: "text" },
    },
    ref: {
      description: "렌더링된 요소 또는 컴포넌트에 연결할 ref를 나타냅니다.",
      table: {
        type: { summary: 'ComponentPropsWithRef<T>["ref"]' },
      },
      control: false,
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "1",
    text: "Text",
    subText: "subtext",
    toastDuration: 60 * 60 * 1000,
  },
};

export const WithTrigger = () => {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({ text: "Text", subText: "subtext" })}>
      토스트 열기
    </Button>
  );
};

export const WithCloseIcon = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      rightIcon: "close",
    });
  }, []);
};

export const WithArrowIcon = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      rightIcon: "arrow",
    });
  }, []);
};

export const WithLeftIcon = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      showLeftIcon: true,
    });
  }, []);
};

export const WithLeftAndArrowIcons = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      showLeftIcon: true,
      rightIcon: "arrow",
    });
  }, []);
};

export const TwoLines = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      showLeftIcon: true,
      text: "TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText",
    });
  }, []);
};

export const Slow = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      text: "Text",
      subText: "subtext",
      toastDuration: 5000,
    });
  }, []);
};
