import Footer from "./component/footer/footer.container";
import Header from "./component/header/header.container";
import NotFound from "./component/404/notfound.container";
import Skill from "./component/skill/skill.container";
import Introduce from "./component/introduce/introduce.container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.css";
import Project from "./component/project/project.container";
import TIL from "./component/TIL/TIL.container";
import Registration from "./component/registration/registration.container";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Introduce />}></Route>
            <Route path="/TIL" element={<TIL />}></Route>
            <Route path="/TIL/registration" element={<Registration />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
