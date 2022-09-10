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

      <button className={"jenkins-button jenkins-button--primary"} type="submit">Save</button>
    </>
  );
}
