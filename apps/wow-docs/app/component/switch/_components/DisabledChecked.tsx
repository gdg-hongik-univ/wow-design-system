import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";

const DisabledChecked = () => {
  return (
    <Flex alignItems="center" display="inline-flex" gap="xs">
      <styled.label className={labelStyle}>
        <SwitchIcon />
      </styled.label>
    </Flex>
  );
};

export default DisabledChecked;

const SwitchIcon = () => {
  return <span className={switchIconStyle} />;
};

const labelStyle = css({
  width: "3.25rem !important",
  height: "1.75rem !important",
  borderRadius: "full",
  cursor: "default",
  display: "flex",
  position: "relative",
  bgColor: "lightDisabled",
});

const switchIconStyle = css({
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "50%",
  position: "absolute",
  top: "0.125rem",
  left: "1.625rem",
  bg: "darkDisabled",
});
