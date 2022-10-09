import {Link, useParams} from "react-router-dom";
import builds from "../../data/builds";

export default function TestCoveragePage() {
  let { number } = useParams();
  const build = builds.find(b => b.name === number);

  return (
    <div className={"jenkins-body"}>
      <Link className={"app-back-link"} to={"/project/build/" + number}>Back to #{number}</Link>
      <div className="jenkins-app-bar jenkins-app-bar--sticky">
        <div className={"jenkins-app-bar__content"}>
          <h1>
            Test coverage
            <span style={{color: "var(--color-secondary)", marginLeft: "1rem"}}>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
