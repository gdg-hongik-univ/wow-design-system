import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "@/components/Button";
import Pagination from "@/components/Pagination";

const meta = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "페이지네이션 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    totalPages: {
      description: "페이지의 총 개수입니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "number",
      },
    },
    currentPage: {
      description: "외부에서 주입할 수 있는 현재 페이지입니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "number",
      },
    },
    defaultPage: {
      description: "기본 페이지입니다.",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "number",
      },
    },
    onChange: {
      description: "외부에서 페이지 값의 변화를 감지할 수 있는 함수입니다.",
      table: {
        type: { summary: "(page: number) => void" },
      },
      action: "changed",
    },
    pageButtonBackgroundColor: {
      description: "페이지네이션 컴포넌트 버튼 색을 변경합니다.",
      table: {
        type: { summary: "ColorToken" },
      },
      control: { type: "radio" },
      options: ["textBlack", "primary", "red.400"],
    },
    style: {
      description:
        "페이지네이션의 커스텀 스타일을 설정합니다. 배경색 등을 변경할 수 있습니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "페이지네이션에 전달하는 커스텀 클래스를 설정합니다.",
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
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    totalPages: 13,
  },
};

export const DefaultPage: Story = {
  args: {
    totalPages: 13,
    defaultPage: 6,
  },
};

export const ChangeBackgroundColorPage: Story = {
  args: {
    totalPages: 15,
    pageButtonBackgroundColor: "red50",
  },
};

const ControlledPagination = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handleSelectionChange = () => {
    if (selectedPage >= 15) {
      setSelectedPage(15);
    } else setSelectedPage(selectedPage + 3);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Button onClick={() => handleSelectionChange()}>
        3페이지씩 건너뛰기
      </Button>
      <Pagination currentPage={selectedPage} totalPages={15} />
    </div>
  );
};

export const ControlledState: Story = {
  args: { totalPages: 15 },
  render: () => <ControlledPagination />,
};

const WatchPageStatePagination = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handleSelectionChange = (page: number) => {
    setSelectedPage(page);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Pagination totalPages={15} onChange={handleSelectionChange} />
      <div>선택된 페이지는 {selectedPage}입니다 </div>
    </div>
  );
};

export const WatchPageState: Story = {
  args: { totalPages: 15 },
  render: () => <WatchPageStatePagination />,
};
