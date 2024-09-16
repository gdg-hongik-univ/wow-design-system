"use client";
import type { FlexProps } from "@styled-system/jsx";
import { Flex } from "@styled-system/jsx";
import type { ReactNode } from "react";

/**
 * @description ActionSheet의 바디 요소를 나타내는 ActionSheetBody 컴포넌트입니다.
 *
 * @param {string} children 액션시트의 바디 요소.
 */
export interface ActionSheetBodyProps extends FlexProps {
  children: ReactNode;
}

const ActionSheetBody = ({ children, ...rest }: ActionSheetBodyProps) => {
  return (
    <Flex direction="column" width="100%" {...rest}>
      {children}
    </Flex>
  );
};

ActionSheetBody.displayName = "ActionSheetBody";
export default ActionSheetBody;
