"use client";

import { cva } from "@styled-system/css";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { forwardRef, useEffect, useRef } from "react";

import { useMergeRefs } from "@/hooks/useMergeRefs";
import type { DefaultProps } from "@/types/DefaultProps";

import { useCollectionContext } from "./contexts/CollectionContext";
import { useTabsContext } from "./contexts/TabsContext";

/**
 * @description TabsItem 컴포넌트는 각 Tab 컴포넌트입니다.
 * @param {string} value - TabsContent의 value와 일치하는 값입니다.
 * @param {ReactNode} children - TabsContent 자식 요소.
 * @param {string} [className] - TabsItem에 전달할 커스텀 클래스.
 * @param {CSSProperties} [style] - TabsItem에 전달할 커스텀 스타일.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 * @param {ReactNode} children - TabsItem의 자식 요소.
 */
interface TabsItemProps
  extends PropsWithChildren,
    DefaultProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsItem = forwardRef<HTMLButtonElement, TabsItemProps>(
  ({ value, children, className, ...rest }: TabsItemProps, ref) => {
    const { value: selectedValue, setSelectedValue, label } = useTabsContext();
    const selected = selectedValue === value;

    const handleClickTabTrigger = () => {
      setSelectedValue(value);
    };

    const { values } = useCollectionContext();
    const internalButtonRef = useRef<HTMLButtonElement>(null);
    const buttonRef = useMergeRefs(ref, internalButtonRef);

    useEffect(() => {
      values.add(value);
      if (selected && internalButtonRef.current) {
        internalButtonRef.current.focus();
      }
    }, [values, selected, value]);

    return (
      <button
        aria-controls={`${label}-tab-content-${value}`}
        aria-selected={selected}
        id={`${label}-tab-trigger-${value}`}
        ref={buttonRef}
        role="tab"
        tabIndex={selected ? 0 : -1}
        className={clsx(
          tabItemStyle({ type: selected ? "selected" : "default" }),
          className
        )}
        onClick={handleClickTabTrigger}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
export default TabsItem;

const tabItemStyle = cva({
  base: {
    textStyle: "label1",
    paddingY: "sm",
    paddingX: "14px",
    borderBottom: "1px solid",
    borderColor: "outline",
    color: "sub",
    outline: "none",
    cursor: "pointer",
    whiteSpace: "pre",
    xsToSm: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  },
  variants: {
    type: {
      selected: {
        color: "primary",
        borderColor: "primary",
      },
      default: {},
    },
  },
});
