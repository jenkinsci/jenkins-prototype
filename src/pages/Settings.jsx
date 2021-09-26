import {AccessibilityOutline, AlbumsOutline, ExtensionPuzzleOutline} from 'react-ionicons'

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
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <ExtensionPuzzleOutline />
            </div>
            Plugins
          </a>
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
          <h2 className="jenkins-sidebar__heading">System</h2>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AccessibilityOutline />
            </div>
            System information
          </a>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AlbumsOutline />
            </div>
            Load statistics
          </a>
          <a className="jenkins-sidebar__item">
            <div className="jenkins-sidebar__item__icon">
              <AlbumsOutline />
            </div>
            About Jenkins
          </a>
        </div>
      <div className="jenkins-body jenkins-body--inner">
        <h1 style={{"margin": "30px 0 0 0"}}>System</h1>

      </div>
    </div>
  );
}

export default Settings;
