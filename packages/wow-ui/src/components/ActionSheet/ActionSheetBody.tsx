"use client";

import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";

/**
 * @description ActionSheet의 바디 요소를 나타내는 ActionSheetBody 컴포넌트입니다.
 *
 * @param {string} children 액션시트의 바디 요소.
 * @param {CSSProperties} [style] 액션시트 바디의 커스텀 스타일.
 * @param {string} [className] 액션시트 바디에 전달하는 커스텀 클래스.
 */
export interface ActionSheetBodyProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const ActionSheetBody = ({ children, ...rest }: ActionSheetBodyProps) => {
  return (
    <styled.div width="100%" {...rest}>
      {children}
    </styled.div>
  );
};

ActionSheetBody.displayName = "ActionSheetBody";
export default ActionSheetBody;
