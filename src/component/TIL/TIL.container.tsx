import axios from "axios";
import TILUI from "./TIL.presenter";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { debounce } from "lodash";

export default function TIL() {
  const [page, setPage] = useState<number>(1);
  const [pageLength, setPageLength] = useState(0);
  const [tilList, setTilList] = useState(
    Array<{
      id: string;
      order: string;
      title: string;
      link: string;
    }>
  );
  const [inputs, setInputs] = useState({
    search: "",
  });
  const [searchVisible, setSearchVisible] = useState(false);
  const [activationDelete, setActivationDelete] = useState(false);

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

  /** 검색 버튼 클릭 이벤트 */
  const onClickSearch = () => {
    setPage(1);
    getTilList(1, inputs.search);
  };

  /** 검색 이미지 클릭 이벤트 */
  const onClickSearchImg = () => {
    setSearchVisible(!searchVisible);
  };

  /** 페이지 리로드 방지 및 엔터 시 검색 버튼 활성화 */
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickSearch();
  };

  /** Pagination 클릭 이벤트 */
  const onClickPage = (event) => {
    const selectedPage = event.currentTarget.textContent;

    setPage(selectedPage);
    getTilList(selectedPage, inputs.search);
  };

  /** 서버에서 TIL 리스트를 받아오는 함수 */
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

  /** 리스트 삭제 버튼을 활성화 */
  const onClickDeleteActivation = () => {
    setActivationDelete((prev) => !prev);
  };

  /** 리스트 클릭 이벤트
   * activationDelete === true  리스트 삭제
   * activationDelete === false TIL로 이동
   */
  const onClickList = (id: string, link: string) => {
    // console.log(event.currentTarget);
    // const id = event.currentTarget.id;

    if (!activationDelete) {
      window.location.href = link;
    } else {
      listDelete(id);
    }
  };

  /** 리스트 삭제 이벤트 */
  const listDelete = (id: string) => {
    axios
      .delete("http://localhost:3002/TIL?id=" + id)
      .then(function (response) {
        console.log(response);
        getTilList(1, "");
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
      activationDelete={activationDelete}
      onChange={onChange}
      onClickSearch={onClickSearch}
      onClickSearchImg={onClickSearchImg}
      onClickPage={onClickPage}
      onClickDeleteActivation={onClickDeleteActivation}
      onClickList={onClickList}
      submitHandler={submitHandler}
    />
  );
}
