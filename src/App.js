import { Routes, Route } from "react-router-dom";
import themesData from "./Themes/themesData";
import "./App.css";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Quiz from "./components/Quiz";
import T1l1 from "./training-ops/training/T1l1";
import T1l2 from "./training-ops/training/T1l2";
import T1l3 from "./training-ops/training/T1l3";
import T2l1 from "./training-ops/training/T2l1";
import T3l1 from "./training-ops/training/T3l1";
import T4l1 from "./training-ops/training/T4l1";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [HiddenNav, setHiddenNav] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/training/1l2', '/training/1l1') {
      setHiddenNav(!HiddenNav);
    }
    else {
      setHiddenNav(!HiddenNav)
    }
  }, [])// eslint-disable-line

  return (
    <div className="app">
      <nav className={HiddenNav && 'none'}>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 0 64 64"
            width="32px"
            height="32px"
          >
            <path d="M7 29v5l50 1v-7L7 29zM7 11v6h50v-6H7zM7 46v7l50-1v-5L7 46z" />
          </svg>
          <Menu
            active={menuActive}
            setActive={setMenuActive}
            items={themesData}
          />
          <span />
        </div>
      </nav>
      <Routes>
        <Route path="/training/1l1" element={<T1l1 />} />
        <Route path="/training/1l2" element={<T1l2 />} />
        <Route path="/training/1l3" element={<T1l3 />} />
        <Route path="/training/2l1" element={<T2l1 />} />
        <Route path="/training/3l1" element={<T3l1 />} />
        <Route path="/training/4l1" element={<T4l1 />} />
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/quiz" element={<Quiz />} />
        {themesData.map((link) => (
          <Route path={link.href} element={link.el} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
