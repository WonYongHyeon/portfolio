import styled from "@emotion/styled";

export const Body = styled.footer`
  width: 100%;
  height: 6rem;
  background-color: #1b1b19;
  color: #fff;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
  padding-left: 1rem;
`;

export const FooterLogo = styled.h1`
  font-size: 2.5rem;
`;

export const FooterInformation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-size: 0.8rem;
`;
