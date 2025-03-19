export default function About() {
  return (
    <>
      <div className="app-about-branding">
        <div className="app-about-branding__aurora"></div>
        <img src="https://www.jenkins.io/images/logo_128.png" alt="logo"/>
      </div>
      <div className="jenkins-app-bar">
        <div className="jenkins-app-bar__content"><h1 className="app-about-heading">Jenkins</h1><p
          className="app-about-version">Version 2.396-SNAPSHOT</p></div>
        <div className="jenkins-app-bar__controls"><a href="https://www.jenkins.io/participate/"
                                                      className="jenkins-button" target="_blank" rel="noreferrer">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 512 512"><title></title>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"></path>
          </svg>
          Get involved
        </a></div>
      </div>
      <p className="app-about-paragraph tool-description">The leading open source automation server which enables developers around the
        world to reliably build, test, and deploy their software.</p>
    </>
  );
}
