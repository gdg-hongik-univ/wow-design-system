import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import {
  type KeyboardEvent,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { useCollection } from "./context/CollectionContext";
import { useDropDownContext } from "./context/DropDownContext";

interface DropDownWrapperProps extends PropsWithChildren {
  hasCustomTrigger?: boolean;
}
const DropDownOptionList = ({
  children,
  hasCustomTrigger,
}: DropDownWrapperProps) => {
  const { open, setFocusedValue, focusedValue, handleSelect, dropdownId } =
    useDropDownContext();
  const itemMap = useCollection();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.focus();
    }
  }, [open]);

  const updateFocusedValue = useCallback(
    (direction: number) => {
      const values = Array.from(itemMap.keys());
      setFocusedValue((prevValue) => {
        const currentIndex = values.indexOf(prevValue ?? "");
        const nextIndex =
          (currentIndex + direction + values.length) % values.length;
        return values[nextIndex] ?? "";
      });
    },
    [itemMap, setFocusedValue]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLUListElement>) => {
      if (!open) return;

      const { key } = event;

      if (key === "ArrowDown") {
        updateFocusedValue(1);
        event.preventDefault();
      } else if (key === "ArrowUp") {
        updateFocusedValue(-1);
        event.preventDefault();
      } else if (key === "Enter" && focusedValue !== null) {
        handleSelect(focusedValue, itemMap.get(focusedValue));
        event.preventDefault();
      }
    },
    [open, focusedValue, updateFocusedValue, handleSelect, itemMap]
  );

  return (
    <styled.ul
      aria-labelledby={`${dropdownId}-trigger`}
      id={`${dropdownId}-option-list`}
      ref={listRef}
      role="listbox"
      tabIndex={-1}
      visibility={open ? "visible" : "hidden"}
      className={dropdownContentStyle({
        type: hasCustomTrigger ? "custom" : "default",
      })}
      onKeyDown={handleKeyDown}
    >
      {children}
    </styled.ul>
  );
};

export default DropDownOptionList;

const dropdownContentStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    outline: "none",
    top: "calc(100% + 0.5rem)",
    left: 0,
    zIndex: "dropdown",
    maxHeight: "18.75rem",
    width: "100%",
    lg: {
      maxWidth: "22.375rem",
    },
    smDown: {
      width: "100%",
    },
    backgroundColor: "backgroundNormal",
    border: "1px solid",
    borderRadius: "sm",
    borderColor: "outline",
    overflow: "auto",
    _scrollbar: {
      width: "2px",
    },
    _scrollbarThumb: {
      width: "2px",
      height: "65px",
      borderRadius: "sm",
      backgroundColor: "outline",
    },
    _scrollbarTrack: {
      marginTop: "2px",
      marginBottom: "2px",
    },
  },
  variants: {
    type: {
      custom: {
        lg: {},
      },
      default: {},
    },
  },
  defaultVariants: { type: "default" },
});
