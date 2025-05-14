import { useCallback, useState } from "react";

const useOpenState = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => setOpen(() => true), []);
  const onClose = useCallback(() => setOpen(() => false), []);

  return {
    open,
    setOpen,
    onOpen,
    onClose,
  };
};

export default useOpenState;
