import {AccessibilityOutline, AlbumsOutline, ExtensionPuzzleOutline, SettingsOutline} from 'react-ionicons'
import {Link} from "react-router-dom";

function PipelineSyntax() {
  const snippetLinks = [
    {
      icon: <SettingsOutline />,
      label: 'Declarative Directives',
      selected: true,
    },
    {
      icon: <SettingsOutline />,
      label: 'Snippet Generator',
    },
    {
      icon: <SettingsOutline />,
      label: 'Pipeline as Code',
    }
  ]
  const directives = [
    {
      label: 'Agent',
      description: 'Specify the agent on which a Pipeline or individual stage will run',
      selected: true,
    },
    {
      label: 'Environment',
      description: 'Specify one or more environment variables to make available in this Pipeline or stage',
    },
    {
      label: 'Input',
      description: 'Specify an input step to run at the beginning of a stage',
    },
    {
      label: 'Matrix',
      description: 'Specify what the matrix contents should be',
    },
    {
      label: 'Agent 2',
      description: 'Specify the2 agent on which a Pipeline or individual stage will run',
    },
    {
      label: 'Agent 2',
      description: 'Specify the2 agent on which a Pipeline or individual stage will run',
    },
    {
      label: 'Agent 2',
      description: 'Specify the2 agent on which a Pipeline or individual stage will run',
    },
    {
      label: 'Agent 2',
      description: 'Specify the2 agent on which a Pipeline or individual stage will run',
    }
  ]

  return (
    <div className="jenkins-body" style={{'padding': '2rem 0 0 0'}}>
      <div className={"jenkins-breadcrumbs"} style={{"margin": "30px 30px 0 30px"}}>
        <Link to={"/"} className={"jenkins-breadcrumb"}>Dashboard</Link>
        <Link to={"/folder"} className={"jenkins-breadcrumb"}>Jenkins</Link>
        <Link to={"/project"} className={"jenkins-breadcrumb"}>master</Link>
        <Link to={"/project/pipeline-syntax"} className={"jenkins-breadcrumb"}>Pipeline Syntax</Link>
      </div>
      <div className="ps-body">
        <div className="ps-nav">
          <h1>Pipeline Syntax</h1>
          <div className={"ps-sidebar"}>
            <div className={'ps-first-sidebar'}>
              {snippetLinks.map(snippet => {
                return (
                  <a
                    className={`jenkins-sidebar__item ps-item ${snippet.selected ? 'jenkins-sidebar__item--selected' : ''}`}>
                    {snippet.icon}
                    {snippet.label}
                  </a>
                )
              })}
            </div>
            <div className={'ps-second-sidebar'}>
              {directives.map(directive => {
                return (
                  <a
                    className={`jenkins-sidebar__item ps-item ${directive.selected ? 'jenkins-sidebar__item--selected' : ''}`}>
                    <span>{directive.label}</span>
                    <span>{directive.description}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="ps-last-slice">
          <h1>Agent</h1>
          <div className={'ps-code'}>
            agent &#123;
              label &#123;
                label '123'
                retries 10
              &#125;
            &#125;
          </div>

          <div className={"jenkins-form-item"}>
            <label htmlFor="labels" className={"jenkins-form-label"}>Agent</label>
            <input type="text" id="labels" className={"jenkins-input"} value={'any: Run on any agent'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PipelineSyntax;
