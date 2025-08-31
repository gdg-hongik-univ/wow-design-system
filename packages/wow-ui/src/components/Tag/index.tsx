"use client";

import { cva } from "@styled-system/css/cva";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";

type Variant = "outline" | "solid1" | "solid2";

type OutlineColors = "red" | "blue" | "green" | "yellow";
type Solid1Colors = "blue" | "yellow" | "green";
type Solid2Colors = "blue" | "red" | "grey" | "green";

type VariantColorMap = {
  outline: OutlineColors;
  solid1: Solid1Colors;
  solid2: Solid2Colors;
};

export interface BaseTagProps
  extends HTMLAttributes<HTMLSpanElement>,
    PropsWithChildren {}

/**
 * @description 태그 컴포넌트의 속성을 정의합니다.
 *
 * @param {ReactNode} children - 태그의 자식 요소.
 * @param {"outline" | "solid1" | 'solid2'} [variant] - 태그의 종류.
 * @param {"red" | "blue" | "green" | "yellow" | "grey"} [color] - 태그의 색상.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

type TagProps = BaseTagProps & {
  variant: Variant;
  color: VariantColorMap[Variant];
};

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    { children, variant = "outline", color = "blue", className, ...rest },
    ref
  ) => {
    return (
      <styled.span
        className={clsx(TagStyle({ variant, color }), className)}
        ref={ref}
        {...rest}
      >
        {children}
      </styled.span>
    );
  }
);

const TagStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingX: "xs",
    paddingY: "xxs",
    borderRadius: "sm",
    width: "fit-content",
    border: "1px solid",
    textStyle: "label2",
  },
  variants: {
    variant: {
      outline: {
        backgroundColor: "backgroundNormal",
      },
      solid1: {
        border: "none",
        backgroundColor: "monoBackgroundPressed",
      },
      solid2: {
        border: "none",
      },
    },
    color: {
      red: {
        borderColor: "secondaryRed",
        color: "secondaryRed",
      },
      green: {
        borderColor: "secondaryGreen",
        color: "secondaryGreen",
      },
      blue: {
        borderColor: "primary",
        color: "primary",
      },
      yellow: {
        borderColor: "secondaryYellow",
        color: "secondaryYellow",
      },
      grey: {},
    },
  },
  compoundVariants: [
    {
      variant: "solid2",
      color: "blue",
      css: {
        backgroundColor: "blueDisabled",
        color: "blueHover",
      },
    },
    {
      variant: "solid2",
      color: "red",
      css: {
        backgroundColor: "errorBackground",
        color: "error",
      },
    },
    {
      variant: "solid2",
      color: "grey",
      css: {
        backgroundColor: "monoBackgroundPressed",
        color: "sub",
      },
    },
    {
      variant: "solid2",
      color: "green",
      css: {
        backgroundColor: "#E0F3E5",
        color: "secondaryGreen",
      },
    },
  ],
});

Tag.displayName = "Tag";
export default Tag;
