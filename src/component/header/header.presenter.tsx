import { Link } from "react-router-dom";
import * as S from "./header.styles";

interface Props {
  visible: boolean;
}

export default function HeaderUI(props: Props) {
  return (
    <S.Header visible={props.visible}>
      <S.Logo>Portfolio</S.Logo>
      <S.HeaderLinkWrapper>
        <Link to="/TIL" style={{ textDecoration: "none", color: "black" }}>
          <S.HeaderLinkList>TIL</S.HeaderLinkList>
        </Link>
        <Link to="/skill" style={{ textDecoration: "none", color: "black" }}>
          <S.HeaderLinkList>Skill</S.HeaderLinkList>
        </Link>
        <Link to="/project" style={{ textDecoration: "none", color: "black" }}>
          <S.HeaderLinkList>Project</S.HeaderLinkList>
        </Link>
        <S.HeaderLinkList>Github</S.HeaderLinkList>
      </S.HeaderLinkWrapper>
    </S.Header>
  );
}
