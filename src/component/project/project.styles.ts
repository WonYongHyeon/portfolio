import styled from "@emotion/styled";

export const Body = styled.div`
  padding: 0rem 4rem 5rem 4rem;

  @media (max-width: 800px) {
    padding: 0rem 1rem 5rem 1rem;
  }
`;

export const ProjectWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

export const ProjectCategory = styled.h1`
  font-size: 3rem;
  border-bottom: 1px solid #111;
  padding: 1rem;
  padding-top: 5rem;
  margin-bottom: 1rem;

  @media (max-width: 650px) {
    padding-left: 0.5rem;
  }
`;

export const ProjectTitleDescWrapper = styled.div`
  padding: 1rem 0 1rem 3rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 3rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 2.5rem;
`;

export const ProjectDesc = styled.h3`
  font-size: 1rem;
`;

export const ProjectSkill = styled.h4`
  font-size: 1.5rem;
  padding-left: 4rem;
  @media (max-width: 800px) {
    padding-left: 2rem;
  }
`;

export const ProjectDone = styled.p`
  font-size: 1.3rem;
  white-space: pre-wrap;
  padding: 1rem 0 1rem 5rem;
  line-height: 2rem;

  @media (max-width: 800px) {
    padding-left: 2.5rem;
  }
`;

export const ProjectYoutubeWrapper = styled.div`
  height: 390px;
  /* width: 900px; */
  /* padding: 0rem 0rem 20rem 5rem; */
  padding: 0rem 0rem 0rem 5rem;

  @media (max-width: 800px) {
    padding: 0rem 0rem 2rem 2rem;
    width: auto;
  }
  @media (max-width: 650px) {
    padding: 2rem 1rem;
  }
`;
