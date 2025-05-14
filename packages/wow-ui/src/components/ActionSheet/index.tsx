"use client";

import { cva, cx } from "@styled-system/css";
import type {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
} from "react";
import { forwardRef, useEffect, useRef, useState } from "react";

import useClickOutside from "@/hooks/useClickOutside";
import type { DefaultProps } from "@/types/DefaultProps";

import ActionSheetBody from "./ActionSheetBody";
import { ActionSheetContext } from "./ActionSheetContext";
import ActionSheetFooter from "./ActionSheetFooter";
import ActionSheetHeader from "./ActionSheetHeader";
import ActionSheetOverlay from "./ActionSheetOverlay";

/**
 * @description ActionSheet 컴포넌트입니다.
 *
 * @param {boolean} isOpen 액션시트의 표시 여부.
 * @param {onClose} onClose 액션시트를 닫는 함수.
 * @param {CSSProperties} [style] 액션시트의 커스텀 스타일.
 * @param {string} [className] 액션시트에 전달하는 커스텀 클래스.
 */
export interface ActionSheetProps extends DefaultProps {
  children:
    | [
        ReactElement<typeof ActionSheetHeader>,
        ReactElement<typeof ActionSheetFooter>,
      ]
    | [
        ReactElement<typeof ActionSheetHeader>,
        ReactElement<typeof ActionSheetBody>,
        ReactElement<typeof ActionSheetFooter>,
      ];
  isOpen: boolean;
  onClose: () => void;
}

const ActionSheet = forwardRef<HTMLDialogElement, ActionSheetProps>(
  ({ isOpen, onClose, children, className, ...rest }, ref) => {
    const READY_FOR_TRANSITION = 100;
    const defaultRef = useRef<HTMLDialogElement>(null);
    const dialogRef = ref && typeof ref !== "function" ? ref : defaultRef;
    const [state, setState] = useState<"open" | "close">("close");

    const handleClose = () => {
      setState("close");
      setTimeout(onClose, READY_FOR_TRANSITION);
    };

    useClickOutside(dialogRef, handleClose);

    useEffect(() => {
      if (!isOpen) return;
      const timer = setTimeout(() => setState("open"), READY_FOR_TRANSITION);
      return () => clearTimeout(timer);
    }, [isOpen]);

    return (
      isOpen && (
        <ActionSheetContext.Provider value={{ onClose: handleClose }}>
          <dialog
            className={cx(dialogStyle({ state }), className)}
            ref={dialogRef}
            {...rest}
          >
            {children}
          </dialog>
          <ActionSheetOverlay />
        </ActionSheetContext.Provider>
      )
    );
  }
);

export interface ActionSheetComponent
  extends ForwardRefExoticComponent<
    ActionSheetProps & RefAttributes<HTMLDialogElement>
  > {
  Header: typeof ActionSheetHeader;
  Body: typeof ActionSheetBody;
  Footer: typeof ActionSheetFooter;
}

const ActionSheetWithStatics = ActionSheet as ActionSheetComponent;
ActionSheetWithStatics.Header = ActionSheetHeader;
ActionSheetWithStatics.Body = ActionSheetBody;
ActionSheetWithStatics.Footer = ActionSheetFooter;

ActionSheetWithStatics.displayName = "ActionSheet";
export default ActionSheetWithStatics;

const dialogStyle = cva({
  base: {
    width: 390,

    padding: "1.25rem 1rem",

    display: "flex",
    flexDir: "column",
    alignItems: "center",

    borderTopRadius: "md",
    overflow: "hidden",

    position: "fixed",
    bottom: 0,
    left: "50%",
    translate: "-50%",

    transition: "transform",
    transitionDelay: "0.8",
    transitionTimingFunction: "ease-in-out",

    zIndex: "actionSheet",

    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  variants: {
    state: {
      open: {
        transform: "translateY(0)",
      },
      close: {
        transform: "translateY(100%)",
      },
    },
  },
});
