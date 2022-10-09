import Stageview from "../../components/Stageview";
import {Link} from "react-router-dom";

export default function StageviewPage() {
  return (
    <div className={"jenkins-body"}>
      <Link className={"app-back-link"} to={"/project"}>Back to master</Link>
      <h1>Stage view</h1>
      <Stageview expanded={true} />
    </div>
  );
}
