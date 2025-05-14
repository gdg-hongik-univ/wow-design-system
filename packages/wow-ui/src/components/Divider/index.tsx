import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { CSSProperties } from "react";

/**
 * @description 디바이더 컴포넌트의 속성을 정의합니다.
 *
 * @param {"light" | "dark"} [type] 디바이더의 테마 모드를 설정합니다.
 * @param {CSSProperties} [style] 디바이더의 커스텀 스타일을 설정합니다.
 * @param {string} [className] 디바이더에 전달하는 커스텀 클래스를 설정합니다.
 * @param {ComponentPropsWithoutRef<T>} rest 렌더링된 요소 또는 컴포넌트에 전달할 추가 props.
 */
export interface DividerProps {
  type?: "light" | "dark";
  style?: CSSProperties;
  className?: string;
}

const Divider = ({ type = "light", className, ...rest }: DividerProps) => {
  return (
    <styled.div
      className={clsx(
        className,
        dividerStyle({
          type,
        })
      )}
      {...rest}
    />
  );
};

Divider.displayName = "Divider";

export default Divider;

const dividerStyle = cva({
  base: {
    width: "100%",
    height: "0.075rem",
    borderRadius: "100%",
  },
  variants: {
    type: {
      light: {
        bgColor: "lightDisabled",
      },
      dark: {
        bgColor: "darkDisabled",
      },
    },
  },
});
