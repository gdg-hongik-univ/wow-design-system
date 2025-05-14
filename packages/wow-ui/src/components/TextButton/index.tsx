"use client";

import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { forwardRef } from "react";

import type {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/types";

/**
 * @description 텍스트 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @param {string} text - 텍스트 버튼의 라벨.
 * @param {boolean} [disabled] - 텍스트 버튼이 비활성화되어 있는지 여부.
 * @param {"lg" | "sm"} [size] - 텍스트 버튼의 크기.
 * @param {CSSProperties} [style] - 텍스트 버튼의 커스텀 스타일.
 * @param {string} [className] - 텍스트 버튼에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  size?: "lg" | "sm";
  style?: CSSProperties;
  className?: string;
}

type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  CustomButtonProps
>;

type ButtonComponent = <C extends ElementType = "button">(
  props: PolymorphicComponentPropsWithRef<C, ButtonProps<C>>
) => ReactNode;

const TextButton: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends ElementType = "button">(
    {
      asProp,
      text,
      disabled = false,
      size = "lg",
      className,
      ...rest
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = asProp || "button";

    return (
      <Component
        aria-disabled={disabled}
        className={clsx(className, TextButtonStyle)}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        <styled.span
          textDecoration="underline"
          textStyle={size === "lg" ? "label1" : "label2"}
        >
          {text}
        </styled.span>
      </Component>
    );
  }
);

const TextButtonStyle = css({
  padding: "0.75rem 1.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "sub",

  borderRadius: "full",
  cursor: "pointer",

  _hover: {
    color: "textBlack",
  },
  _active: {
    background: "monoBackgroundPressed",
    color: "sub",
  },
  _disabled: {
    color: "lightDisabled",
    cursor: "not-allowed",
  },
});

TextButton.displayName = "TextButton";
export default TextButton;
