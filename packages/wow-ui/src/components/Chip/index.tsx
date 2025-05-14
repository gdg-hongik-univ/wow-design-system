"use client";
import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import clsx from "clsx";
import type { ReactNode } from "react";
import { forwardRef, useEffect, useState } from "react";

import type {
  ButtonElementType,
  PolymorphicComponentProps,
  PolymorphicRef,
  ToggleButtonProps,
} from "@/types";

/**
 * @template T 렌더링할 요소 또는 컴포넌트 타입
 *
 * @param {T} [element] 렌더링할 요소 또는 컴포넌트. 기본값은 button이며, Chip의 경우 input으로 사용될 수 있음
 * @param {boolean} [defaultChecked=false] 칩의 토글의 default 활성화 상태
 * @param {boolean} [ischecked=false] 외부에서 제어할 활성 상태.
 * @param {string} label 칩 버튼에 들어갈 텍스트
 * @param {boolean} [clickable=true] 클릭할 수 있는 칩인지 여부 판단
 * @param {() => void} [onDelete] 칩 버튼을 삭제했을 때의 동작
 * @param {() => void} [onClick] Chip 버튼 클릭 시 동작
 * @param {() => void} [onKeyDown] 토글 버튼이 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 동작할 이벤트.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */

export interface _ChipProps extends ToggleButtonProps {
  label: string;
  clickable?: boolean;
  onDelete?: () => void;
}

export type ChipProps<C extends ButtonElementType> = PolymorphicComponentProps<
  C,
  _ChipProps
>;

type ChipComponent = <T extends ButtonElementType = "button">(
  props: ChipProps<T> & { ref?: PolymorphicRef<T> }
) => ReactNode;

const ChipLabel = ({
  label,
  ischecked,
  disabled = true,
}: {
  label: string;
  ischecked: boolean;
  disabled: boolean;
}) => {
  return (
    <styled.div
      data-disabled={disabled}
      data-selected={ischecked}
      textStyle="label2"
      className={chipLabel({
        type: disabled ? "disabled" : ischecked ? "checked" : "unchecked",
      })}
    >
      {label}
    </styled.div>
  );
};

const Chip: ChipComponent & { displayName?: string } = forwardRef(
  <T extends ButtonElementType = "button">(
    {
      asProp,
      label,
      clickable,
      onKeyDown,
      onClick,
      ischecked: checkedProp = false,
      defaultChecked = false,
      disabled = false,
      style,
      ...props
    }: ChipProps<T>,
    ref: any
  ) => {
    const Component = (asProp || "button") as React.ElementType;
    const [ischecked, setIsChecked] = useState(() =>
      checkedProp ? checkedProp : defaultChecked
    );
    useEffect(() => {
      if (checkedProp !== undefined) {
        setIsChecked(checkedProp);
      }
    }, [checkedProp]);

    const handleClick = () => {
      if (disabled) return;
      onClick?.();
      clickable ? setIsChecked((prev: boolean) => !prev) : null;
    };

    const handleKeyDown = (event: any) => {
      if (!clickable || disabled) return;
      if (event.currentTarget === event.target) {
        event.preventDefault();
        if (event.key === "Enter" || event.key === " ") {
          setIsChecked((prev: boolean) => !prev);
          onKeyDown?.();
        }
      }
    };

    const { className, ...restProps } = props;

    return (
      <Component
        aria-checked={clickable ? ischecked : undefined}
        aria-disabled={disabled}
        aria-label={`chip ${ischecked ? "activated" : "inactivated"}`}
        data-selected={ischecked}
        ischecked={String(ischecked)}
        ref={ref}
        role={clickable ? "checkbox" : undefined}
        style={style}
        className={clsx(
          chip({
            clickable: disabled ? false : clickable,
            disabled: disabled,
          }),
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...restProps}
      >
        <ChipLabel disabled={disabled} ischecked={ischecked} label={label} />
      </Component>
    );
  }
);

Chip.displayName = "Chip";
export default Chip;

const chipLabel = cva({
  base: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    type: {
      checked: {
        color: "white",
      },
      unchecked: {
        color: "mono.950",
      },
      disabled: {
        color: "darkDisabled",
      },
    },
  },
});

const chip = cva({
  base: {
    display: "inline-block",
    minWidth: "3.5rem",
    height: "1.875rem",
    borderRadius: "1.25rem",
    paddingY: "xs",
    paddingX: "sm",
  },
  variants: {
    clickable: {
      true: {
        cursor: "pointer",
      },
      false: {
        cursor: "default",
      },
    },
    disabled: {
      true: {
        bgColor: "lightDisabled",
        borderWidth: "0.0625rem",
        borderColor: "darkDisabled",
      },
      false: {
        "&[data-selected=true]": {
          bgColor: "blue.500",
          _hover: {
            bgColor: "blue.500",
            shadow: "0px 0.25rem 0.5rem 0px rgba(16, 43, 74, 0.20)",
          },
          _pressed: { bgColor: "blue.400" },
        },
        "&[data-selected=false]": {
          bgColor: "white",
          borderWidth: "0.0625rem",
          borderColor: "mono.600",
          _hover: { borderColor: "mono.950" },
          _pressed: { borderColor: "mono.400", bgColor: "mono.50" },
        },
      },
    },
  },
});
