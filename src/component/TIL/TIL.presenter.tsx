import { Link } from "react-router-dom";
import * as S from "./TIL.styles";
import { ChangeEventHandler } from "react";

interface Props {
  tilData: Array<{
    order: string;
    title: string;
    link: string;
  }>;
  searchVisible: boolean;

  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSearch: () => void;
  onClickSearchImg: () => void;
}

export default function TILUI(props: Props) {
  return (
    <S.Body>
      <S.ListWrapper>
        {props.tilData &&
          props.tilData.map((el, idx) => {
            return (
              <S.List key={idx}>
                <Link
                  to={el.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>{el.order}</p>
                  <S.DivideLine />
                  <p>{el.title}</p>
                </Link>
              </S.List>
            );
          })}
      </S.ListWrapper>
      {props.searchVisible && (
        <S.SearchWrapper>
          <S.SearchInput
            name="search"
            onChange={props.onChange}
          ></S.SearchInput>
          <button onClick={props.onClickSearch}>검색</button>
        </S.SearchWrapper>
      )}
      <S.LensImg src="/src/assets/lens.svg" onClick={props.onClickSearchImg} />
    </S.Body>
  );
}
