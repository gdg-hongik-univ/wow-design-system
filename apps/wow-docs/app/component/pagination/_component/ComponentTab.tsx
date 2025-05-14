"use client";
import Card from "@components/Card";
import Space from "@components/Space";
import Text from "@components/Text";
import { css, cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { DoubleArrow, RightArrow } from "wowds-icons";
import Pagination from "wowds-ui/Pagination";

const ComponentTab = () => {
  return (
    <section aria-label="pagination component tab">
      <Space height={48} />
      <Text as="h2" typo="display2WebPage">
        Component
      </Text>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Pagination
      </Text>
      <Space height={20} />
      <Card style={{ padding: "52px" }}>
        <Pagination pageButtonBackgroundColor="white" totalPages={5} />
      </Card>
      <Space height={40} />
      <Text as="h3" typo="headingWebPage">
        Button
      </Text>
      <Space height={20} />
      <Card style={{ padding: "52px" }}>
        <Flex align="center" gap="xs">
          <button
            style={{ backgroundColor: "white" }}
            className={paginationItemStyle({
              selected: false,
            })}
          >
            1
          </button>
          <button
            data-pressed="true"
            className={paginationItemStyle({
              selected: false,
            })}
          >
            1
          </button>
          <button
            className={paginationItemStyle({
              selected: true,
            })}
          >
            1
          </button>
          <button
            disabled={true}
            className={paginationItemStyle({
              selected: false,
            })}
          >
            1
          </button>
          <button className={paginationButtonStyle}>
            <RightArrow height={20} stroke="outline" width={20} />
          </button>
          <button className={paginationButtonStyle}>
            <DoubleArrow height={20} stroke="outline" width={20} />
          </button>
          <button className={paginationButtonStyle} disabled={true}>
            <RightArrow height={20} stroke="lightDisabled" width={20} />
          </button>
          <button className={paginationButtonStyle} disabled={true}>
            <DoubleArrow height={20} stroke="lightDisabled" width={20} />
          </button>
          <button className={paginationButtonStyle} data-pressed="true">
            <RightArrow height={20} stroke="sub" width={20} />
          </button>
          <button className={paginationButtonStyle} data-pressed="true">
            <DoubleArrow height={20} stroke="sub" width={20} />
          </button>
        </Flex>
      </Card>
      <Space height={80} />
    </section>
  );
};

export default ComponentTab;

const paginationItemStyle = cva({
  base: {
    minWidth: "24px",
    maxHeight: "24px",
    borderRadius: "sm",
    color: "sub",
    boxSizing: "border-box",
    textStyle: "body1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    _pressed: {
      backgroundColor: "monoBackgroundPressed",
      borderColor: "sub",
      border: "1px solid",
    },
    _disabled: {
      backgroundColor: "Background",
      cursor: "not-allowed",
      color: "lightDisabled",
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "Background",
        borderColor: "primary",
        border: "1px solid",
        color: "black",
      },
      false: {
        backgroundColor: "backgroundAlternative",
      },
    },
  },
});

const paginationButtonStyle = css({
  minHeight: "24px",
  minWidth: "24px",
  borderRadius: "sm",
  backgroundColor: "backgroundAlternative",
  color: "sub",
  boxSizing: "border-box",
  textStyle: "body1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  _pressed: {
    backgroundColor: "monoBackgroundPressed",
    borderColor: "sub",
    border: "1px solid",
  },
  _disabled: {
    backgroundColor: "Background",
    cursor: "not-allowed",
  },
});
