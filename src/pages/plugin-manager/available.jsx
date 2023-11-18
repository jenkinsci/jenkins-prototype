import {Link} from "react-router-dom";
import {
  BrushOutline,
  ColorPaletteOutline,
  DownloadOutline, GitBranchOutline, HammerOutline,
  HandLeftOutline,
  LayersOutline,
  SearchOutline
} from "react-ionicons";
import plugins from "../../data/plugins";
import Aurora from "../../components/Aurora";

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

      <div className={'app-plugin-manager-carousel'}>
        <div>
          <Aurora opacity={0.75} />
          <div className={'carousel-tags'}>
            <h1>Trending</h1>
            <h1>250K downloads</h1>
          </div>
          <p>Timestamper</p>
          <span>Add timestamps to the console output of your Jenkins jobs</span>
        </div>
        <div>
          <Aurora opacity={0.75} />
          <p>Hello</p>
          <span>Hello</span>
        </div>
        <div>
          <Aurora opacity={0.75} />
          <p>Hello</p>
          <span>Hello</span>
        </div>
        <div>
          <Aurora opacity={0.75} />
          <p>Hello</p>
          <span>Hello</span>
        </div>
      </div>

      <div className={'app-plugin-manager-categories'}>
        <div>
          <LayersOutline/>
          <p>Platforms</p>
        </div>
        <div>
          <BrushOutline/>
          <p>Appearance</p>
        </div>
        <div>
          <HandLeftOutline/>
          <p>Security</p>
        </div>
        <div>
          <HammerOutline/>
          <p>Builds</p>
        </div>
        <div>
          <GitBranchOutline/>
          <p>SCM</p>
        </div>
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
