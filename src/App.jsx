import './styles/App.scss';
import Settings from "./pages/Settings";
import {
  ArrowUpOutline,
  ColorFillOutline, HomeOutline,
  PeopleOutline,
  PieChartOutline,
  SearchOutline,
  SettingsOutline,
  StarOutline
} from "react-ionicons";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import People from "./pages/People";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import {useEffect, useState} from "react";
import BuildMonitor from "./pages/BuildMonitor";
import ThemeSwitcher from "./components/panels/ThemeSwitcher";
import Favorites from "./components/panels/Favorites";
import Search from "./components/panels/Search";
import Project from "./pages/Project";
import ProjectSettings from "./pages/ProjectSettings";
import Build from "./pages/Build";
import PluginManager from "./pages/PluginManager";
import NewProject from "./pages/NewProject";
import StageviewPage from "./pages/project/StageviewPage";
import ConsolePage from "./pages/project/ConsolePage";
import Person from "./pages/Person";
import {default as props} from "./data/tooltips";

function App() {

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

  useEffect(() => {
    const element = document.querySelector("#app-layer")

    const onScroll = () => {
      setShowScrollToTopButton(element.scrollTop > 250)
    };
    element.addEventListener("scroll", onScroll);

    return () => element.removeEventListener("scroll", onScroll);
  }, [showScrollToTopButton]);

  const [searchVisible, setSearchVisible] = useState(false)
  const controlBarItems = [
    {
      id: "favorites",
      name: "Favorites",
      panel: <Favorites/>,
      icon: <StarOutline/>
    },
    {
      id: "search",
      name: "Search",
      onClick: () => setSearchVisible(true),
      icon: <SearchOutline/>
    },
    {
      id: "theme-switcher",
      name: "Switch theme",
      panel: <ThemeSwitcher/>,
      icon: <ColorFillOutline/>
    },
    {
      id: "build-monitor",
      name: "Build monitor",
      link: "/build-monitor",
      icon: <PieChartOutline/>
    },
    {
      id: "people",
      name: "People",
      link: "/people",
      icon: <PeopleOutline/>
    }
  ]
  const [controlBar] = useState(["search",  "people", "build-monitor", "favorites",  "theme-switcher"])

  const tippyProps = {
    ...props,
    theme: "tooltip-nav",
    animation: "tooltip-nav"
  }

  return (
    <Router>
      <div className="App">
        <div className="jenkins-nav">
          <Tippy content="Dashboard" placement="right" {...tippyProps}>
            <NavLink to={"/"} className={({ isActive }) => "jenkins-nav__item" + (isActive ? " jenkins-nav__item--selected" : "")} end>
              <div className="jenkins-nav__item__icon"><HomeOutline /></div>
            </NavLink>
          </Tippy>
          {controlBar.map(e => controlBarItems.find(i => i.id === e)).map((result) => {
            return (
              result.link != null ? (
                <Tippy key={result.name} content={result.name} placement="right" {...tippyProps}>
                  <NavLink to={result.link} className={({ isActive }) => "jenkins-nav__item" + (isActive ? " jenkins-nav__item--selected" : "")}>
                    <div className="jenkins-nav__item__icon">{result.icon}</div>
                  </NavLink>
                </Tippy>
              ) : (
                  result.panel != null ? (
                    <Tippy key={result.name} content={result.panel} placement="right" interactive="true" {...tippyProps} touch="hold">
                      <button className="jenkins-nav__item jenkins-mobile-hide">
                        <div className="jenkins-nav__item__icon">{result.icon}</div>
                      </button>
                    </Tippy>
                  ) : (
                    <Tippy key={result.name} content={result.name} placement="right" {...tippyProps}>
                      <button className="jenkins-nav__item" onClick={() => result.onClick()}>
                        <div className="jenkins-nav__item__icon">{result.icon}</div>
                      </button>
                    </Tippy>
                  )
              )
            )
          })}
          <Tippy content="Settings" placement="right" {...tippyProps}>
            <NavLink to={"/settings"} className={({ isActive }) => "jenkins-nav__item" + (isActive ? " jenkins-nav__item--selected" : "")}>
              <div className="jenkins-nav__item__icon"><SettingsOutline/></div>
            </NavLink>
          </Tippy>

          <Tippy content="Scroll to top" placement="right" {...tippyProps}>
            <button onClick={() => document.querySelector("#app-layer").scroll({top:0,behavior:'smooth'})} className={`jenkins-nav__item jenkins-nav__item--bottom ${showScrollToTopButton && 'jenkins-nav__item--bottom--visible'}`}>
              <div className="jenkins-nav__item__icon"><ArrowUpOutline/></div>
            </button>
          </Tippy>
        </div>
        <div id="app-layer" className="jenkins-container">
          <Routes>
            <Route path="/new/*" element={<NewProject/>} />
            <Route path="/settings/plugins" element={<PluginManager/>} />
            <Route path="/settings/*" element={<Settings/>} />
            <Route path="/people/:username" element={<Person />} />
            <Route path="/people" element={<People/>} />
            <Route path="/build-monitor" element={<BuildMonitor/>} />
            <Route path="/project/configure" element={<ProjectSettings/>} />
            <Route path="/project/build/console" element={<ConsolePage/>} />
            <Route path="/project/build" element={<Build/>} />
            <Route path="/project/stageview" element={<StageviewPage />} />
            <Route path="/project" element={<Project/>} />
            <Route path="/" element={<Dashboard/>} />
          </Routes>
        </div>
        {searchVisible && (
          <Search hook={setSearchVisible}/>
        )}
      </div>
    </Router>
  );
}

export default App;
