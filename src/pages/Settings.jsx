import {AccessibilityOutline, AlbumsOutline, ExtensionPuzzleOutline} from 'react-ionicons'
import {Link} from "react-router-dom";

function Settings() {
  return (
    <div className="jenkins-body jenkins-body--sidebar">
      <div className="jenkins-sidebar">
          <h1 style={{"margin": "30px"}}>Settings</h1>
          <h2 className="jenkins-sidebar__heading">General</h2>
          <a className="jenkins-sidebar__item jenkins-sidebar__item--selected">
            <div className="jenkins-sidebar__item__icon">
              <AlbumsOutline />
            </div>
            System
          </a>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AccessibilityOutline />
            </div>
            Tool configuration
          </a>
          <Link to={"plugins"} className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <ExtensionPuzzleOutline />
            </div>
            Plugins
          </Link>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AlbumsOutline />
            </div>
            Nodes and cloud
          </a>
          <h2 className="jenkins-sidebar__heading">Hello</h2>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AccessibilityOutline />
            </div>
            Security
          </a>
          <h2 className={"jenkins-sidebar__heading"}>System</h2>
          <a className={"jenkins-sidebar__item"}>
            <div className={"jenkins-sidebar__item__icon"}>
              <AccessibilityOutline />
            </div>
            System information
          </a>
          <a className={"jenkins-sidebar__item"}>
            <div className={"jenkins-sidebar__item__icon"}>
              <AlbumsOutline />
            </div>
            Load statistics
          </a>
          <a className="jenkins-sidebar__item">
            <div className={"jenkins-sidebar__item__icon"}>
              <AlbumsOutline />
            </div>
            About Jenkins
          </a>
        </div>
      <div className="jenkins-body jenkins-body--inner">
        <h1 style={{"margin": "30px 0 30px 0"}}>System</h1>

        <div className="jenkins-form-item">
          <label htmlFor="systemMessage" className="jenkins-form-label">System message</label>
          <p className={"jenkins-form-description"}>This message will be displayed at the top of the Jenkins main page. This can be useful for posting notifications to your users</p>
          <textarea id="systemMessage" rows="5" className={"jenkins-input"}/>
        </div>

        <div className={"jenkins-form-item"}>
          <label htmlFor="numExecutors" className={"jenkins-form-label"}>Number of executors</label>
          <input type="number" defaultValue="0" id="numExecutors" className={"jenkins-input"}/>
        </div>

        <button className={"jenkins-button jenkins-button--primary"} type="submit">Save</button>

      </div>
    </div>
  );
}

export default Settings;
