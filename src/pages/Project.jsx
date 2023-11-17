import {Link} from "react-router-dom";
import {
  CheckmarkCircleOutline, CheckmarkOutline, CloseCircleOutline,
  LogoGithub,
  PlayOutline,
  SearchOutline,
  ShieldOutline, TimerOutline
} from "react-ionicons";
import Stageview from "../components/Stageview";
import {Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import Overflow from "../components/Overflow";
import PassingIcon from "../components/icons/PassingIcon";
import Card from "../components/Card";
import builds from "../data/builds";

export default function Project() {
  const data = [
    {name: '#371', uv: 80},
    {name: '#372', uv: 60},
    {name: '#373', uv: 90},
    {name: '#374', uv: 100},
    {name: '#375', uv: 100}
  ];

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
        <Card title={"Stage view"} expandable={true} expandableLink={"stageview"} size={"wide"}>
          <Stageview />
        </Card>

        <Card title="Builds" expandable={true} expandableLink={"/project/build-history"}>
          <div className={"app-search-bar"} style={{"margin": "calc(1.2rem - 4px) 0 1.3rem 0"}}>
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

        <Card title={"Test result trend"} expandable={true} size={"wide"}>
          <AreaChart width={800} height={320} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Area type="monotone" dataKey="uv" stroke="var(--green)" strokeWidth={2} fill="var(--green-subtle)" />
            <CartesianGrid stroke="var(--green-subtle)" opacity={0.5} strokeWidth={2} />
            <XAxis dataKey="name" stroke="var(--foreground-color)" strokeWidth={0} />
            <YAxis stroke="var(--foreground-color)" strokeWidth={0} />
          </AreaChart>
        </Card>

        <Card title={"Details"}>
          <p className={"app-details__item"}>
            <CheckmarkCircleOutline />
            Last success
            16 hours ago
            <Link to="/project/build/375" className={"app-tag"}>#375</Link>
          </p>
          <p className={"app-details__item"}>
            <CloseCircleOutline />
            Last failure
            One day ago
            <Link to="/project/build/370" className={"app-tag"}>#370</Link>
          </p>
          <p className={"app-details__item"}>
            <TimerOutline />
            Last duration
            30 seconds
            <Link to="/project/build/375" className={"app-tag"}>#375</Link>
          </p>
          <p className={"app-details__item"}>
            <LogoGithub />
            <a href={"https://github.com/jenkinsci/jenkins"} className={"jenkins-link"}>jenkinsci/jenkins</a>
          </p>
        </Card>

        <Card title={"Stages"} expandable={true} size={"wide"}>
          <div className={"app-graphview"}>
            <div className={"app-graphview__item"}>
              <p>Start</p>
              <div>
              </div>
            </div>
            <div className={"app-graphview__item"}>
              <p>Parallel</p>
              <div>
                <CheckmarkOutline/>
              </div>
            </div>
            <div className={"app-graphview__item"}>
              <p>Deploy</p>
              <div>
                <CheckmarkOutline/>
              </div>
            </div>
            <div className={"app-graphview__item"}>
              <p>Linux publishing</p>
              <div>
                <CheckmarkOutline/>
              </div>
            </div>
            <div className={"app-graphview__item"}>
              <p>Windows publishing</p>
              <div>
                <CheckmarkOutline/>
              </div>
            </div>
            <div className={"app-graphview__item"}>
              <p>End</p>
              <div>
              </div>
            </div>
          </div>
          {/*<img src="/assets/img_1.png" alt="" width={"100%"}/>*/}
        </Card>
      </div>
    </div>
  );
}
