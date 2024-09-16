import { styled } from "@styled-system/jsx";

const ActionSheetBackground = () => {
  return (
    <styled.div
      backgroundColor="backgroundDimmer"
      height="100vh"
      left={0}
      position="fixed"
      top={0}
      width="100vw"
      zIndex={9998}
    />
  );
};

export default ActionSheetBackground;
