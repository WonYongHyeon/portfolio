import styled from "@emotion/styled";

interface PageProps {
  page: number;
  idx: number;
}

export const Body = styled.div`
  padding: 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 11rem);

  @media (max-width: 900px) {
    padding: 1.5rem;
    padding-top: 5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    padding-top: 5rem;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 4rem;

  font-size: 2rem;
  color: #1b1b19;
`;

export const List = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 2rem;
  width: 250px;
  display: flex;
  flex-direction: column;

  :hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
    cursor: pointer;
  }
`;

export const NoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20rem;
  font-size: 5rem;
  color: #1b1b19;
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ListDeleteButton = styled.img`
  width: 2rem;
  height: 2rem;

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
  font-weight: ${(props: PageProps) =>
    props.idx + 1 === props.page ? "bold" : "normal"};

  :hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;
export const PageArrow = styled.ul`
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    font-weight: bold;
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
