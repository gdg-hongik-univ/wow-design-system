import type { Meta } from "@storybook/react";
import { Flex } from "@styled-system/jsx";
import { useState } from "react";

import type { Time } from "@/components/Picker/PickerContext";
import PickerGroup from "@/components/Picker/PickerGroup";
import RangeDatePicker from "@/components/Picker/RangeDatePicker";
import DatePicker from "@/components/Picker/SingleDatePicker";
import TimePicker from "@/components/Picker/TimePicker";

const meta = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "DatePicker 컴포넌트",
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
  argTypes: {
    label: {
      description: "DatePicker의 라벨을 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
      control: {
        type: "text",
      },
    },
    selected: {
      description: "DatePicker의 선택된 날짜 값을 나타냅니다.",
      table: {
        type: { summary: "Date" },
        defaultValue: { summary: undefined },
      },
      control: {
        type: "object",
      },
    },
    onSelect: {
      description: "DatePicker의 날짜를 선택할 수 있는 함수를 나타냅니다.",
      table: {
        type: { summary: "function" },
        defaultValue: {
          summary: undefined,
        },
      },
      action: "onSelect",
    },
    placeholder: {
      description:
        "DatePicker의 드롭다운에 들어갈 placeholder 텍스트를 나타냅니다.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

export const Default = () => {
  const [selected, setSelected] = useState<Date | undefined>();
  return (
    <DatePicker label="종료 날짜" selected={selected} onSelect={setSelected} />
  );
};

export const WithInitialDate = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  return (
    <DatePicker label="종료 날짜" selected={selected} onSelect={setSelected} />
  );
};

export const WithTimePicker = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <PickerGroup selectedDate={selected} setSelectedDate={setSelected}>
      <DatePicker label="종료 날짜" />
      <TimePicker label="종료 시간" />
    </PickerGroup>
  );
};

export const DateRange = () => {
  // DateRange 타입
  const [selected, setSelected] = useState<
    { from: Date | undefined; to?: Date | undefined } | undefined
  >();
  return (
    <RangeDatePicker
      label="스터디 신청 기간"
      selected={selected}
      onSelect={setSelected}
    />
  );
};

export const TimeRange = () => {
  const [start, setStart] = useState<Time>();
  const [end, setEnd] = useState<Time>();

  return (
    <Flex align="center" gap="lg">
      <TimePicker selectedTime={start} setSelectedTime={setStart} />
      <span>~</span>
      <TimePicker selectedTime={end} setSelectedTime={setEnd} />
    </Flex>
  );
};

export const DisabledDatePicker = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <PickerGroup selectedDate={selected} setSelectedDate={setSelected}>
      <DatePicker
        disabled={{ from: new Date("2024-09-04"), to: new Date("2024-09-05") }}
        label="종료 날짜"
      />
      <TimePicker disabled label="종료 시간" />
    </PickerGroup>
  );
};
