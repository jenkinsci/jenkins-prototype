import {Link} from "react-router-dom";
import {
  AddOutline, FingerPrintOutline, NewspaperOutline, ScanCircleOutline, SunnyOutline
} from "react-ionicons";
import Overflow from "../components/Overflow";
import projects from "../data/projects";
import Card from "../components/Card";
import BuildTable from "../components/BuildTable";

function Dashboard() {

  let hour = new Date().getHours();

  return (
    <div className="jenkins-body">
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <div className="rotating-title">
            <p>{ hour < 12 && "Morning" || hour < 18 && "Afternoon" || "Evening" } Jan</p>
            <p>Jenkins</p>
          </div>
          <h1>Dashboard</h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <Link to={"/new"} className={"jenkins-button"}>
            <AddOutline/>
            <span className={"jenkins-mobile-hide"}>New project</span>
          </Link>
          <Overflow>
            <a>
              <ScanCircleOutline />
              Project relationship
            </a>
            <a>
              <FingerPrintOutline />
              Check file fingerprint
            </a>
            <hr/>
            <a>
              <SunnyOutline />
              Icon legend
            </a>
            <a>
              <NewspaperOutline />
              Atom feed
            </a>
          </Overflow>
        </div>
      </div>

      <div className="iamsidebar">
        <div className="sidebar-item jenkins-mobile-hide">
          <Card>
            <p className="jenkins-cards__item__title" style={{margin: 0, lineHeight: 1.66}}>
              This instance hosts several GitHub Organization folders organized by subject area.
              <br/>
              <br/>
              To add continuous integration and PR builds for a Jenkins plugin in the jenkinsci organization, just add a Jenkinsfile to your repository. You'll likely only need one line:
              <br/>
              <br/>
              buildPlugin()
            </p>
          </Card>
        </div>
        <BuildTable projects={projects} />
      </div>
    </div>
  );
}

export default Dashboard;
