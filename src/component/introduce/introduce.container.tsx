import { useEffect, useState } from "react";
import IntroduceUI from "./introduce.presenter";
import axios from "axios";

interface Data {
  introduceData: {
    title: string;
    subtitle: string;
    desc: Array<string>;
  }[];
  aboutData: {
    title: string;
    desc: string;
  }[];
  etcData: {
    title: string;
    desc: string;
    link: string;
  }[];
}

export default function Introduce() {
  const [data, setData] = useState<Data>();

  const onClickLink = (event) => {
    window.location.href = event.currentTarget.innerText;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        // handle error
      });
  }, []);

  return <IntroduceUI data={data} onClickLink={onClickLink}></IntroduceUI>;
}
