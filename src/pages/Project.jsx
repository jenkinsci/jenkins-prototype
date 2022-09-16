import Green from "../green.svg";
import {Link} from "react-router-dom";
import {EllipsisHorizontalOutline, PlayOutline, SearchOutline} from "react-ionicons";
import Stageview from "../components/Stageview";
import Tippy from "@tippyjs/react";
import ResizeOutline from "../components/icons/ResizeOutline";

export default function Project() {
  return (
    <div className="jenkins-body">
      <div className={"jenkins-breadcrumbs"}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Core</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/"} className={"jenkins-breadcrumb"}>master</Link>
      </div>
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            <span className={"jenkins-passing-icon"}></span>
            master
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <a className={"jenkins-button jenkins-button--green"}>
            <PlayOutline/>
            Build with parameters
          </a>
          <Link to={"/project/configure"} className={"jenkins-button"}>Configure</Link>
          <a className={"jenkins-button jenkins-button--icon"}>
            <EllipsisHorizontalOutline/>
          </a>
        </div>
      </div>
      <div className={"jenkins-cards"}>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">
            Stage view
            <div className="jenkins-cards__item__title__actions">
              <Tippy content="Expand">
                <Link to={"/project/stageview"}>
                  <ResizeOutline />
                </Link>
              </Tippy>
            </div>
          </p>
          <Stageview/>
        </div>
        <div className={"jenkins-cards__item"}>
          <p className="jenkins-cards__item__title">Build history</p>
          <div className={"app-search-bar"} style={{"margin": "20px 0"}}>
            <SearchOutline />
            <input type="search" placeholder={"Search"} />
          </div>
          <div className={"jenkins-build-history"}>
            {Array.from(Array(10), (e, i) => {
              return (
                <div className={"jenkins-build-history__item"}>
                  <img src={Green}/>
                  <Link to={"/project/build"} className={"jenkins-link"}>Build {374 - i}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">Test result trend</p>
          <img src="/assets/img.png" alt="" width={"100%"}/>
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}>
          <p className="jenkins-cards__item__title">
            Stages
            <div className="jenkins-cards__item__title__actions">
              <Tippy content="Expand">
                <a href="#">
                  <ResizeOutline />
                </a>
              </Tippy>
            </div>
          </p>
          <img src="/assets/img_1.png" alt="" width={"100%"}/>
        </div>
        <div className={"jenkins-cards__item"}><p className="jenkins-cards__item__title">Stuff</p></div>
        <div className={"jenkins-cards__item jenkins-cards__item--wide"}><p className="jenkins-cards__item__title">Stuff</p></div>
      </div>
    </div>
  );
}
