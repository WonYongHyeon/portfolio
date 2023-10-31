import axios from "axios";
import TILUI from "./TIL.presenter";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { debounce } from "lodash";

export default function TIL() {
  const [page, setPage] = useState<number>(1);
  const [tilData, setTilData] = useState(
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
    axios
      .get(
        "http://localhost:3002/TIL?page=" + page + "&search=" + inputs.search
      )
      .then(function (response) {
        setTilData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const onClickSearchImg = () => {
    setSearchVisible(!searchVisible);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    //페이지 리로드 방지 및 엔터 시 검색 버튼 활성화
    e.preventDefault();
    onClickSearch();
  };

  const onClickPage = () => {
    setPage(2);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/TIL?page=" + page)
      .then(function (response) {
        setTilData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TILUI
      tilData={tilData}
      searchVisible={searchVisible}
      onChange={onChange}
      onClickSearch={onClickSearch}
      onClickSearchImg={onClickSearchImg}
      onClickPage={onClickPage}
      submitHandler={submitHandler}
    />
  );
}
