"use client";

import { useEffect } from "react";
import Switch from "wowds-ui/Switch";

import DisabledChecked from "@/component/switch/_components/DisabledChecked";

const SwitchBtns = () => {
  useEffect(() => {
    const checkedHoverElement = document.querySelector(
      'label[for="checked hover"]'
    );
    const uncheckedHoverElement = document.querySelector(
      'label[for="unchecked hover"]'
    );

    const checkedPressedElement = document.querySelector(
      'label[for="checked pressed"]'
    );
    const uncheckedPressedElement = document.querySelector(
      'label[for="unchecked pressed"]'
    );

    checkedHoverElement?.setAttribute("data-hover", "true");
    uncheckedHoverElement?.setAttribute("data-hover", "true");
    checkedPressedElement?.setAttribute("data-pressed", "true");
    uncheckedPressedElement?.setAttribute("data-pressed", "true");
  }, []);
  return (
    <>
      <Switch />
      <Switch checked />
      <Switch inputProps={{ id: "unchecked hover" }} />
      <Switch checked inputProps={{ id: "checked hover" }} />
      <Switch inputProps={{ id: "unchecked pressed" }} />
      <Switch checked inputProps={{ id: "checked pressed" }} />
      <Switch disabled />
      <DisabledChecked />
    </>
  );
};

export default SwitchBtns;
