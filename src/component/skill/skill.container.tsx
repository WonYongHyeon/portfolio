import { useEffect, useRef, useState } from "react";
import SkillUI from "./skill.presenter";
import {
  Bodies,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from "matter-js";

import IconJS from "../../assets/icon_JS.png";
import IconCSS from "../../assets/icon_CSS.png";
import IconHTML from "../../assets/icon_HTML.png";
import IconREACT from "../../assets/icon_REACT.png";
import IconAWS from "../../assets/iconAWS.svg";
import IconDocker from "../../assets/iconDocker.svg";
import IconGithub from "../../assets/iconGithub.svg";
import IconGraphQL from "../../assets/iconGraphQL.svg";
import IconNextjs from "../../assets/iconNextjs.svg";
import IconTS from "../../assets/iconTS.svg";
import IconEmotion from "../../assets/iconEmotion.svg";

interface DataType {
  [label: string]: {
    title: string;
    level: number;
    desc: string;
    order: string;
  };
}

const data: DataType = {
  1: {
    title: "JavaScript",
    level: 90,
    desc: "ES5 이후 문법을 이해하고 있으며, 실무에 적용하는 코드를 작성할 수 있습니다. 원하는 작업을 수행하기 위해 그에 알맞은 알고리즘을 적용하여 새로운 함수를 생성하고 적용할 수 있습니다.",
    order: "1",
  },
  2: {
    title: "HTML",
    level: 90,
    desc: "HTML5 문법을 이해하고 있으며, 알맞은 태그를 사용하여 각 요소를 디자인 된 페이지에 맞게 배치하여 구현할 수 있습니다.",
    order: "2",
  },
  3: {
    title: "CSS",
    level: 90,
    desc: "CSS3 문법을 이해하고 있으며, 페이지를 구성하는 각 요소에 CSS를 적용하여 알맞은 위치, 디자인을 구현할 수 있습니다.",
    order: "3",
  },
  4: {
    title: "React",
    level: 80,
    desc: "React의 JSX문법을 이해하고 있으며, React의 가장 큰 특징인 Component 기반의 코드를 작성하여 재사용성을 증가시킬 수 있습니다.",
    order: "4",
  },
  5: {
    title: "Emotion",
    level: 95,
    desc: "Emotion을 통해 CSS-in-JS의 StyledComponents를 구현할 수 있습니다. ",
    order: "5",
  },
  6: {
    title: "AWS",
    level: 70,
    desc: "Amazon Web Service를 사용해 보유한 웹 주소를 연동하고 배포할 수 있습니다.",
    order: "6",
  },
  7: {
    title: "TypeScript",
    level: 85,
    desc: "TypeScript를 사용하여 정적 타입을 명시할 수 있고, 타입 에러를 방지할 수 있습니다.",
    order: "7",
  },
  8: {
    title: "Docker",
    level: 65,
    desc: "프로젝트 배포 시에 Docker의 필요성에 대해서 이해하고 있고, Docker를 사용한 배포를 AWS EC2에서 진행할 수 있습니다.",
    order: "8",
  },
  9: {
    title: "Git",
    level: 70,
    desc: "Git을 사용한 프로젝트 및 협업의 중요성에 대해서 이해하고 있으며, Commit Message 및 Branch 생성 규칙에 대한 전반적인 지식을 가지고 있습니다.",
    order: "9",
  },
  10: {
    title: "GraphQL",
    level: 70,
    desc: "GraphQL을 사용한 서버와의 통신에서 원하는 데이터만을 요청할 수 있습니다.",
    order: "10",
  },
  11: {
    title: "Nextjs",
    level: 70,
    desc: "React와의 차이인 Server Side Rendering에 대해 이해하고 있으며, 파일 기반 라우팅을 구현할 수 있습니다.",
    order: "11",
  },
};

export default function Skill() {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  const [selected, setSelected] = useState(data["1"]);

  const onClickArrowBefore = () => {
    if (selected.order === "1") {
      setSelected(data["11"]);
    } else {
      const order = Number(selected.order) - 1;
      setSelected(data[String(order)]);
    }
  };

  const onClickArrowNext = () => {
    if (selected.order === "11") {
      setSelected(data["1"]);
    } else {
      const order = Number(selected.order) + 1;
      setSelected(data[String(order)]);
    }
  };

  useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current;

    const cw = 1000;
    const ch = 1000;

    const gravityPower = 0.5;
    let gravityDeg = 0;

    if (canvas) {
      // initScene
      const engine = Engine.create();
      const runner = Runner.create();
      const render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: "#1b1b19",
        },
      });
      Render.run(render);
      Runner.run(runner, engine);

      // initMouse
      const mouse = Mouse.create(canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
      });
      Composite.add(engine.world, mouseConstraint);

      // initGround
      const segments = 32;
      const deg = (Math.PI * 2) / segments;
      const width = 50;
      const radius = cw / 2 + width / 2;
      const height = radius * Math.tan(deg / 2) * 2;

      for (let i = 0; i < segments; i++) {
        const theta = deg * i;
        const x = radius * Math.cos(theta) + cw / 2;
        const y = radius * Math.sin(theta) + ch / 2;

        addRect(
          x,
          y,
          width,
          height,
          {
            isStatic: true,
            angle: theta,
          },
          engine
        );
      }

      // 박스 생성 함수

      initImageBox(cw, ch, engine);

      // 클릭한 박스의 정보로 변경
      Events.on(mouseConstraint, "mousedown", () => {
        if (mouseConstraint.body) {
          const selectedItem: string = mouseConstraint.body.label;
          const newSelected = data[selectedItem];
          setSelected(newSelected);
        }
      });

      // item 회전
      Events.on(runner, "tick", () => {
        gravityDeg += 1;
        engine.world.gravity.x =
          gravityPower * Math.cos((Math.PI / 180) * gravityDeg);
        engine.world.gravity.y =
          gravityPower * Math.sin((Math.PI / 180) * gravityDeg);
      });
    }
  }, [canvasRef]);

  return (
    <SkillUI
      canvasRef={canvasRef}
      selected={selected}
      onClickArrowBefore={onClickArrowBefore}
      onClickArrowNext={onClickArrowNext}
    ></SkillUI>
  );
}

