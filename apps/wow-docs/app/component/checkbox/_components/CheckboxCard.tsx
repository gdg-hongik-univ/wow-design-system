"use client";

import Card from "@components/Card";
import { checkboxes } from "@constants/store";
import { Flex } from "@styled-system/jsx";
import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";
import Checkbox from "wowds-ui/Checkbox";

const createCheckboxRef =
  (
    refs: MutableRefObject<HTMLInputElement[]>,
    needsRef: boolean,
    key: number
  ) =>
  (element: HTMLInputElement) => {
    if (needsRef) refs.current[key] = element;
  };

const CheckboxCard = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current.forEach((element) => {
      if (element) {
        element.setAttribute("data-pressed", "true");
      }
    });
  }, []);

  return (
    <Card>
      <Flex gap="12px">
        {checkboxes.map(({ needsRef, key, ...props }) => (
          <Checkbox
            key={key}
            inputProps={
              {
                ref: createCheckboxRef(inputRefs, needsRef ?? false, key),
              } as React.InputHTMLAttributes<HTMLInputElement>
            }
            {...props}
          />
        ))}
      </Flex>
    </Card>
  );
};

export default CheckboxCard;
