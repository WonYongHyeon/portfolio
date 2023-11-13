import { Link } from "react-router-dom";
import * as S from "./TIL.styles";
import { ChangeEventHandler, FormEvent } from "react";
import Lens from "../../assets/lens.svg";
import Registration from "../../assets/writeIcon.png";

interface Props {
  tilList: Array<{
    order: string;
    title: string;
    link: string;
  }>;
  searchVisible: boolean;
  pageLength: number;

  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSearch: () => void;
  onClickSearchImg: () => void;
  onClickPage: (event) => void;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

export default function TILUI(props: Props) {
  return (
    <S.Body>
      <S.ListWrapper>
        {props.tilList &&
          props.tilList.map((el, idx) => {
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
      {props.tilList.length !== 0 || (
        <S.NoList>
          <p>검색 결과가 없습니다.</p>
        </S.NoList>
      )}
      <S.PaginationSearchWrapper>
        <S.PaginationWrapper>
          {new Array(props.pageLength).fill(1).map((_, idx) => {
            return (
              <S.Page key={idx} onClick={props.onClickPage}>
                {idx + 1}
              </S.Page>
            );
          })}
        </S.PaginationWrapper>
        <S.SearchWrapper>
          {props.searchVisible && (
            <S.SearchBoxWrapper onSubmit={props.submitHandler}>
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
          <S.Img src={Lens} onClick={props.onClickSearchImg} />
          <a href="/TIL/registration">
            <S.Img src={Registration}></S.Img>
          </a>
        </S.SearchWrapper>
      </S.PaginationSearchWrapper>
    </S.Body>
  );
}
