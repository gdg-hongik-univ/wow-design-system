"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import { forwardRef, useId } from "react";

import useGroupCheckedState from "@/hooks/useGroupCheckedState";

/**
 * @description on, off 두 가지 상태로 설정할 수 있는 스위치 컴포넌트입니다.
 *
 * @param {boolean} [defaultChecked=false] 스위치가 처음에 활성화되어 있는지 여부.
 * @param {boolean} [disabled=false] 스위치가 비활성화되어 있는지 여부.
 * @param {boolean} [checked] 외부에서 제어할 활성 상태.
 * @param {ReactNode} [label] 스위치 오른쪽에 들어갈 텍스트.
 * @param {string} value 스위치 컴포넌트 값.
 * @param {() => void} [onChange] 외부 활성 상태가 변경될 때 호출되는 함수.
 * @param {() => void} [onClick] 스위치를 클릭했을 때 호출되는 함수.
 * @param {() => void} [onKeyDown] 스위치가 포커스됐을 때 엔터 키 또는 스페이스 바를 눌렀을 때 호출되는 함수.
 * @param {() => void} [onMouseEnter] 마우스가 스위치 위로 진입할 때 호출되는 함수.
 * @param {() => void} [onMouseLeave] 마우스가 스위치에서 벗어날 때 호출되는 함수.
 * @param {InputHTMLAttributes<HTMLInputElement>} [inputProps] 스위치의 기본 input 요소에 전달할 추가 속성들.
 * @param {CSSProperties} [style] 스위치의 커스텀 스타일.
 * @param {string} [className] 스위치에 전달하는 커스텀 클래스.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface SwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label?: ReactNode;
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  style?: CSSProperties;
  className?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      defaultChecked = false,
      disabled: disabledProp = false,
      checked: checkedProp,
      label = "",
      value = "switch",
      onChange,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      inputProps,
      ...rest
    }: SwitchProps,
    ref
  ) => {
    const defaultId = `switch-${useId()}`;
    const id = inputProps?.id ?? defaultId;

    const {
      checked,
      pressed,
      disabled,
      handleClick,
      handleKeyDown,
      handleKeyUp,
      handleMouseUp,
      handleMouseDown,
    } = useGroupCheckedState({
      defaultChecked,
      checked: checkedProp,
      disabled: disabledProp,
      value,
      onChange,
      onClick,
      onKeyDown,
    });

    return (
      <Flex alignItems="center" display="inline-flex" gap="xs" {...rest}>
        <styled.label
          htmlFor={id}
          {...(pressed && { "data-pressed": true })}
          className={labelStyle({
            type: disabled ? "disabled" : checked ? "checked" : "unchecked",
          })}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onMouseDown={handleMouseDown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseUp={handleMouseUp}
        >
          <styled.input
            aria-disabled={disabled}
            aria-label={inputProps?.["aria-label"] ?? "switch"}
            checked={checked}
            className={inputStyle()}
            id={id}
            ref={ref}
            type="checkbox"
            value={value}
            onChange={() => handleClick(value)}
            {...inputProps}
          />
          <SwitchIcon checked={checked} disabled={disabled} pressed={pressed} />
        </styled.label>
        {!!label && <styled.span textStyle="body2">{label}</styled.span>}
      </Flex>
    );
  }
);

Switch.displayName = "Switch";
export default Switch;

const SwitchIcon = ({
  disabled,
  checked,
  pressed,
}: {
  disabled: boolean;
  checked: boolean;
  pressed: boolean;
}) => {
  let className: string;
  if (disabled) {
    className = checked
      ? switchIconStyle({ type: "disabledChecked" })
      : switchIconStyle({ type: "disabledUnchecked" });
  } else {
    className = checked
      ? switchIconStyle({ type: "checked" })
      : switchIconStyle({ type: "unchecked" });
  }

  return (
    <span {...(pressed && { "data-pressed": true })} className={className} />
  );
};

const labelStyle = cva({
  base: {
    width: "3.25rem !important",
    height: "1.75rem !important",
    borderRadius: "full",
    cursor: "pointer",
    display: "flex",
    position: "relative",
  },
  variants: {
    type: {
      checked: {
        bgColor: "primary",
        _hover: {
          bgColor: "blueHover",
          _pressed: {
            bgColor: "bluePressed",
          },
        },
        _pressed: {
          bgColor: "bluePressed",
        },
      },
      unchecked: {
        bgColor: "outline",
        _hover: {
          bgColor: "sub",
          _pressed: {
            bgColor: "bluePressed",
          },
        },
        _pressed: {
          bgColor: "bluePressed",
        },
      },
      disabled: {
        bgColor: "lightDisabled",
        cursor: "default",
      },
    },
  },
  defaultVariants: {
    type: "checked",
  },
});

const inputStyle = cva({
  base: {
    opacity: 0,
    width: 0,
    height: 0,
    overflow: "hidden",
    position: "absolute",
    cursor: "inherit",
  },
});

const switchIconStyle = cva({
  base: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    position: "absolute",
    top: "0.125rem",
    left: "0.125rem",
  },
  variants: {
    type: {
      checked: {
        left: "1.625rem",
        bg: "backgroundNormal",
        _hover: {
          _pressed: {
            bg: "blueBackgroundPressed",
          },
        },
        _pressed: {
          bg: "blueBackgroundPressed",
        },
      },
      unchecked: {
        left: "0.125rem",
        bg: "backgroundNormal",
        _hover: {
          _pressed: {
            bg: "monoBackgroundPressed",
          },
        },
        _pressed: {
          bg: "monoBackgroundPressed",
        },
      },
      disabledChecked: {
        left: "1.625rem",
        bg: "darkDisabled",
      },
      disabledUnchecked: {
        left: "0.125rem",
        bg: "darkDisabled",
      },
    },
  },
  defaultVariants: {
    type: "checked",
  },
});
