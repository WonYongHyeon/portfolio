import styled from "@emotion/styled";

export const Body = styled.div`
  padding: 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4rem;

  font-size: 2rem;
  color: #1b1b19;
`;

export const List = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 2rem;
  width: 200px;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  :hover {
    color: blueviolet;
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const DivideLine = styled.div`
  margin: 1rem 0;
  background-color: #938f87;
  height: 2px;
`;

export const PaginationSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  align-items: center;
  margin-top: 2rem;
`;

export const PaginationWrapper = styled.ul`
  display: flex;
  width: 5rem;
  gap: 1rem;
`;

export const Page = styled.ul`
  :hover {
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchBoxWrapper = styled.form`
  display: inline-flex;
  height: 1.5em;
  border: 3px solid black;
  display: inline-flex;

  :focus-within {
    box-shadow: 0 0 3px gold;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: #fff;
  transition: background-color 300ms;
  width: 10rem;
`;

export const SearchButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  border: none;
  border-left: 3px solid black;
  color: white;
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 2rem;

  :hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
