import YouTube, { YouTubeProps } from "react-youtube";
import * as S from "./project.styles";

interface Props {
  opts: YouTubeProps["opts"];
  projectData: Array<{
    category: string;
    title: string;
    desc: string;
    skill: string;
    done: string;
    youtubeId?: string;
  }>;
}

export default function ProjectUI(props: Props) {
  return (
    <S.Body>
      {props.projectData?.map((el, idx) => {
        return (
          <S.ProjectWrapper key={idx}>
            <S.ProjectCategory>{el.category}</S.ProjectCategory>
            <S.ProjectTitleDescWrapper>
              <S.ProjectTitle>{el.title}</S.ProjectTitle>
              <S.ProjectDesc>{el.desc}</S.ProjectDesc>
            </S.ProjectTitleDescWrapper>
            <S.ProjectSkill>{el.skill}</S.ProjectSkill>
            <S.ProjectDone>{`${el.done}`}</S.ProjectDone>
            {el.category === "Team Project" && (
              <S.ProjectYoutubeWrapper>
                <YouTube
                  videoId={el.youtubeId}
                  opts={props.opts}
                  // style={{ padding: "2rem 5rem 10rem 5rem" }}
                />
              </S.ProjectYoutubeWrapper>
            )}
          </S.ProjectWrapper>
        );
      })}
    </S.Body>
  );
}
