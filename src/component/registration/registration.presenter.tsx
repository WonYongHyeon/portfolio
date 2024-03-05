import { ChangeEvent } from "react";
import * as S from "./registration.styles";

interface Props {
  onChange: (event: ChangeEvent) => void;
  onClickCancel: () => void;
  onClickRegistration: () => void;
}

export default function RegistrationUI(props: Props) {
  return (
    <S.Body>
      <S.Input
        onChange={props.onChange}
        name="title"
        placeholder="이름"
      ></S.Input>
      <S.Input
        onChange={props.onChange}
        name="url"
        placeholder="주소"
      ></S.Input>
      <S.ButtonWrapper>
        <S.Cancel onClick={props.onClickCancel}>취소</S.Cancel>
        <S.Registration onClick={props.onClickRegistration}>
          등록
        </S.Registration>
      </S.ButtonWrapper>
    </S.Body>
  );
}
