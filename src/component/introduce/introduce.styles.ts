import styled from "@emotion/styled";

export const Body = styled.div`
  padding: 3rem auto;

  @media (max-width: 768px) {
    padding-top: 3rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  padding: 4rem;
  /* width: 100%; */

  @media (max-width: 600px) {
    padding: 1rem;
    padding-top: 0rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-top: 0rem;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid #1b1b1b;
  width: 100%;
  padding-bottom: 1rem;
`;

export const SubTitle = styled.h2`
  width: 100%;
  font-size: 1.5rem;
  margin: 1rem auto;
`;

export const Desc = styled.p`
  width: 100%;
  font-size: 1.1rem;
  white-space: pre-wrap;
  line-height: 2rem;
  margin: 0 1.7rem;
  margin-bottom: 2rem;
`;

export const etcDesc = styled.p`
  width: 100%;
  font-size: 1.1rem;
  width: 100%;
  white-space: pre-wrap;
  line-height: 2rem;
  margin-left: 1.7rem;
`;

export const etcLink = styled.p`
  width: 100%;
  font-size: 1.1rem;
  white-space: pre-wrap;
  line-height: 2rem;
  margin-left: 1.7rem;

  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
