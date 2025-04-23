"use client";

import { cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  ReactNode,
  RefObject,
  TextareaHTMLAttributes,
} from "react";
import { forwardRef, useId, useLayoutEffect, useRef, useState } from "react";

import { useTextareaAutosize } from "@/hooks/useTextareaAutosize";

type TypingVariantType = "default" | "typing" | "typed";
type VariantType = TypingVariantType | "success" | "error";

/**
 * @description 사용자가 텍스트를 입력할 수 있는 텍스트필드 컴포넌트입니다.
 *
 * @param {string} label 텍스트필드의 라벨.
 * @param {string} [placeholder] 텍스트필드의 플레이스홀더 텍스트.
 * @param {string} [defaultValue] 텍스트필드의 기본 값.
 * @param {string} [value] 외부에서 제어할 활성 상태.
 * @param {number} [maxLength] 텍스트필드의 최대 입력 길이.
 * @param {boolean} [error] 텍스트필드의 오류 상태 여부.
 * @param {boolean} [success] 텍스트필드의 성공 상태 여부.
 * @param {ReactNode} [helperText] 텍스트필드 아래 추가적인 텍스트.
 * @param {(value: string) => void} [onChange] 외부 활성 상태가 변경될 때 호출될 콜백 함수.
 * @param {() => void} [onBlur] 텍스트필드가 포커스를 잃을 때 호출될 콜백 함수.
 * @param {() => void} [onFocus] 텍스트필드가 포커스됐을 때 호출될 콜백 함수.
 * @param {TextareaHTMLAttributes<HTMLTextAreaElement>} [textareaProps] 텍스트필드에 전달할 추가 textarea 속성.
 * @param {CSSProperties} [style] 텍스트필드의 커스텀 스타일 속성.
 * @param {string} [className] 텍스트필드에 전달하는 커스텀 클래스명.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 * @param {ComponentPropsWithRef<T>["ref"]} ref 렌더링된 요소 또는 컴포넌트에 연결할 ref.
 */
export interface TextFieldProps {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  maxLength?: number;
  error?: boolean;
  success?: boolean;
  helperText?: ReactNode;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  style?: CSSProperties;
  className?: string;
}

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      helperText,
      label,
      onBlur,
      onChange,
      onFocus,
      placeholder = "",
      defaultValue,
      value: valueProp,
      maxLength,
      error = false,
      success = false,
      textareaProps,
      className,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = useState(valueProp ?? defaultValue ?? "");
    const [typingVariant, setTypingVariant] =
      useState<TypingVariantType>("default");

    const id = useId();
    const textareaId = textareaProps?.id || id;
    const errorMessageId = `${textareaId}-error-message`;
    const helperTextId = `${textareaId}-helper-text`;
    const descriptionId = error ? `${errorMessageId}` : `${helperTextId}`;
    const variant = error ? "error" : success ? "success" : typingVariant;

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const textareaElementRef = ref || textareaRef;

    useLayoutEffect(() => {
      if (defaultValue) {
        setTypingVariant("typed");
      }
    }, [defaultValue]);

    useTextareaAutosize(textareaElementRef as RefObject<HTMLTextAreaElement>);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const textareaValue = e.target.value;
      setTypingVariant("typing");

      if (maxLength && textareaValue.length > maxLength) {
        setValue(textareaValue.slice(0, maxLength));
      } else {
        setValue(textareaValue);
        onChange?.(textareaValue);
      }
    };

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      const inputValue = e.target.value;

      setTypingVariant(inputValue ? "typed" : "default");
      onBlur?.();
    };

    const handleFocus = () => {
      if (typingVariant !== "typing") {
        setTypingVariant("typing");
      }
      onFocus?.();
    };

    return (
      <Flex
        className={clsx(className, containerStyle())}
        direction="column"
        gap="xs"
        {...rest}
      >
        <Flex alignItems="flex-end" justifyContent="space-between">
          <Label textareaId={descriptionId} variant={variant}>
            {label}
          </Label>
          {maxLength && (
            <TextLength
              length={value.length}
              maxLength={maxLength}
              variant={variant}
            />
          )}
        </Flex>
        <styled.textarea
          {...textareaProps}
          aria-describedby={descriptionId}
          id={descriptionId}
          maxLength={maxLength}
          placeholder={placeholder}
          ref={textareaElementRef}
          rows={1}
          value={value}
          className={textareaStyle({
            type: variant,
          })}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {helperText && <HelperText variant={variant}>{helperText}</HelperText>}
      </Flex>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;

const Label = ({
  variant,
  children,
  textareaId,
}: {
  variant: VariantType;
  children: string;
  textareaId: string;
}) => (
  <styled.label
    htmlFor={textareaId}
    className={labelStyle({
      type: variant === "default" ? "default" : "focused",
    })}
  >
    {children}
  </styled.label>
);

const TextLength = ({
  variant,
  maxLength,
  length,
}: {
  variant: VariantType;
  maxLength: number;
  length: number;
}) => (
  <styled.span className={textLengthStyle({ type: variant })}>
    {length}/{maxLength}
  </styled.span>
);

const HelperText = ({
  variant,
  children,
}: {
  variant: VariantType;
  children: ReactNode;
}) => (
  <styled.span
    color="sub"
    textStyle="body3"
    className={helperTextStyle({
      type: variant,
    })}
  >
    {children}
  </styled.span>
);

const containerStyle = cva({
  base: {
    lg: {
      minWidth: "19.75rem",
      maxWidth: "40.75rem",
    },
    smDown: {
      width: "100%",
    },
  },
});

const labelStyle = cva({
  base: {
    textStyle: "label2",
  },
  variants: {
    type: {
      default: {
        color: "sub",
      },
      focused: {
        color: "textBlack",
      },
    },
  },
});

const textLengthStyle = cva({
  base: {
    textStyle: "label3",
  },
  variants: {
    type: {
      default: {
        color: "sub",
      },
      typing: {
        color: "primary",
      },
      typed: {
        color: "sub",
      },
      success: {
        color: "success",
      },
      error: {
        color: "error",
      },
    },
  },
});

const textareaStyle = cva({
  base: {
    borderRadius: "sm",
    borderWidth: "button",
    borderStyle: "solid",
    paddingX: "sm",
    paddingY: "xs",
    textStyle: "body1",
    height: "2.625rem",
    maxHeight: "7.5rem",
    overflowY: "hidden",
    resize: "none",
    backgroundColor: "backgroundNormal",
    _placeholder: {
      color: "outline",
    },
    _focus: {
      outline: "none",
    },
    _scrollbar: {
      width: "2px",
    },
    _scrollbarThumb: {
      width: "2px",
      height: "65px",
      borderRadius: "sm",
      backgroundColor: "outline",
    },
    _scrollbarTrack: {
      marginTop: "2px",
      marginBottom: "2px",
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
      success: {
        borderColor: "success",
        color: "textBlack",
      },
      error: {
        borderColor: "error",
        color: "textBlack",
      },
    },
  },
});

const helperTextStyle = cva({
  base: {
    textStyle: "body3",
  },
  variants: {
    type: {
      default: { color: "sub" },
      typing: { color: "sub" },
      typed: { color: "sub" },
      success: { color: "success" },
      error: { color: "error" },
    },
  },
});
