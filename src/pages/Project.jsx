import {Link} from "react-router-dom";
import {FingerPrintOutline, LogoGithub, LogoGitlab, PlayOutline, SearchOutline, ShieldOutline} from "react-ionicons";
import Stageview from "../components/Stageview";
import Tippy from "@tippyjs/react";
import ResizeOutline from "../components/icons/ResizeOutline";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import Overflow from "../components/Overflow";
import tippyProps from "../data/tooltips";
import PassingIcon from "../components/icons/PassingIcon";
import Card from "../components/Card";
import builds from "../data/builds";
import {cssClasses} from "react-ionicons/lib/LogoGithub";

export default function Project() {
  const data = [{name: 'Page A', uv: 400},
    {name: 'Page A', uv: 200},
    {name: 'Page A', uv: 700},
    {name: 'Page A', uv: 300},
    {name: 'Page A', uv: 100}];

  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Core</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>master</Link>
      </div>
      <div className="jenkins-app-bar jenkins-app-bar--responsive">
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            <PassingIcon />
            master
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <a className={"jenkins-button jenkins-button--green"}>
            <PlayOutline/>
            Build with parameters
          </a>
          <Link to={"/project/configure"} className={"jenkins-button"}>Configure</Link>
          <Overflow>
            <a>
              <ShieldOutline />
              Embeddable Build Status
            </a>
          </Overflow>
        </div>
      </div>
      <div className={"jenkins-cards"}>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">
            Stage view
            <div className="jenkins-cards__item__title__actions">
              <Tippy content="Expand" {...tippyProps}>
                <Link to={"/project/stageview"}>
                  <ResizeOutline />
                </Link>
              </Tippy>
            </div>
          </p>
          <Stageview/>
        </div>
        <Card title="Builds" expandable={true} expandableLink={"/project/build-history"}>
          <div className={"app-search-bar"} style={{"margin": "20px 0"}}>
            <SearchOutline />
            <input type="search" placeholder={"Search"} />
          </div>
          <div className={"jenkins-build-history"}>
            {builds.map(build => {
              return (
                <div className={"jenkins-build-history__item"}>
                  <Link to={"/project/build/" + build.name} className={"jenkins-build-history__item__link"}>
                    <div className={"jenkins-build-history__item__link__icon"}>
                      {build.state}
                      <div className={"jenkins-build-history__item__link__icon__owner"}>
                        {build.icon ? build.icon : (
                          <LogoGithub color={"var(--foreground-color)"} cssClasses={"ionicon"} />
                        )}
                      </div>
                    </div>
                    <div className={"jenkins-build-history__item__link__details"}>
                      <p className="jenkins-build-history__item__link__details__build-number">#{build.name}</p>
                      <p className="jenkins-build-history__item__link__details__message">{build.message}</p>
                    </div>
                  </Link>
                  <Overflow clazz={"jenkins-button--transparent"}>
                    <a className={"app-color-green"}>
                      <PlayOutline />
                      Rebuild
                    </a>
                    <hr/>
                    <a>
                      <LogoGithub />
                      Open on GitHub
                    </a>
                  </Overflow>
                </div>
              )
            })}
          </div>
        </Card>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">Test result trend</p>
          <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="var(--green)" />
            <CartesianGrid stroke="var(--color-secondary)" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">
            Stages
            <div className="jenkins-cards__item__title__actions">
              <Tippy content="Expand" {...tippyProps}>
                <a href="#">
                  <ResizeOutline />
                </a>
              </Tippy>
            </div>
          </p>
          <img src="/assets/img_1.png" alt="" width={"100%"}/>
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
      </div>
    </div>
  );
}
