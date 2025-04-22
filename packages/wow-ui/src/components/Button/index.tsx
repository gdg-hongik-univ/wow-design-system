"use client";

import { cva } from "@styled-system/css/cva";
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
 * @description 버튼 컴포넌트의 속성을 정의합니다.
 *
 * @param {ReactNode} children - 버튼의 자식 요소.
 * @param {string} [subText] - 버튼의 하단에 위치할 보조 텍스트.
 * @param {boolean} [disabled] - 버튼이 비활성화되어 있는지 여부.
 * @param {"lg" | "sm"} [size] - 버튼의 크기.
 * @param {"solid" | "outline" | "sub"} [variant] - 버튼의 종류.
 * @param {ReactNode} [icon] - 버튼의 좌측에 들어갈 아이콘.
 * @param {CSSProperties} [style] - 버튼의 커스텀 스타일.
 * @param {string} [className] - 버튼에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface CustomButtonProps {
  children: ReactNode;
  subText?: string;
  disabled?: boolean;
  size?: "lg" | "sm";
  variant?: "solid" | "outline" | "sub";
  icon?: ReactNode;
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

const Button: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends ElementType = "button">(
    {
      asProp,
      children,
      subText,
      disabled = false,
      size = "lg",
      variant = "solid",
      icon,
      className,
      ...rest
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = asProp || "button";

    return (
      <Component
        aria-disabled={disabled}
        disabled={disabled}
        ref={ref}
        className={clsx(
          className,
          ButtonStyle({
            size: variant === "sub" ? "sm" : size,
            variant,
          })
        )}
        {...rest}
      >
        <styled.span className={ContentStyle({ size })}>
          {icon}
          {children}
        </styled.span>
        {subText && <styled.span textStyle="label3">{subText}</styled.span>}
      </Component>
    );
  }
);

const ButtonStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "xs",

    cursor: "pointer",
  },
  variants: {
    size: {
      lg: {
        width: "100%",
        maxWidth: { lgOnly: 316 },
        padding: "1rem",
        borderRadius: "md",
      },
      sm: {
        padding: "0.75rem 1.25rem",
        borderRadius: "full",
      },
    },
    variant: {
      solid: {
        background: "primary",
        color: "textWhite",

        _disabled: {
          background: "monoBackgroundPressed",
          color: "outline",
          pointerEvents: "none",
        },
        _hover: {
          shadow: "blue",
        },
        _active: {
          background: "bluePressed",
        },
      },
      outline: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "primary",

        background: "background",
        color: "primary",

        _disabled: {
          borderColor: "darkDisabled",
          color: "darkDisabled",
          pointerEvents: "none",
        },
        _hover: {
          borderColor: "blueHover",
          color: "blueHover",
        },
        _active: {
          borderColor: "bluePressed",
          background: "blueBackgroundPressed",
          color: "bluePressed",
        },
      },
      sub: {
        background: "blueBackgroundPressed",
        color: "primary",

        _disabled: {
          color: "blueDisabled",
          pointerEvents: "none",
        },
        _hover: {
          shadow: "blue",
        },
        _active: {
          background: "blueDisabled",
        },
      },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      variant: "outline",
      css: {
        borderColor: "outline",
        color: "textBlack",

        _hover: {
          borderColor: "textBlack",
          color: "textBlack",
        },
        _active: {
          borderColor: "outline",
          background: "monoBackgroundPressed",
          color: "textBlack",
        },
      },
    },
  ],
});

const ContentStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    size: {
      lg: {
        gap: "xs",
        textStyle: "label1",
      },
      sm: {
        gap: "xxs",
        textStyle: "label2",
      },
    },
  },
});

Button.displayName = "Button";
export default Button;
