"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { CSSProperties, InputHTMLAttributes } from "react";
import { forwardRef, useId, useLayoutEffect, useRef } from "react";
import { Search as SearchIcon } from "wowds-icons";

import type { BaseVariantType } from "@/hooks/useFormControl";
import { useFormControl } from "@/hooks/useFormControl";
import { useMergeRefs } from "@/hooks/useMergeRefs";

type CustomVariantType = BaseVariantType | "disabled";

/**
 * @description 사용자가 검색할 텍스트를 입력하는 서치바 컴포넌트입니다.
 *
 * @param {string} [placeholder] 서치바의 플레이스홀더 텍스트.
 * @param {string} [defaultValue] 서치바의 기본 값.
 * @param {string} [value] 외부에서 제어할 활성 상태.
 * @param {number} [maxLength] 서치바의 최대 입력 길이.
 * @param {boolean} [disabled] 서치바의 비활성 여부.
 * @param {(value: string) => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {() => void} [onBlur] 서치바가 포커스를 잃을 때 호출될 콜백 함수.
 * @param {() => void} [onFocus] 서치바가 포커스됐을 때 호출될 콜백 함수.
 * @param {InputHTMLAttributes<HTMLInputElement>} [inputProps] 서치바에 전달할 추가 input 속성.
 * @param {CSSProperties} [style] 서치바의 커스텀 스타일 속성.
 * @param {string} [className] 서치바에 전달하는 커스텀 클래스명.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  style?: CSSProperties;
  className?: string;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      onBlur,
      onChange,
      onFocus,
      placeholder = "",
      defaultValue,
      value: valueProp,
      maxLength,
      inputProps,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const inputId = inputProps?.id || id;

    const inputRef = useRef<HTMLInputElement>(null);
    const inputElementRef = useMergeRefs(inputRef, ref);

    const {
      value,
      variant,
      setVariant,
      handleChange,
      handleBlur,
      handleFocus,
    } = useFormControl<CustomVariantType>({
      defaultValue,
      value: valueProp,
      maxLength,
      disabled,
      onChange,
      onBlur,
      onFocus,
    });

    useLayoutEffect(() => {
      if (disabled) {
        setVariant("disabled");
      }
    }, [disabled, setVariant]);

    return (
      <Flex
        className={clsx(className, containerStyle({ type: variant }))}
        gap="xs"
        {...rest}
      >
        <SearchIcon stroke={getStrokeColor(variant)} />
        <styled.input
          {...inputProps}
          aria-disabled={disabled}
          aria-label={inputProps?.["aria-label"] ?? "searchbar"}
          className={inputStyle()}
          disabled={disabled}
          id={inputId}
          maxLength={maxLength}
          placeholder={placeholder}
          ref={inputElementRef}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </Flex>
    );
  }
);

SearchBar.displayName = "SearchBar";
export default SearchBar;

const getStrokeColor = (variant: CustomVariantType) => {
  if (variant === "default") {
    return "outline";
  }
  if (variant === "typing") {
    return "primary";
  }
  if (variant === "typed") {
    return "sub";
  }
  if (variant === "disabled") {
    return "outline";
  }
};

const containerStyle = cva({
  base: {
    lg: {
      minWidth: "19.75rem",
      maxWidth: "40.75rem",
    },
    smDown: {
      width: "100%",
    },
    borderRadius: "sm",
    borderWidth: "button",
    borderStyle: "solid",
    paddingX: "sm",
    paddingY: "xs",
    textStyle: "body1",
    height: "2.625rem",
    maxHeight: "7.5rem",
    backgroundColor: "backgroundNormal",
    _placeholder: {
      color: "outline",
    },
    _focus: {
      outline: "none",
    },
  },
  variants: {
    type: {
      default: {
        borderColor: "outline",
        color: "outline",
      },
      typing: {
        borderColor: "primary",
        color: "textBlack",
      },
      typed: {
        borderColor: "sub",
        color: "textBlack",
      },
      disabled: {
        backgroundColor: "backgroundAlternative",
        borderColor: "outline",
        cursor: "not-allowed",
        _placeholder: {
          color: "outline",
        },
        color: "outline",
      },
    },
  },
});

const inputStyle = cva({
  base: {
    width: "100%",
    overflowY: "hidden",
    cursor: "inherit",
    outline: "none",
    _disabled: {
      pointerEvents: "none",
    },
  },
});
