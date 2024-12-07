import { useEffect } from "react";

export default function useDisableBodyScroll(state) {
  useEffect(() => {
    document.body.style.overflow = state ? "hidden" : "auto";
    document.body.style.height = state ? "100vh" : "auto";
  }, [state]);

  return null;
}
