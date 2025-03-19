import {Link, useParams} from "react-router-dom";
import {DownloadOutline} from "react-ionicons";

export default function ArtifactsPage() {
  let { number } = useParams();

  return (
    <div className={"jenkins-body"}>
      <Link className={"app-back-link"} to={"/project/build/" + number}>Back to #{number}</Link>
      <div className="jenkins-app-bar jenkins-app-bar--sticky">
        <div className={"jenkins-app-bar__content"}>
          <h1>
            Artifacts
            <span style={{color: "var(--color-secondary)", marginLeft: "1rem"}}>
              4
            </span>
          </h1>
        </div>
        <div>
          <a className={"jenkins-button"}>
            <DownloadOutline />
            Download all
          </a>
        </div>
      </div>
      <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72-javadoc.jar</a>
      <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72-sources.jar</a>
      <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72.jar</a>
      <a className={"jenkins-link"} style={{display: "flex", marginBottom: "1rem"}}>jenkins-core-2.370-rc32873.a_643d8fefa_72.pom</a>
    </div>
  );
}
