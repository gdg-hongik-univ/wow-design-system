"use client";

import { useState } from "react";
import PickerGroup from "wowds-ui/PickerGroup";
import SingleDatePicker from "wowds-ui/SingleDatePicker";
import Picker from "wowds-ui/TimePicker";

export const TimePicker = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <PickerGroup selectedDate={selected} setSelectedDate={setSelected}>
      <Picker label="시작 시간" />
      <Picker label="종료 시간" />
    </PickerGroup>
  );
};

export const DatePicker = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  return (
    <SingleDatePicker
      label="종료 날짜"
      selected={selected}
      onSelect={setSelected}
    />
  );
};
