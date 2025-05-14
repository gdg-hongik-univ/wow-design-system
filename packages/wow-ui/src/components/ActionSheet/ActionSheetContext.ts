import { createContext } from "react";

import useSafeContext from "../../hooks/useSafeContext";

export interface ActionSheetContextProps {
  onClose: () => void;
}

export const ActionSheetContext = createContext<ActionSheetContextProps | null>(
  null
);

export const useActionSheetContext = () => {
  const context = useSafeContext(ActionSheetContext);
  return context;
};
