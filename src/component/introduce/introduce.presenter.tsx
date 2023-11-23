import * as S from "./introduce.styles";

interface Props {
  data: {
    title: string;
    subtitle: string;
    desc: string;
  }[];
  aboutData: {
    title: string;
    desc: string;
  }[];
  etcData: {
    title: string;
    desc: string;
    link: string;
  }[];
  onClickLink: (event) => void;
}

export default function IntroduceUI(props: Props) {
  return (
    <S.Body>
      <S.Wrapper>
        {props.data.map((el, index) => {
          return (
            <S.IntroWrapper key={index}>
              <S.Title>{el.title}</S.Title>
              <S.SubTitle>{el.subtitle}</S.SubTitle>
              <S.Desc>{el.desc}</S.Desc>
            </S.IntroWrapper>
          );
        })}
        <div>
          <S.Title>About</S.Title>
          {props.aboutData.map((el, index) => {
            return (
              <S.IntroWrapper key={index}>
                <S.SubTitle>{el.title}</S.SubTitle>
                <S.Desc>{el.desc}</S.Desc>
              </S.IntroWrapper>
            );
          })}
        </div>
        <div style={{ width: "100%" }}>
          <S.Title>ETC</S.Title>
          {props.etcData.map((el, index) => {
            return (
              <S.IntroWrapper key={index}>
                <S.SubTitle>{el.title}</S.SubTitle>
                <S.etcDesc>{el.desc}</S.etcDesc>
                <S.etcLink onClick={props.onClickLink}>{el.link}</S.etcLink>
              </S.IntroWrapper>
            );
          })}
        </div>
      </S.Wrapper>
    </S.Body>
  );
}
