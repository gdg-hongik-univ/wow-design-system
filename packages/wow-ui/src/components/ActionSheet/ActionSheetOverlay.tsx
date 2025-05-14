import { styled } from "@styled-system/jsx";

const ActionSheetOverlay = () => {
  return (
    <styled.div
      backgroundColor="backgroundDimmer"
      height="100vh"
      left={0}
      position="fixed"
      top={0}
      width="100vw"
      zIndex="overlay"
    />
  );
};

export default ActionSheetOverlay;
