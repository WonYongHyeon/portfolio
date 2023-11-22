import * as S from "./header.styles";

interface Props {
  visible: boolean;

  onClickLink: (link: string) => void;
}

export default function HeaderUI(props: Props) {
  return (
    <S.Header visible={props.visible}>
      <S.Logo onClick={() => props.onClickLink("/")}>Portfolio</S.Logo>
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
    </S.Header>
  );
}
