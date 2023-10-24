import styled from "@emotion/styled";

export const Body = styled.div`
  padding: 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  width: 20rem;
  height: 3rem;
  font-size: 1.5rem;
  padding: 0 1rem;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 1rem 10rem;
`;

export const LensImg = styled.img`
  width: 3rem;
  height: 3rem;

  :hover {
    cursor: pointer;
    scale: 1.1;
  }
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
