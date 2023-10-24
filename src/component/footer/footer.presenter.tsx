import * as S from "./footer.styles";

export default function FooterUI() {
  return (
    <S.Body>
      <S.Wrapper>
        <S.FooterLogo>Portfolio</S.FooterLogo>
        <S.FooterInformation>
          <li>Email : quin1392@gmail.com</li>
          <li>Phone : 010-7272-5428</li>
          <li>Github : https://github.com/WonYongHyeon</li>
          <li>velog : https://velog.io/@quin1392</li>
        </S.FooterInformation>
      </S.Wrapper>
    </S.Body>
  );
}
