import type { MutableRefObject, Ref } from "react";
import { useRef } from "react";

export function useMergeRefs<T = any>(...refs: (Ref<T> | null | undefined)[]) {
  const internalRef = useRef<T | null>(null);

  const mergedRef = (value: T | null) => {
    internalRef.current = value;

    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(value);
      } else if (typeof ref === "object") {
        (ref as MutableRefObject<T | null>).current = value;
      }
    }
  };

  (mergedRef as typeof mergedRef & { current: T | null }).current =
    internalRef.current;

  return mergedRef as typeof mergedRef & { current: T | null };
}
