import {Link, useParams} from "react-router-dom";
import {CopyOutline, DownloadOutline, SearchOutline} from "react-ionicons";
import TerminalText from "../../terminal";

export default function ConsolePage() {
  let { number } = useParams();

  return (
    <div className={"app-console-page app-console-colors"}>
      <div className={"app-console-page__inner"}>
        <Link className={"app-back-link"} to={"/project/build/" + number}>Back to #{number}</Link>
        <div className="jenkins-app-bar jenkins-app-bar--sticky">
          <div className={"jenkins-app-bar__content"}>
            <h1 className={"jenkins-project-heading"}>
              Console output
            </h1>
          </div>
          <div className={"jenkins-app-bar__controls"}>
            <div className={"app-search-bar"}>
              <SearchOutline />
              <input type="search" placeholder={"Search console"} />
            </div>
            <a className={"jenkins-button"}>
              <CopyOutline />
              Copy
            </a>
            <a className={"jenkins-button"}>
              <DownloadOutline />
              Download
            </a>
          </div>
        </div>
        <code className={"console-code"}>
          {}
          {TerminalText.split("\n").map((line, index) => {
            return (
              <p><span>{index + 1}</span>{ line }</p>
            )
          })}
        </code>
      </div>
    </div>
  );
}
