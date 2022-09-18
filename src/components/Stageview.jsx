import {Link} from "react-router-dom";

function Stageview() {
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
        <tr className={"jenkins-stageview__build"}>
          <td>
            <Link to={"/project/build"} className={"jenkins-button jenkins-button--green"}>Build 374</Link>
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
            <button className={"jenkins-button jenkins-button--red"}>37m</button>
          </td>
          <td>
            <button className={"jenkins-button jenkins-button--green"}>37m</button>
          </td>
        </tr>
        {Array.from(Array(4), (e, i) => {
          return (
            <tr className={"jenkins-stageview__build"}>
              <td>
                <Link to={"/project/build"} className={"jenkins-button jenkins-button--red"}>Build {373 - i}</Link>
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
                <button className={"jenkins-button jenkins-button--red"}>37m</button>
              </td>
              <td>
                <button className={"jenkins-button jenkins-button--green"}>37m</button>
              </td>
            </tr>
        )})}
    </table>
  )
}

export default Stageview
