import styled from "@emotion/styled";

export const Body = styled.div`
  padding: 5rem 4rem;
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
  margin-bottom: 1rem;
`;

export const ProjectTitleDescWrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 3rem;
`;

export const ProjectTitle = styled.h2`
  font-size: 2.5rem;
`;

export const ProjectDesc = styled.h3`
  font-size: 1rem;
`;

export const ProjectSkill = styled.h4`
  font-size: 1.5rem;
  padding: 0 4rem;
`;

export const ProjectDone = styled.p`
  font-size: 1.3rem;
  white-space: pre-wrap;
  padding: 1rem 5rem;
  line-height: 2rem;
`;
