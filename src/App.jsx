import './styles/App.scss';
import Settings from "./pages/Settings";
import {
  ArrowUpOutline,
  ColorFillOutline, HomeOutline, MenuOutline,
  PeopleOutline,
  PieChartOutline,
  SearchOutline,
  SettingsOutline,
  StarOutline
} from "react-ionicons";
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
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

function App() {

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

  useEffect(() => {
    const element = document.querySelector("#app-layer")

    const onScroll = e => {
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
      onClick: e => setSearchVisible(true),
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
      id: "users",
      name: "Users",
      link: "/users",
      icon: <PeopleOutline/>
    }
  ]
  const [controlBar, setControlBar] = useState(["search", "build-monitor", "favorites", "users", "theme-switcher"])

  return (
    <Router>
      <div className="App">
        <div className={"jenkins-mobile-nav"}>
          <NavLink to={"/"} className="jenkins-nav__item" activeClassName="jenkins-nav__item--selected" exact>
            <div className="jenkins-nav__item__icon"><HomeOutline /></div>
          </NavLink>
          {controlBar.map(e => controlBarItems.find(i => i.id === e)).map((result) => {
            return (
              <div className="jenkins-nav__item" activeClassName="jenkins-nav__item--selected">
                <div className="jenkins-nav__item__icon">{result.icon}</div>
              </div>
            )
          })}
        </div>
        <div className="jenkins-nav">
          <Tippy content="Dashboard" placement="right">
            <NavLink to={"/"} className="jenkins-nav__item" activeClassName="jenkins-nav__item--selected" exact>
              <div className="jenkins-nav__item__icon"><HomeOutline /></div>
            </NavLink>
          </Tippy>
          {controlBar.map(e => controlBarItems.find(i => i.id === e)).map((result) => {
            return (
              result.link != null ? (
                <Tippy key={result.name} content={result.name} placement="right">
                  <NavLink to={result.link} className="jenkins-nav__item" activeClassName="jenkins-nav__item--selected">
                    <div className="jenkins-nav__item__icon">{result.icon}</div>
                  </NavLink>
                </Tippy>
              ) : (
                  result.panel != null ? (
                    <Tippy key={result.name} content={result.panel} placement="right" interactive="true">
                      <button className="jenkins-nav__item">
                        <div className="jenkins-nav__item__icon">{result.icon}</div>
                      </button>
                    </Tippy>
                  ) : (
                    <Tippy key={result.name} content={result.name} placement="right">
                      <button className="jenkins-nav__item" onClick={e => result.onClick()}>
                        <div className="jenkins-nav__item__icon">{result.icon}</div>
                      </button>
                    </Tippy>
                  )
              )
            )
          })}
          <Tippy content="Settings" placement="right">
            <NavLink to={"/settings"} className="jenkins-nav__item" activeClassName="jenkins-nav__item--selected">
              <div className="jenkins-nav__item__icon"><SettingsOutline/></div>
            </NavLink>
          </Tippy>

          <Tippy content="Scroll to top" placement="right">
            <button onClick={() => document.querySelector("#app-layer").scroll({top:0,behavior:'smooth'})} className={`jenkins-nav__item jenkins-nav__item--bottom ${showScrollToTopButton && 'jenkins-nav__item--bottom--visible'}`}>
              <div className="jenkins-nav__item__icon"><ArrowUpOutline/></div>
            </button>
          </Tippy>
        </div>
        <div id="app-layer" className="jenkins-container">
          <Switch>
            <Route path="/new">
              <NewProject/>
            </Route>
            <Route path="/plugins">
              <PluginManager/>
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/build-monitor">
              <BuildMonitor/>
            </Route>
            <Route path="/project/configure">
              <ProjectSettings/>
            </Route>
            <Route path="/project/build">
              <Build/>
            </Route>
            <Route path="/project">
              <Project/>
            </Route>
            <Route path="/">
              <Dashboard/>
            </Route>
          </Switch>
        </div>
        {searchVisible ? (
          <Search hook={setSearchVisible}/>
        ) : null}
      </div>
    </Router>
  );
}

export default App;
