import {Link} from "react-router-dom";
import builds from "../data/builds";
import tippyProps from "../data/tooltips";
import Tippy from "@tippyjs/react";
import {LogoGithub, PlayOutline} from "react-ionicons";
import Overflow from "./Overflow";

function Stageview({expanded}) {
  return (
    <table className={"jenkins-stageview"}>
      <tr className={"jenkins-stageview__stages"}>
        <th>
          {/*Average time: 10 minutes 48 seconds*/}
        </th>
        <th>
          <p>Declarative: Checkout SCM</p>
          <p>7s</p>
        </th>
        <th>
          <p>Configure Build</p>
          <p>823ms</p>
        </th>
        <th>
          <p>Install Gems</p>
          <p>1min 32s</p>
        </th>
        <th>
          <p>Run Tests</p>
          <p>48min 59s</p>
        </th>
        <th>
          <p>Declarative: Post Actions</p>
          <p>14s</p>
        </th>
      </tr>

      {builds.slice(0, 5).map(build => {
        const state = build.name === "375" ? 'green' : 'red';

        return (
          <tr className={"jenkins-stageview__build"}>
            <td>
              {expanded ?
                (
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
                ) :
                (
                  <Tippy content={expanded ? null : build.message} {...tippyProps}>
                    <Link to={"/project/build/" + build.name} className={"jenkins-button jenkins-button--" + state}>
                      #{build.name}
                    </Link>
                  </Tippy>
                )}
            </td>
            <td>
              <button className={"jenkins-button jenkins-button--green"}>6s</button>
            </td>
            <td>
              <button className={"jenkins-button jenkins-button--green"}>983ms</button>
            </td>
            <td>
              <button className={"jenkins-button jenkins-button--green"}>2m</button>
            </td>
            <td>
              <button className={"jenkins-button jenkins-button--" + state}>36m</button>
            </td>
            <td>
              <button className={"jenkins-button jenkins-button--green"}>37m</button>
            </td>
          </tr>
        )
      })}
    </table>
  )
}

export default Stageview