function addRect(
  x: number,
  y: number,
  w: number,
  h: number,
  options = {},
  engine
) {
  const rect = Bodies.rectangle(x, y, w, h, options);
  Composite.add(engine.world, rect);
}

// item 박스 생성
function initImageBox(cw, ch, engine) {
  const scale = 0.7;

  addRect(
    cw / 2,
    ch / 2,
    250 * scale,
    250 * scale,
    {
      label: "1",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconJS, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2 + 250 * scale,
    ch / 2,
    250 * scale,
    250 * scale,
    {
      label: "2",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconHTML, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2 - 250 * scale,
    ch / 2,
    250 * scale,
    250 * scale,
    {
      label: "3",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconCSS, xScale: scale, yScale: scale },
      },
    },
    engine
  );

  addRect(
    cw / 2,
    ch / 2 - 250 * scale,
    250 * scale,
    250 * scale,
    {
      label: "4",
      chamfer: { radius: 75 },
      render: {
        sprite: { texture: IconREACT, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2 + 200,
    ch / 2 - 250 * scale,
    260 * scale,
    260 * scale,
    {
      label: "5",
      chamfer: { radius: 75 },
      render: {
        sprite: {
          texture: IconEmotion,
          xScale: scale,
          yScale: scale,
        },
      },
    },
    engine
  );
  addRect(
    cw / 2,
    ch / 2 - 165 * scale,
    260 * scale,
    165 * scale,
    {
      label: "6",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconAWS, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2,
    ch / 2 - 220 * scale,
    260 * scale,
    220 * scale,
    {
      label: "7",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconTS, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2,
    ch / 2 - 220 * scale,
    260 * scale,
    250 * scale,
    {
      label: "8",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconDocker, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2 + 200,
    ch / 2 - 250 * scale,
    250 * scale,
    250 * scale,
    {
      label: "9",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconGithub, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2 + 200,
    ch / 2 - 250 * scale,
    220 * scale,
    250 * scale,
    {
      label: "10",
      chamfer: { radius: 20 },
      render: {
        sprite: { texture: IconGraphQL, xScale: scale, yScale: scale },
      },
    },
    engine
  );
  addRect(
    cw / 2 + 200,
    ch / 2 - 250 * scale,
    200 * 0.9,
    200 * 0.9,
    {
      label: "11",
      chamfer: { radius: 75 },
      render: {
        sprite: { texture: IconNextjs, xScale: 0.9, yScale: 0.9 },
      },
    },
    engine
  );
}
