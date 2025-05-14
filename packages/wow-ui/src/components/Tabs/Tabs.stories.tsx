import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import type { TabsProps } from "@/components/Tabs";
import Tabs from "@/components/Tabs";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsItem from "@/components/Tabs/TabsItem";
import TabsList from "@/components/Tabs/TabsList";

const meta: Meta<TabsProps> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "탭을 통해 콘텐츠를 선택할 수 있는 컴포넌트입니다.",
    docs: {
      description: {
        component:
          "TabsList 로 TabsItem을 감싸서 탭 트리거를 관리하고 TabsContent 로 탭 콘텐츠를 관리합니다.",
      },
    },
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    children: {
      description: "TabsList,TabsItem,TabsContent 를 children 으로 받습니다.",
      table: {
        type: { summary: "ReactNode" },
        required: true,
      },
      control: false,
    },
    value: {
      description: "현재 선택된 탭의 값을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    defaultValue: {
      description: "초기 선택된 탭 값을 나타냅니다.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    onChange: {
      description: "탭 값이 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "(value: string) => void" },
      },
      action: "changed",
    },
    label: {
      description: "각 탭을 구분할 수 있는 레이블입니다.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    style: {
      description: "탭의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "탭에 전달하는 커스텀 클래스를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <TabsList>
          <TabsItem value="tab1">Tab 1</TabsItem>
          <TabsItem value="tab2">Tab 2</TabsItem>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
      </>
    ),
    defaultValue: "tab1",
  },
  parameters: {
    docs: {
      description: {
        story: "기본적인 탭 컴포넌트입니다. 탭 1과 탭 2가 제공됩니다.",
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    children: (
      <>
        <TabsList>
          <TabsItem value="tab1">Tab 1</TabsItem>
          <TabsItem value="tab2">Tab 2</TabsItem>
          <TabsItem value="tab3">Tab 3</TabsItem>
        </TabsList>
        <TabsContent value="tab1">Tab 1 Content</TabsContent>
        <TabsContent value="tab2">Tab 2 Content</TabsContent>
        <TabsContent value="tab3">Tab 3 Content</TabsContent>
      </>
    ),
    defaultValue: "tab2",
  },
  parameters: {
    docs: {
      description: {
        story:
          "초기 값으로 두 번째 탭이 선택된 상태로 시작하는 컴포넌트입니다.",
      },
    },
  },
};

const ControlledTabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <Tabs value={selectedTab} onChange={handleChange}>
      <TabsList>
        <TabsItem value="tab1">Tab 1</TabsItem>
        <TabsItem value="tab2">Tab 2</TabsItem>
        <TabsItem value="tab3">Tab 3</TabsItem>
      </TabsList>
      <TabsContent value="tab1">Tab 1 Content</TabsContent>
      <TabsContent value="tab2">Tab 2 Content</TabsContent>
      <TabsContent value="tab3">Tab 3 Content</TabsContent>
    </Tabs>
  );
};

export const ControlledValue: Story = {
  render: () => <ControlledTabsComponent />,
  parameters: {
    docs: {
      description: {
        story: "외부 상태에 따라 제어되는 탭 컴포넌트입니다.",
      },
    },
  },
};

export const ManyTabs: Story = {
  args: {
    children: (
      <>
        <TabsList>
          {Array.from({ length: 10 }, (_, index) => (
            <TabsItem key={index} value={`tab${index + 1}`}>
              Tab {index + 1}
            </TabsItem>
          ))}
        </TabsList>
        {Array.from({ length: 10 }, (_, index) => (
          <TabsContent key={index} value={`tab${index + 1}`}>
            Tab {index + 1} Content
          </TabsContent>
        ))}
      </>
    ),
    defaultValue: "tab1",
  },
  parameters: {
    docs: {
      description: {
        story: "여러 개의 탭을 가진 탭 컴포넌트입니다.",
      },
    },
  },
};
