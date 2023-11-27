import { useEffect, useMemo, useRef, useState } from "react";
import HeaderUI from "./header.presenter";
import { throttle } from "lodash";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const beforeScrollY = useRef(0);

  const [visible, setVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  const onClickLink = (link: string) => {
    setMenuVisible(false);
    navigate(link);
  };

  const onClickMenu = () => {
    setMenuVisible((prev) => !prev);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderUI
      visible={visible}
      menuVisible={menuVisible}
      onClickLink={onClickLink}
      onClickMenu={onClickMenu}
    ></HeaderUI>
  );
}
