import { useEffect, useMemo, useRef, useState } from "react";
import HeaderUI from "./header.presenter";
import { throttle } from "lodash";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);

  const onClickLink = (link: string) => {
    navigate(link);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (beforeScrollY.current < currentScrollY && currentScrollY > 50) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        beforeScrollY.current = currentScrollY;
      }, 250),
    [beforeScrollY]
  );

  return <HeaderUI visible={visible} onClickLink={onClickLink}></HeaderUI>;
}
