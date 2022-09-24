export default function System() {
  return (
    <>
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

      <div className={"jenkins-form-item"}>
        <label htmlFor="labels" className={"jenkins-form-label"}>Labels</label>
        <input type="text" id="labels" className={"jenkins-input"}/>
      </div>

      <div className={"jenkins-form-item"}>
        <label htmlFor="quietPeriod" className={"jenkins-form-label"}>Quiet period</label>
        <input type="number" defaultValue="5" id="quietPeriod" className={"jenkins-input"}/>
      </div>

      <h2 style={{fontSize: "1.3rem", marginTop: "3rem", marginBottom: "3rem"}}>Jenkins Location</h2>

      <div className={"jenkins-form-item"}>
        <label htmlFor="url" className={"jenkins-form-label"}>Jenkins URL</label>
        <input type="text" id="url" defaultValue="http://localhost:8080/jenkins/" className={"jenkins-input"}/>
      </div>


      <div className={"jenkins-form-item"}>
        <label htmlFor="adminEmail" className={"jenkins-form-label"}>System Admin e-mail address</label>
        <input type="text" id="adminEmail" defaultValue="address not configured yet <nobody@nowhere>" className={"jenkins-input"}/>
      </div>
    </>
  );
}
