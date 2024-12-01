import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = () => {
  const {pathname} = useLocation();
  // debug
  console.log("ScrollToTop.js: pathname = ", pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;