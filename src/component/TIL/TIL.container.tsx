import axios from "axios";
import TILUI from "./TIL.presenter";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { debounce } from "lodash";

export default function TIL() {
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
      .get("http://localhost:3002/TIL?search=" + inputs.search)
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
    //1. 페이지 리로드 방지
    e.preventDefault();
    onClickSearch();
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/TIL")
      .then(function (response) {
        setTilData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <TILUI
      tilData={tilData}
      searchVisible={searchVisible}
      onChange={onChange}
      onClickSearch={onClickSearch}
      onClickSearchImg={onClickSearchImg}
      submitHandler={submitHandler}
    />
  );
}
