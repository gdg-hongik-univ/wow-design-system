"use client";

import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { useRef } from "react";

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
  useClickOutside(dialogRef, onClose);

  return (
    isOpen && (
      <ActionSheetContext.Provider value={{ onClose }}>
        <styled.dialog
          alignItems="center"
          borderTopRadius="md"
          bottom={0}
          display="flex"
          flexDir="column"
          left="50%"
          overflow="hidden"
          padding="1.25rem 1rem"
          position="fixed"
          ref={dialogRef}
          translate="-50%"
          width={390}
          zIndex={9999}
          {...rest}
        >
          {children}
        </styled.dialog>
        {/* TODO: 공통 컴포넌트? */}
        <ActionSheetBackground />
      </ActionSheetContext.Provider>
    )
  );
};

ActionSheet.Header = ActionSheetHeader;
ActionSheet.Body = ActionSheetBody;
ActionSheet.Footer = ActionSheetFooter;

ActionSheet.displayName = "ActionSheet";
export default ActionSheet;
