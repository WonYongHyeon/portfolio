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

  cursor: pointer;
`;

export const MenuButton = styled.img`
  display: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const HeaderLinkWrapper = styled.ul`
  display: flex;
  gap: 0.7rem;
  align-items: flex-end;
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderLinkList = styled.li`
  :hover {
    color: blueviolet;
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

const fadeIn = keyframes`
 0% {
  right: -20rem;
    opacity: 0;
  }

  100% {
    right: 0rem;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
 0% {
    opacity: 1;
    right: 0rem;
  }

  100% {
    opacity: 0;
    right: -20rem;
  }
`;

interface MenuProps {
  menuVisible: boolean;
  menuActivation: boolean;
}

export const MenuWrapper = styled.div`
  width: 20rem;
  position: fixed;
  /* display: flex; */
  display: ${(props: MenuProps) => (props.menuActivation ? "flex" : "none")};
  flex-direction: column;
  height: 100vh;
  right: -20rem;
  color: white;
  font-size: 3rem;
  text-align: right;
  background-color: #2a2a2b;
  transition: all 1s ease-out;
  animation: ${(props: MenuProps) => (props.menuVisible ? fadeIn : fadeOut)} 1s
    forwards ease-out;
`;

export const MenuCancelWrapper = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const MenuCancel = styled.p`
  height: 3rem;
  padding: 1rem;
  cursor: pointer;
`;

export const MenuLinkWrapper = styled.ul`
  color: white;
  font-size: 3rem;
  text-align: left;
  width: 0;
`;

export const MenuLink = styled.li`
  padding: 1rem;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;
