import axios from "axios";
import TILUI from "./TIL.presenter";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { debounce } from "lodash";

export default function TIL() {
  const [page, setPage] = useState<number>(1);
  const [pageLength, setPageLength] = useState(0);
  const [tilList, setTilList] = useState(
    Array<{
      order: string;
      title: string;
      link: string;
    }>
  );
  const [inputs, setInputs] = useState({
    search: "",
  });
  const [searchVisible, setSearchVisible] = useState(false);

  const onChange = (event: ChangeEvent) => {
    debounceChange(event);
  };

  const debounceChange = debounce((event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }, 300);

  const onClickSearch = () => {
    getTilList(page, inputs.search);
  };

  const onClickSearchImg = () => {
    setSearchVisible(!searchVisible);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    //페이지 리로드 방지 및 엔터 시 검색 버튼 활성화
    e.preventDefault();
    onClickSearch();
  };

  const onClickPage = (event) => {
    const selectedPage = event.currentTarget.textContent;

    setPage(selectedPage);
    getTilList(selectedPage, inputs.search);
  };

  const getTilList = (page: number, search: string) => {
    axios
      .get("http://localhost:3002/TIL?page=" + page + "&search=" + search)
      .then(function (response) {
        setTilList(response.data.tilList);
        setPageLength(response.data.pageLength);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    getTilList(page, inputs.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TILUI
      tilList={tilList}
      searchVisible={searchVisible}
      pageLength={pageLength}
      onChange={onChange}
      onClickSearch={onClickSearch}
      onClickSearchImg={onClickSearchImg}
      onClickPage={onClickPage}
      submitHandler={submitHandler}
    />
  );
}
