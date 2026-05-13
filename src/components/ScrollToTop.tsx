import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    // disable browser scroll restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // force top instantly
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

  }, [pathname]);

  return null;
}