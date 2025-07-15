// src/hook/BlockNavigate.js
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useNavigationBlocker = (shouldBlock) => {
  useEffect(() => {
    if (!shouldBlock) return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const handlePopState = (e) => {
      e.preventDefault();
      toast.error("If You Refresh Than U Loose")
      window.history.pushState(null, "", window.location.href);
    };

    window.history.pushState(null, "", window.location.href);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [shouldBlock]);
};
