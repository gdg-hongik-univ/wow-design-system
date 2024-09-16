"use client";

import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";

/**
 * @description ActionSheet의 푸터 요소를 나타내는 ActionSheetFooter 컴포넌트입니다.
 *
 * @param {children} text 액션시트의 푸터에 들어갈 버튼.
 * @param {CSSProperties} [style] 액션시트 푸터의 커스텀 스타일.
 * @param {string} [className] 액션시트 푸터에 전달하는 커스텀 클래스.
 */
export interface ActionSheetFooterProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const ActionSheetFooter = ({ children, ...rest }: ActionSheetFooterProps) => {
  return (
    <styled.div width="100%" {...rest}>
      {children}
    </styled.div>
  );
};

ActionSheetFooter.displayName = "ActionSheetFooter";
export default ActionSheetFooter;
