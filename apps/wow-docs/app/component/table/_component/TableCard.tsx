"use client";
import Card from "@components/Card";
import { Flex } from "@styled-system/jsx";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";
import Table from "wowds-ui/Table";

const TableCard = () => {
  return (
    <Card style={{ padding: "56px" }}>
      <Table fullWidth={true} showCheckbox={true}>
        <Table.Thead>
          <Table.Th>학번</Table.Th>
          <Table.Th>이름</Table.Th>
          <Table.Th>전화번호</Table.Th>
          <Table.Th>디스코드 사용자명</Table.Th>
          <Table.Th>디스코드 닉네임</Table.Th>
          <Table.Th>납입여부</Table.Th>
          <Table.Th>납입액션</Table.Th>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr key={1} value={1}>
            <Table.Td>C000000</Table.Td>
            <Table.Td>가나다</Table.Td>
            <Table.Td>01000000000</Table.Td>
            <Table.Td>abcd</Table.Td>
            <Table.Td>가나다라</Table.Td>
            <Table.Td>미납</Table.Td>
            <Table.Td>
              <Flex gap="xxs">
                <Button
                  size="sm"
                  style={{ borderColor: color.success, color: color.success }}
                  variant="outline"
                >
                  납입
                </Button>
                <Button
                  size="sm"
                  style={{ borderColor: color.error, color: color.error }}
                  variant="outline"
                >
                  미납
                </Button>
              </Flex>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Card>
  );
};

export default TableCard;
