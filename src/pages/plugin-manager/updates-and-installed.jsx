import {Link} from "react-router-dom";
import {SearchOutline} from "react-ionicons";

export default function UpdatesAndInstalled() {
  const items = [
    {
      name: "Credentials",
      released: "16 hours ago",
      description: "This plugin allows you to store credentials in Jenkins."
    },
    {
      name: "SSH Credentials",
      released: "16 hours ago",
      description: "Allows storage of SSH credentials in Jenkins"
    },
    {
      name: "JUnit",
      released: "16 hours ago",
      description: "Allows JUnit-format test results to be published."
    },
    {
      name: "GitHub",
      released: "16 hours ago",
      description: "Integrates GitHub into Jenkins"
    }
  ]

  for (let i = 0; i < 30; i++) {
    items.push({
      name: "SCM API",
      released: "16 hours ago",
      description: "This plugin provides a new enhanced API for interacting with SCM svstems"
    })
  }

  return (
    <>
      <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
        <Link to={"/"} className={"jenkins-breadcrumb"} style={{"opacity": 0}}>Settings</Link>
      </div>
      <div className={"big-search-bar"}>
        <SearchOutline />
        Search updates and installed plugins
      </div>
      <table className={"jenkins-table"}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Released</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item) => {
          return (
            <tr key={item.name}>
              <td>
                <div className={"app-plugin"}>
                  <Link className={"jenkins-link"} to={"/project"}>{item.name}</Link>
                  <div className={"app-tags"}>
                    <div>Tag 1</div>
                    <div>Tag 2</div>
                    <div>Tag 3</div>
                  </div>
                  <p className={"description"}>{item.description}</p>
                </div>
              </td>
              <td>{item.released}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </>
  )
}
