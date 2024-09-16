"use client";

import type { FlexProps } from "@styled-system/jsx";
import { Flex } from "@styled-system/jsx";
import type { ReactElement } from "react";

import type Button from "@/components/Button";
import type TextButton from "@/components/TextButton";

/**
 * @description ActionSheet의 푸터 요소를 나타내는 ActionSheetFooter 컴포넌트입니다.
 *
 * @param {children} children 액션시트의 푸터에 들어갈 버튼.
 */
export interface ActionSheetFooterProps extends FlexProps {
  children:
    | ReactElement<typeof Button | typeof TextButton>
    | ReactElement<typeof Button | typeof TextButton>[];
}

const ActionSheetFooter = ({ children, ...rest }: ActionSheetFooterProps) => {
  return (
    <Flex width="100%" {...rest}>
      {children}
    </Flex>
  );
};

ActionSheetFooter.displayName = "ActionSheetFooter";
export default ActionSheetFooter;
