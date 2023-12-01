import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  level: number;
}

export const Body = styled.div`
  padding: 5rem auto;
  height: calc(100vh - 11rem);
  @media (max-width: 950px) {
    height: 100%;
  }
`;

export const RotateCanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10vw;
  padding: 10rem 5rem;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Canvas = styled.canvas`
  width: 50vmin;
  height: 50vmin;
  border-radius: 50%;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
`;

export const DescWrapper = styled.aside`
  width: 50vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 950px) {
    width: 70vmin;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const H1 = styled.h1`
  font-size: 4rem;
`;

const ArrowAnimation = keyframes`
  0% {
    scale: 1
  }
  50% {
    scale: 1.5
  }
  100% {
    scale: 1
  }
`;

export const ArrowBefore = styled.img`
  transform: scaleX(-1);
  width: 2rem;
  cursor: pointer;

  :hover {
    animation: ${ArrowAnimation} 1s;
    animation-iteration-count: infinite;
  }
`;

export const ArrowNext = styled.img`
  width: 2rem;
  cursor: pointer;

  :hover {
    animation: ${ArrowAnimation} 1s;
    animation-iteration-count: infinite;
  }
`;

export const ProgressArea = styled.div`
  width: 100%;
  height: 1.5rem;
  background: #e1e1e1;
  border: 3px solid #b1b1b1;
  margin: 2rem auto;
`;

// keyframes
const progress = (level: number) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${level}%;
  }
`;
export const Progress = styled.div`
  height: 100%;
  background: #000;
  animation: ${(props: Props) => progress(props.level)} 2s linear;
  animation-fill-mode: forwards;
`;

export const Desc = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  width: 100%;
  word-wrap: break-word;
`;
