import { YouTubeProps } from "react-youtube";
import ProjectUI from "./project.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [projectData, setProjectData] = useState(
    Array<{
      category: string;
      title: string;
      desc: string;
      skill: string;
      done: string;
      youtubeId: string;
    }>
  );

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/project")
      .then((res) => {
        setProjectData(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return <ProjectUI opts={opts} projectData={projectData}></ProjectUI>;
}
