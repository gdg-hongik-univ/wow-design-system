import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "@styled-system/jsx";
import { useState } from "react";

import Button from "@/components/Button";
import Table from "@/components/Table/Table";

const meta = {
  title: "UI/Table",
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "테이블 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
    docs: {
      description: {
        component:
          "Thead와 Th 로 테이블 헤더를 구성합니다. Tbody, Tr,Td 로 테이블 컨텐츠를 구성합니다.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Thead, Tbody, Tr, Th, Td를 children 으로 받습니다.",
      table: {
        type: { summary: "ReactNode" },
        required: true,
      },
      control: false,
    },
    tableCaption: {
      description: "테이블에 대한 설명을 나타내는 캡션입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "text",
      },
    },
    showCheckbox: {
      description: "테이블에 체크박스를 나타냅니다.",
      table: {
        type: { summary: "boolean" },
      },
      control: {
        type: "boolean",
      },
    },
    selectedRowsProp: {
      description:
        "default 값을 설정하거나, 외부에서 table의 체크 상태 관리할 수 있는 변수입니다.",
      table: {
        type: { summary: "number[]" },
      },
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "외부 활성 상태가 변경될 때 호출되는 함수입니다.",
      table: {
        type: { summary: "(selectedRows: number[]) => void" },
      },
      action: "changed",
    },

    fullWidth: {
      description: "테이블 컴포넌트의 가로 길이를 결정할 수 있습니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    style: {
      description: "테이블의 커스텀 스타일을 설정합니다.",
      table: {
        type: { summary: "CSSProperties" },
        defaultValue: { summary: "{}" },
      },
      control: {
        type: "object",
      },
    },
    className: {
      description: "테이블 컴포넌트에 전달할 커스텀 클래스를 설정합니다.",
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
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const data = [
      { id: 1, name: "김유진", studyId: "C035087", birth: "2000" },
      { id: 2, name: "강해린", studyId: "C011111", birth: "2006" },
      { id: 3, name: "김민지", studyId: "C234567", birth: "2004" },
    ];
    return (
      <Table>
        <Table.Thead>
          <Table.Th>이름</Table.Th>
          <Table.Th>학번</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {data.map(({ name, studyId, id }) => {
            return (
              <Table.Tr key={id}>
                <Table.Td>{name}</Table.Td>
                <Table.Td>{studyId}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    );
  },
};

export const ScrollTable: Story = {
  render: () => {
    const data = [
      {
        id: 1,
        name: "김유진",
        studyId: "C035087",
        birth: "2000",
        discordname: "eugene028",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
      {
        id: 2,
        name: "강해린",
        discordname: "haerin111",
        studyId: "C011111",
        birth: "2006",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
      {
        id: 3,
        name: "김민지",
        studyId: "C234567",
        discordname: "minijjang",
        birth: "2004",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
    ];
    return (
      <Table fullWidth={true} style={{ maxWidth: "300px", maxHeight: "150px" }}>
        <Table.Thead>
          <Table.Th>이름</Table.Th>
          <Table.Th>학번</Table.Th>
          <Table.Th>버튼</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {data.map(({ name, studyId, button, id }) => {
            return (
              <Table.Tr key={id} value={id}>
                <Table.Td>{name}</Table.Td>
                <Table.Td>{studyId}</Table.Td>
                <Table.Td>{button}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    );
  },
};

export const CheckableTable: Story = {
  render: () => {
    const data = [
      {
        id: 1,
        name: "김유진",
        studyId: "C035087",
        birth: "2000",
        discordname: "eugene028",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
      {
        id: 2,
        name: "강해린",
        discordname: "haerin111",
        studyId: "C011111",
        birth: "2006",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
      {
        id: 3,
        name: "김민지",
        studyId: "C234567",
        discordname: "minijjang",
        birth: "2004",
        button: (
          <styled.div alignItems="center" display="flex" gap="8px">
            <Button size="sm" variant="outline">
              삭제
            </Button>
            <Button size="sm">등록</Button>
          </styled.div>
        ),
      },
    ];
    return (
      <Table showCheckbox={true}>
        <Table.Thead>
          <Table.Th>이름</Table.Th>
          <Table.Th>학번</Table.Th>
          <Table.Th>버튼</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {data.map(({ name, studyId, button, id }) => {
            return (
              <Table.Tr key={id} value={id}>
                <Table.Td>{name}</Table.Td>
                <Table.Td>{studyId}</Table.Td>
                <Table.Td>{button}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    );
  },
};

const ControlledTable = () => {
  const selectedProps = [2, 3];
  const [selectedRows, setSelectedRows] = useState<number[]>(selectedProps);
  const data = [
    {
      id: 1,
      name: "김유진",
      studyId: "C035087",
      birth: "2000",
      discordname: "eugene028",
    },
    {
      id: 2,
      name: "강해린",
      discordname: "haerin111",
      studyId: "C011111",
      birth: "2006",
    },
    {
      id: 3,
      name: "김민지",
      studyId: "C234567",
      discordname: "minijjang",
      birth: "2004",
    },
  ];
  const handleSelectionChange = (rows: number[]) => {
    setSelectedRows(rows);
  };
  return (
    <>
      <Button
        size="sm"
        style={{ marginBottom: "20px" }}
        onClick={() => {
          setSelectedRows([]);
        }}
      >
        선택한 테이블 요소 모두 초기화
      </Button>
      <Table
        selectedRowsProp={selectedRows}
        showCheckbox={true}
        onChange={handleSelectionChange}
      >
        <Table.Thead>
          <Table.Th>이름</Table.Th>
          <Table.Th>학번</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          {data.map(({ name, studyId, id }) => {
            return (
              <Table.Tr key={id} value={id}>
                <Table.Td>{name}</Table.Td>
                <Table.Td>{studyId}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </>
  );
};

export const ControlledTableState: Story = {
  render: () => <ControlledTable />,
};
