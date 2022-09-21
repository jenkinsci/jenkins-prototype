import {Link} from "react-router-dom";
import {DownloadOutline, SearchOutline} from "react-ionicons";
import plugins from "../../data/plugins";

export default function Available() {
  return (
    <>
      <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
        <Link to={"/"} className={"jenkins-breadcrumb"} style={{"opacity": 0}}>Settings</Link>
      </div>
      <div className={"big-search-bar"}>
        <SearchOutline />
        Search available plugins
      </div>
      <table className={"jenkins-table"}>
        <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Released</th>
        </tr>
        </thead>
        <tbody>
        {plugins.map((item) => {
          return (
            <tr key={item.name}>
              <td style={{width: "50px", verticalAlign: "top", paddingTop: "16px"}}>
                <div style={{width: "1.4rem", height: "1.4rem", border: "2px solid var(--color-secondary)", borderRadius: "6px"}}>

                </div>
              </td>
              <td>
                <div className={"app-plugin"}>
                  <Link className={"jenkins-link"} to={"/project"}>
                    {item.name} <span style={{color: "var(--color-secondary)", marginLeft: "5px"}}>{item.version}</span>
                  </Link>
                  {item.tags &&
                    <div className={"app-tags"}>
                      {item.tags.map(tag => {
                        return (
                          <div>{ tag }</div>
                        )
                      })}
                    </div>
                  }
                  <p className={"description"}>{item.description}</p>
                </div>
              </td>
              <td>{item.released}</td>
              <td>
                <button className={"jenkins-button jenkins-button--transparent"}>
                  <DownloadOutline />
                </button>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
    </>
  )
}
