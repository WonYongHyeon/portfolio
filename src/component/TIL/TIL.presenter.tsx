import { Link } from "react-router-dom";
import * as S from "./TIL.styles";
import { ChangeEventHandler } from "react";
import Lens from "../../assets/lens.svg";

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
      <S.PaginationSearchWrapper>
        <S.PaginationWrapper>1 2 3 4</S.PaginationWrapper>
        <S.SearchWrapper>
          {props.searchVisible && (
            <S.SearchBoxWrapper onSubmit={props.onClickSearch}>
              <S.SearchInput
                type="search"
                name="search"
                onChange={props.onChange}
              ></S.SearchInput>
              <S.SearchButton type="button" onClick={props.onClickSearch}>
                검색
              </S.SearchButton>
            </S.SearchBoxWrapper>
          )}
          <S.LensImg src={Lens} onClick={props.onClickSearchImg} />
        </S.SearchWrapper>
      </S.PaginationSearchWrapper>
    </S.Body>
  );
}
