import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollTop({ children }) {
  const loc = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [loc]);

  return <>{children}</>;
}

export default ScrollTop;
