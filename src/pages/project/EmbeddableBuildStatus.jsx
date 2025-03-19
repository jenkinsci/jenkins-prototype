import {
  CopyOutline,
  HelpCircleOutline,
} from 'react-ionicons'
import {Link} from "react-router-dom";

function EmbeddableBuildStatus() {
  return (
    <div className="jenkins-body" style={{'padding': '2rem 0 0 0'}}>
      <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/folder"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>master</Link>
        <Link to={"/project/pipeline-syntax"} className={"jenkins-breadcrumb"}>Embeddable Build Status</Link>
      </div>
      <div style={{margin: "10px 30px 0 30px"}}>

        <div className="jenkins-app-bar">
          <div className={"jenkins-app-bar__content"}>
            <h1>
              Embeddable Build Status
            </h1>
          </div>
          <div className={"jenkins-app-bar__controls"}>
            <button className={'jenkins-button'}>
              <HelpCircleOutline />
            </button>
          </div>
        </div>

        <p className={'jenkins-form-description'}>Jenkins exposes the current status of your build as an image in a
          fixed URL. You can put this URL into other
          sites (such as GitHub README) so that people can see the current state of the build.</p>


        <div className={'ebs-preview'}>

        </div>

        <div className={"jenkins-form-item"}>
          <label htmlFor="style" className={"jenkins-form-label"}>Style</label>
          <select name="style" id="style">
            <option value="">Flat</option>
            <option value="">Flat Square</option>
            <option value="">Plastic</option>
          </select>
        </div>

        <div className={"jenkins-form-item"}>
          <label htmlFor="subject" className={"jenkins-form-label"}>Subject</label>
          <input type="text" id="subject" className={"jenkins-input"}/>
        </div>

        <div className={"jenkins-form-item"}>
          <label htmlFor="status" className={"jenkins-form-label"}>Status</label>
          <input type="text" id="status" className={"jenkins-input"}/>
        </div>

        <div className={"jenkins-form-item"}>
          <label htmlFor="color" className={"jenkins-form-label"}>Color</label>
          <input type="color" id="color" className={"jenkins-input"}/>
        </div>

        <div className={"jenkins-form-item"}>
          <label className={"jenkins-form-label"}>Output</label>
          <div className={'ebs-url'}>
            https://ci.jenkins.io/job/Core/job/jenkins/job/master/badge/icon
            <CopyOutline/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbeddableBuildStatus;
