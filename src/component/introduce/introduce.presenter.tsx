import * as S from "./introduce.styles";

interface Props {
  data: {
    introduceData: {
      title: string;
      subtitle: string;
      desc: Array<string>;
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
  };

  onClickLink: (event) => void;
}

export default function IntroduceUI(props: Props) {
  return (
    <S.Body>
      <S.Wrapper>
        {props.data &&
          props.data.introduceData.map((el, index) => {
            return (
              <S.IntroWrapper key={index}>
                <S.Title>{el.title}</S.Title>
                <S.SubTitle>{el.subtitle}</S.SubTitle>
                {el.desc.map((el) => {
                  return <S.Desc>{el}</S.Desc>;
                })}
                {/* <S.Desc>{el.desc}</S.Desc> */}
              </S.IntroWrapper>
            );
          })}
        <div>
          <S.Title>About</S.Title>
          {props.data &&
            props.data.aboutData.map((el, index) => {
              return (
                <S.IntroWrapper key={index}>
                  <S.SubTitle>{el.title}</S.SubTitle>
                  <S.AboutDesc>{el.desc}</S.AboutDesc>
                </S.IntroWrapper>
              );
            })}
        </div>
        <div style={{ width: "100%" }}>
          <S.Title>ETC</S.Title>
          {props.data &&
            props.data.etcData.map((el, index) => {
              return (
                <S.IntroWrapper key={index}>
                  <S.SubTitle>{el.title}</S.SubTitle>
                  <S.EtcDesc>{el.desc}</S.EtcDesc>
                  <S.EtcLink onClick={props.onClickLink}>{el.link}</S.EtcLink>
                </S.IntroWrapper>
              );
            })}
        </div>
      </S.Wrapper>
    </S.Body>
  );
}
