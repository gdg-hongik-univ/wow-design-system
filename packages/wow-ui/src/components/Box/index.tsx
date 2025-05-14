"use client";
import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { ColorToken } from "@styled-system/tokens";
import { RightArrow, Warn } from "wowds-icons";

import Checkbox from "@/components/Checkbox";
import useCheckedState from "@/hooks/useCheckedState";

/**
 * @description 사용자에게 보여주어야 하는 정보를 담을 수 있는 Box 컴포넌트입니다.
 * @param {ReactNode} [leftElement] Box 컴포넌트의 왼쪽에 들어갈 수 있는 요소입니다. (아이콘, 이미지 등)
 * @param {boolean} [disabled] Box 컴포넌트의 활성 상태를 설정합니다.
 * @param {boolean} [checked] Box 컴포넌트의 타입이 "checkbox"일때 전달할 수 있는 체크박스의 상태입니다.
 * @param {string} [className] 체크박스에 전달하는 커스텀 클래스를 설정합니다.
 * @param {string} [textColor] text의 색상을 변경할 수 있습니다.
 * @param {"text" | "checkbox" | "arrow"} [variant] Box 컴포넌트의 타입을 설정합니다.
 * @param {ReactNode} text Box 컴포넌트에 메인으로 표기할 텍스트를 입력합니다.
 * @param {string} [subText] Box 컴포넌트에 작성할 추가 정보를 입력합니다.
 * @param {string} [subTextColor] subtext의 색상을 변경할 수 있습니다.
 * @param {"default" | "success" | "error"} [status] Box 컴포넌트를 통해 사용자의 상태를 반환합니다.
 * @param {() => void} [onClick] Box 컴포넌트의 타입이 "arrow"일때 수행할 onClick 함수를 입력합니다. onClick 함수는 "text", "checkbox" type에서 사용할 수 없습니다.
 * @param {() => void} [onChange] Box 컴포넌트의 타입이 "checkbox"일때 수행할 onChange 함수를 입력합니다. onChange 함수는 "text", "arrow" type에서 사용할 수 없습니다.
 * @param {CSSProperties} [style] Box 컴포넌트에 적용할 수 있는 custom style
 */

type BoxVariantType = "arrow" | "checkbox" | "text" | "warn";

export interface BoxProps<T extends BoxVariantType> {
  variant?: T;
  disabled?: boolean;
  onClick?: T extends "arrow" ? () => void : never;
  onChange?: T extends "checkbox" ? () => void : never;
  checked?: T extends "checkbox" ? boolean : never;
  leftElement?: React.ReactNode;
  text: React.ReactNode;
  textColor?: ColorToken;
  subText?: string;
  subTextColor?: ColorToken;
  status?: "default" | "success" | "error";
  style?: React.CSSProperties;
  className?: string;
}

const Box = <T extends BoxVariantType = "text">({
  leftElement,
  variant,
  disabled = false,
  text,
  textColor,
  subText,
  subTextColor,
  status = "default",
  onClick,
  onChange,
  checked: checkedProp,
  ...rest
}: BoxProps<T>) => {
  const { handleClick, checked } = useCheckedState({
    checked: checkedProp,
    onChange,
    value: "checked",
  });

  const getStrokeColor = (status: "default" | "success" | "error") => {
    if (disabled) return "lightDisabled";
    switch (status) {
      case "default":
        return "outline";
      case "error":
        return "error";
      default:
        return "primary";
    }
  };
  const handleArrowClick = () => {
    if (variant === "arrow" && onClick) {
      onClick();
    }
  };

  return (
    <Flex
      alignItems="center"
      direction="row"
      gap={variant !== "text" ? "lg" : undefined}
      id={`box-${text}`}
      justifyContent="space-between"
      className={containerStyle({
        status: disabled ? "disabled" : status,
        variant: disabled ? "disabled" : variant,
      })}
      onClick={handleArrowClick}
      {...rest}
    >
      <Flex alignItems="center" direction="row" gap="xs" width="100%">
        {leftElement}
        <Flex direction="column" gap="xxs" width="100%">
          <styled.div
            color={textColor ? textColor : disabled ? "sub" : "textBlack"}
            width="100%"
            {...(typeof text === "string" && { textStyle: "h3" })}
          >
            {text}
          </styled.div>
          <styled.div
            color={subTextColor ? subTextColor : disabled ? "mono.600" : "sub"}
            textStyle="body1"
            width="100%"
          >
            {subText}
          </styled.div>
        </Flex>
      </Flex>
      <div>
        {variant === "checkbox" && (
          <Checkbox
            checked={checked}
            disabled={disabled}
            onClick={handleClick}
          />
        )}
        {variant === "arrow" && (
          <RightArrow height={20} stroke={getStrokeColor(status)} width={20} />
        )}
        {variant === "warn" && (
          <Warn
            fill={getStrokeColor(status)}
            height={24}
            stroke={getStrokeColor(status)}
            width={24}
          />
        )}
      </div>
    </Flex>
  );
};

export default Box;

const containerStyle = cva({
  base: {
    paddingX: "xl",
    paddingTop: "xl",
    paddingBottom: "lg",
    borderRadius: "md",
    border: "1px solid",
    width: "100%",
    md: {
      maxWidth: "40.75rem",
      minWidth: "19.75rem",
    },
    backgroundColor: "white",
  },

  variants: {
    status: {
      default: {
        borderColor: "outline",
      },
      success: {
        borderColor: "primary",
      },
      error: {
        borderColor: "error",
      },
      disabled: {
        borderColor: "lightDisabled",
        backgroundColor: "backgroundAlternative",
      },
    },

    variant: {
      arrow: {
        cursor: "pointer",
      },
      text: {
        cursor: "default",
      },
      checkbox: {
        cursor: "default",
      },
      warn: {
        cursor: "default",
      },
      disabled: {
        cursor: "not-allowed",
      },
    },
  },
});
