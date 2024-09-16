"use client";

import { cva } from "@styled-system/css";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

import useClickOutside from "@/hooks/useClickOutside";

import ActionSheetBackground from "./ActionSheetBackground";
import ActionSheetBody from "./ActionSheetBody";
import { ActionSheetContext } from "./ActionSheetContext";
import ActionSheetFooter from "./ActionSheetFooter";
import ActionSheetHeader from "./ActionSheetHeader";

export interface ActionSheetProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const ActionSheet = ({
  isOpen,
  onClose,
  children,
  ...rest
}: ActionSheetProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<"open" | "close">("close");

  const handleClickClose = () => {
    setState("close");
    setTimeout(() => {
      onClose();
    }, 100);
  };

  useClickOutside(dialogRef, handleClickClose);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setState("open");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    isOpen && (
      <ActionSheetContext.Provider value={{ onClose: handleClickClose }}>
        <dialog className={dialogStyle({ state })} ref={dialogRef} {...rest}>
          {children}
        </dialog>
        {/* TODO: 공통 컴포넌트? */}
        <ActionSheetBackground />
      </ActionSheetContext.Provider>
    )
  );
};

ActionSheet.Header = ActionSheetHeader;
ActionSheet.Body = ActionSheetBody;
ActionSheet.Footer = ActionSheetFooter;

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

    zIndex: 9999,
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

ActionSheet.displayName = "ActionSheet";
export default ActionSheet;
