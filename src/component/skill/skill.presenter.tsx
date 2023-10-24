import { LegacyRef } from "react";
import * as S from "./skill.styles";
import arrow from "../../assets/arrow.png";

interface Props {
  canvasRef: LegacyRef<HTMLCanvasElement>;
  selected: {
    title: string;
    level: number;
    desc: string;
  };
  onClickArrowBefore: () => void;
  onClickArrowNext: () => void;
}

export default function SkillUI(props: Props) {
  return (
    <S.Body>
      <S.RotateCanvasWrapper>
        <S.Canvas ref={props.canvasRef}></S.Canvas>
        <S.DescWrapper>
          <S.TitleWrapper>
            <S.ArrowBefore
              src={arrow}
              onClick={props.onClickArrowBefore}
            ></S.ArrowBefore>
            <S.H1>{props.selected.title}</S.H1>
            <S.ArrowNext
              src={arrow}
              onClick={props.onClickArrowNext}
            ></S.ArrowNext>
          </S.TitleWrapper>
          <S.ProgressArea>
            <S.Progress level={props.selected.level}></S.Progress>
          </S.ProgressArea>
          <S.Desc>{props.selected.desc}</S.Desc>
        </S.DescWrapper>
      </S.RotateCanvasWrapper>
    </S.Body>
  );
}
