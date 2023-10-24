import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  visible: boolean;
}

const visible = keyframes`
    0% {
        opacity : 0;
       transform: translateY(-5rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0)
    }
  `;

const unVisible = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
  to {
    opacity: 0;
      transform: translateY(-5rem)
    }
`;

export const Header = styled.header`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #938f87;
  display: flex;
  justify-content: space-between;
  position: fixed;
  /* position: relative; */
  animation: ${(props: Props) => (props.visible ? visible : unVisible)} 0.8s;
  animation-fill-mode: forwards;
  background-color: #c7c2b8;
`;

export const Logo = styled.h1`
  font-size: 3rem;
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  font-weight: 700;
`;

export const HeaderLinkWrapper = styled.ul`
  display: flex;
  gap: 0.7rem;
  align-items: flex-end;
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

const linkScale = keyframes`
  from {
    scale: 1;
  }
  to {
    scale: 1.1;
  }
`;

export const HeaderLinkList = styled.li`
  :hover {
    color: blueviolet;
    /* transform: ${linkScale} 1s; */
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const HeaderLink = styled.link`
  text-decoration-line: none;
`;
