import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { clsx } from "clsx";
import { GdscLogo } from "wowds-icons";

import Button from "@/components/Button";
import type { DefaultProps } from "@/types/DefaultProps";

type RightElementType = "username" | "login" | "none";

/**
 * @description 헤더 컴포넌트입니다.
 * 사이트 로고와 로그인 또는 사용자 이름 표시 기능을 포함합니다.
 *
 * @template T
 * @param {"username" | "login" | "none"} [variant] - Header 종류.
 *   - "username": 사용자 이름을 표시.
 *   - "login": 로그인 버튼을 표시.
 *   - "none": 아무것도 표시하지 않음.
 * @param {T extends "username" ? string : never} [username] - variant가 "username"인 경우 표시되는 오른쪽 요소. 사용자가 로그인한 경우 사용자 이름을 표시함.
 * @param {T extends "login" ? () => void : never} [onClick] - 로그인 버튼 클릭 시 호출되는 함수.
 */

export interface HeaderProps<T extends RightElementType> extends DefaultProps {
  variant?: T;
  username?: T extends "username" ? string : never;
  onClick?: T extends "login" ? () => void : never;
}

const Header = ({
  variant = "none",
  username,
  onClick,
  className,
  ...rest
}: HeaderProps<RightElementType>) => {
  return (
    <header
      aria-label="header"
      className={clsx(headerStyle, className)}
      role="banner"
      {...rest}
    >
      <div className={headerContentStyle}>
        <section className={leftElementContainerStyle}>
          <GdscLogo aria-label="gdsc-logo" role="img" />
          <Flex className={logoTextContainerStyle}>
            <h1 className={titleStyle}>GDGoC</h1>
            <h2 className={subTitleStyle}>Hongik Univ.</h2>
          </Flex>
        </section>
        <section>
          {variant === "login" && (
            <Button size="sm" variant="outline" onClick={onClick}>
              로그인/가입하기
            </Button>
          )}
          {variant === "username" && (
            <div aria-label={`${username} 님`} className={usernameTextStyle}>
              {username} 님
            </div>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;

const headerStyle = css({
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  borderBottomColor: "outline",
  height: "54px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  xsToLg: {
    paddingX: "16px",
    height: "66px",
  },
});

const headerContentStyle = css({
  width: "988px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
});

const leftElementContainerStyle = css({
  display: "flex",
  gap: "xs",
  alignItems: "center",
});

const titleStyle = css({
  fontFamily: "Product Sans",
  textStyle: "header1",
});

const subTitleStyle = css({
  fontFamily: "Product Sans",
  color: "primary",
  textStyle: "header2",
});

const usernameTextStyle = css({
  textStyle: "label1",
});

const logoTextContainerStyle = css({
  lg: {
    gap: "xs",
    alignItems: "center",
  },
  xsToLg: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "space-between",
  },
});
