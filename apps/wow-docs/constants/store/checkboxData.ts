import type { CheckboxProps } from "wowds-ui/Checkbox";

type CheckboxItem = CheckboxProps & {
  key: number;
  pressed?: boolean;
  needsRef?: boolean;
};

export const checkboxes: CheckboxItem[] = [
  { key: 1, checked: true },
  { key: 2, checked: true, needsRef: true },
  { key: 3, checked: true, disabled: true },
  { key: 4 },
  { key: 5, needsRef: true },
  { key: 6, disabled: true },
];

export const checkboxAndTexts: CheckboxItem[] = [
  {
    key: 1,
    position: "vertical",
    label: "Text",
    defaultChecked: true,
  },
  {
    key: 2,
    position: "vertical",
    label: "Text",
  },
  {
    key: 3,
    label: "Text",
    defaultChecked: true,
  },
  { key: 4, label: "Text" },
];
