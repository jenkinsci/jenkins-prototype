import {Link, useParams} from "react-router-dom";
import {LogoGithub, SearchOutline, ShieldOutline} from "react-ionicons";
import builds from "../../data/builds";
import Overflow from "../../components/Overflow";

export default function TestResultsPage() {
  let { number } = useParams();
  const build = builds.find(b => b.name === number);

  return (
    <div className={"jenkins-body"}>
      <Link className={"app-back-link"} to={"/project/build/" + number}>Back to #{number}</Link>
      <div className="jenkins-app-bar jenkins-app-bar--sticky">
        <div className={"jenkins-app-bar__content"}>
          <h1>
            Test results
            <span style={{color: "var(--color-secondary)", marginLeft: "1rem"}}>
              56,679 ran
            </span>
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <h1 style={{color: "var(--green)"}}>
            56,642 passing
          </h1>
          <h1 style={{color: "var(--red)"}}>
            6 failing
          </h1>
          <h1 style={{color: "var(--color-secondary)"}}>
            31 skipped
          </h1>
        </div>
      </div>

      <table className={"jenkins-table"}>
        <thead>
        <tr>
          <th>
            Package
          </th>
          <th>
            Duration
          </th>
          <th>
            Fail
          </th>
          <th>
            (diff)
          </th>
          <th>
            Skip
          </th>
          <th>
            (diff)
          </th>
          <th>
            Pass
          </th>
          <th>
            (diff)
          </th>
          <th>
            Total
          </th>
          <th>
            (diff)
          </th>
        </tr>
        </thead>
        <tbody>
        {builds.map(build => {
          return (
            <tr>
              <td>
                {build.message}
              </td>
              <td>
                10 minutes
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
              <td>
                Five hours ago
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>

      <table className={"jenkins-table"}>
        <thead>
          <tr>
            <th>
              Package
            </th>
            <th>
              Duration
            </th>
            <th>
              Fail
            </th>
            <th>
              (diff)
            </th>
            <th>
              Skip
            </th>
            <th>
              (diff)
            </th>
            <th>
              Pass
            </th>
            <th>
              (diff)
            </th>
            <th>
              Total
            </th>
            <th>
              (diff)
            </th>
          </tr>
        </thead>
        <tbody>
          {builds.map(build => {
            return (
              <tr>
                <td>
                  {build.message}
                </td>
                <td>
                  10 minutes
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
                <td>
                  Five hours ago
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
