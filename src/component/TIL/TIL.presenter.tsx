// import { Link } from "react-router-dom";
import * as S from "./TIL.styles";
import { ChangeEventHandler, FormEvent } from "react";
import Lens from "../../assets/lens.svg";
import Registration from "../../assets/writeIcon.png";
import Delete from "../../assets/delete.png";
import ListDelete from "../../assets/delete_x.png";

interface Props {
  tilList: Array<{
    id: string;
    order: string;
    title: string;
    link: string;
  }>;
  searchVisible: boolean;
  pageLength: number;
  activationDelete: boolean;

  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSearch: () => void;
  onClickSearchImg: () => void;
  onClickPage: (event) => void;
  onClickDeleteActivation: () => void;
  onClickList: (id, link) => void;

  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

export default function TILUI(props: Props) {
  return (
    <S.Body>
      <S.ListWrapper>
        {props.tilList &&
          props.tilList.map((el, idx) => {
            return (
              <S.List
                key={el.id}
                onClick={() => props.onClickList(el.id, el.link)}
              >
                <S.OrderWrapper>
                  <p>{el.order}</p>
                  {props.activationDelete && (
                    <S.ListDeleteButton src={ListDelete} />
                  )}
                </S.OrderWrapper>
                <S.DivideLine />
                <p>{el.title}</p>
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
          <S.Img src={Delete} onClick={props.onClickDeleteActivation}></S.Img>
        </S.SearchWrapper>
      </S.PaginationSearchWrapper>
    </S.Body>
  );
}
