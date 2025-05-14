"use client";

import { styled } from "@styled-system/jsx";
import type { ReactNode } from "react";
import { Close } from "wowds-icons";

import { useActionSheetContext } from "@/components/ActionSheet/ActionSheetContext";
import type { DefaultProps } from "@/types/DefaultProps";

/**
 * @description ActionSheet의 헤더 요소를 나타내는 ActionSheetHeader 컴포넌트입니다.
 *
 * @param {string} text 액션시트의 헤더 텍스트.
 * @param {string} subText 액션시트의 헤더 서브 텍스트.
 * @param {CSSProperties} [style] 액션시트 헤더의 커스텀 스타일.
 * @param {string} [className] 액션시트 헤더에 전달하는 커스텀 클래스.
 */
export interface ActionSheetHeaderProps extends DefaultProps {
  text: string | ReactNode;
  subText?: string | ReactNode;
}

const ActionSheetHeader = ({
  text,
  subText,
  ...rest
}: ActionSheetHeaderProps) => {
  const { onClose } = useActionSheetContext();

  return (
    <styled.header
      alignItems="flex-end"
      display="flex"
      flexDir="column"
      width="100%"
      {...rest}
    >
      <Close stroke="outline" style={{ cursor: "pointer" }} onClick={onClose} />
      <styled.h1 textStyle="h1" width="100%">
        {text}
      </styled.h1>
      <styled.p textStyle="body1" width="100%">
        {subText}
      </styled.p>
    </styled.header>
  );
};

ActionSheetHeader.displayName = "ActionSheetHeader";
export default ActionSheetHeader;
