import { useEffect, useState } from "react";
import IntroduceUI from "./introduce.presenter";
import axios from "axios";

// const data = [
//   {
//     title: "Introduce",
//     subtitle:
//       "안녕하세요. 모든 사람이 쉽게 사용할 수 있는 웹을 지향하는 개발자 원용현입니다.",
//     desc: `    ● React, Next.js, Styled-component를 활용한 웹 개발 경험이 있습니다.
//     ● 대학 졸업 후 다시 한번 개발에 도전하고 싶다는 마음으로 12주 과정 웹 개발 부트캠프인 코드캠프를 수료하였습니다.
//     ● 수료 이후에는 부트캠프에서 다루었던 프로젝트를 리팩토링 하기 위하여 CSS 애니메이션에 대해 공부하고, 배운 것을 적용한 새로운 포트폴리오를 제작하였습니다. 사람들과 소통하고, 알려주는 것을 좋아하여 팀 프로젝트를 진행하며 많은 부분에서 팀원들에게 도움을 주었습니다.`,
//   },
//   {
//     title: "University",
//     subtitle: "한국공학대학교(구 한국산업기술대학교)",
//     desc: `    ● 컴퓨터공학부 소프트웨어공학과
//     ● 학점 : 4.03 / 4.5`,
//   },
// ];

// const aboutData = [
//   {
//     title: "소통하는 개발자를 지향합니다.",
//     desc: `이전에 일을 하며 저는 나와 다른 사람들의 차이를 이해하는 것을 배웠고, 내가 아는 것을 저 사람은 잘 모를 수 있다는 것을 배웠습니다.
//  부트캠프에서 진행한 프로젝트에서 웹 프론트엔드 개발을 하며 기획, UI / UX, 기능 등을 직접 구현했습니다.
//  프로젝트를 진행하며 많은 결정과 의견을 제시하고, 매일 1시간 씩 회의를 진행하며 팀 구성원들의 의견을 듣고, 받아들이며 프로젝트의 방향을 수정, 보완해나갔습니다.
//  그 결과 처음 기획 했던 프로젝트보다 더 나은 프로젝트를 완성할 수 있었고, 이 시간과 경험은 개발자로써 더 성장할 수 있는 계기가 되었습니다.`,
//   },
//   {
//     title: "직관적이고 명확한, 가독성이 좋은 코드를 지향합니다.",
//     desc: ` 평소 생활에서 얻은 경험 중 하나는 직관적이고 명확하지 않으면 이해하기 어렵고, 오해가 발생한다는 것입니다.
//  사람마다 인지할 수 있는 범위, 이해할 수 있는 정보가 모두 다르기 때문에, 보편적으로 이해할 수 있도록 하는 것이 가장 중요하다고 생각합니다.
//  코드를 작성하는 행위 자체는 컴퓨터에게 지시를 내리는 것이지만, 결국 그 제어를 하는 것은 사람이기 때문에 직관적이고 명확한 코드를 통해 누구나 쉽게 이해할 수 있도록 하는 것이 좋은 결과를 도출할 수 있다고 생각합니다.
//  코드를 작성해서 컴퓨터가 우리가 원하는 동작을 수행할 수 있도록 하는 것은 프론트엔드 개발자를 준비하는 사람이라면 누구나 할 수 있을 것입니다.
//  하지만, 작성된 코드를 누가보더라도 이해할 수 있는 코드로 만드는 것은 다른 영역이라고 생각합니다.
//  저는 타인이 제가 작성한 코드를 보더라도 쉽게 이해할 수 있도록 코드를 작성하는 것을 지향합니다.`,
//   },
//   {
//     title: "시간과 노력은 나를 배신하지 않는다고 믿습니다.",
//     desc: ` 3개월 동안 매일 매일 12시간씩 사용한 시간들은 저를 배신하지 않는다고 믿고 있습니다. 새로운 언어를 배우기 위해서 검색하고, docs를 읽고, 노력했던 시간들은 비록 제 일생에서 짧은 기간이지만, 지금까지 했던 어떤 노력들 보다 값지다고 생각합니다.
//  아무리 재능이 뛰어나더라도 노력하지 않는다면 그 재능은 없는 것이나 마찬가지라고 생각합니다. 제겐 컴퓨터 언어를 받아들이는 재능이 있다고 생각하며, 그런 제가 노력까지 한다면 뛰어난 성취를 얻을 수 있을 것이라고 확신합니다.
//  노력의 결과로 부트캠프에서 얼마나 노력했는지 알려주는 지표인 G-rating에서 level 4로 27명 중 3등이라는 우수한 성적으로 수료를 하였습니다.`,
//   },
// ];

// const etcData = [
//   {
//     title: "Pair Review",
//     desc: "부트 캠프 수강 기간 중 함께했던 Pair Friends의 동료 평가 기록입니다.",
//     link: "https://www.notion.so/Pair-Review-41b0d3455e564f42b1d7c52068c144e3",
//   },
//   {
//     title: "자격증 및 수료증",
//     desc: "가지고 있는 자격증과 엄격한 상시 평가를 통과하고 우수한 성적으로 부트캠프를 수료한 수료증입니다.",
//     link: "https://www.notion.so/70c068f32a8444c68d174ddc864c11a3",
//   },
//   {
//     title: "팀 프로젝트",
//     desc: "부트캠프에서 팀 프로젝트를 하며 실시한 발표 및 프로젝트 피드백입니다.",
//     link: "https://www.notion.so/a3e105ba7c174303a020d96c0d720de7",
//   },
//   {
//     title: "개인 블로그 주소",
//     desc: "개인 TIL과 알고리즘 풀이를 적은 개인 블로그 주소입니다.",
//     link: "https://velog.io/@quin1392",
//   },
// ];

interface Data {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
}

export default function Introduce() {
  const [data, setData] = useState<Array<Array<Data>>>();

  const onClickLink = (event) => {
    // console.log(event.currentTarget.innerText);
    window.location.href = event.currentTarget.innerText;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return <IntroduceUI data={data} onClickLink={onClickLink}></IntroduceUI>;
}
