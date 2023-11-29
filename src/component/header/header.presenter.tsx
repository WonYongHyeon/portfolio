import * as S from "./header.styles";
import Menu from "../../assets/menu.png";

interface Props {
  visible: boolean;
  menuVisible: boolean;
  menuActivation: boolean;

  onClickLink: (link: string) => void;
  onClickMenu: () => void;
}

export default function HeaderUI(props: Props) {
  return (
    <S.Header visible={props.visible}>
      <S.Logo onClick={() => props.onClickLink("/")}>Portfolio</S.Logo>
      <S.MenuButton src={Menu} onClick={props.onClickMenu} />
      <S.HeaderLinkWrapper>
        <S.HeaderLinkList onClick={() => props.onClickLink("/TIL")}>
          TIL
        </S.HeaderLinkList>
        <S.HeaderLinkList onClick={() => props.onClickLink("/skill")}>
          Skill
        </S.HeaderLinkList>
        <S.HeaderLinkList onClick={() => props.onClickLink("/project")}>
          Project
        </S.HeaderLinkList>
        <S.HeaderLinkList>Github</S.HeaderLinkList>
      </S.HeaderLinkWrapper>
      <S.MenuWrapper
        menuVisible={props.menuVisible}
        menuActivation={props.menuActivation}
      >
        <S.MenuCancelWrapper>
          <S.MenuCancel onClick={props.onClickMenu}>x</S.MenuCancel>
        </S.MenuCancelWrapper>
        <S.MenuLinkWrapper>
          <S.MenuLink onClick={() => props.onClickLink("/TIL")}>TIL</S.MenuLink>
          <S.MenuLink onClick={() => props.onClickLink("/skill")}>
            Skill
          </S.MenuLink>
          <S.MenuLink onClick={() => props.onClickLink("/project")}>
            Project
          </S.MenuLink>
          <S.MenuLink>Github</S.MenuLink>
        </S.MenuLinkWrapper>
      </S.MenuWrapper>
    </S.Header>
  );
}
