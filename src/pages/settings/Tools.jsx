import {
  AddOutline,
  ChevronForwardOutline,
  ChevronUpOutline,
  FingerPrintOutline, NewspaperOutline,
  PencilOutline,
  ScanCircleOutline, SunnyOutline
} from "react-ionicons";
import Overflow from "../../components/Overflow";

export default function Tools() {

  const data = {
    "Maven": [
      {
        "name": "Maven",
        "version": "v3.9.0"
      },
      {
        "name": "Maven",
        "version": "v3.8.5"
      }
    ],
    "JDK": [
      {
        "name": "JDK",
        "version": "Java SE Development Kit 9.0.4"
      }
    ],
    "Git": [
      {
        "name": "Git",
        "version": "/git"
      }
    ]
  }

  return (
    <>
      <div className="jenkins-app-bar jenkins-app-bar--sticky" style={{"margin": "26px 0 30px 0"}}>
        <div className={"jenkins-app-bar__content"}>
          <h1 className={"jenkins-project-heading"}>
            Tools
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <Overflow icon={<AddOutline />} text={"Add tool"}>
            <a className={"jenkins-mobile-hide"}>
              JDK
            </a>
            <a>
              Git
            </a>
            <a>
              Maven
            </a>
            <a>
              JGit
            </a>
            <a>
              Node
            </a>
          </Overflow>
        </div>
      </div>

      <p className={"tool-description"}>
        Tools are lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus velit. Nam lobortis nunc sem, id elementum erat finibus sit amet. Phasellus gravida orci sit amet ipsum viverra.
      </p>

      {
        Object.entries(data).map(([key, items]) => {
          return (
            <div class={"tool-host"} style={{marginBottom: "32px"}}>
              <h2 style={{"font-size": "var(--font-6)", "margin-bottom": "15px"}}>
                { key }
                <ChevronUpOutline />
              </h2>
              <div className={"tools-row"}>
                {
                  items.map((item) => {
                    return (
                      <button className={"tool-row"}>
                        <span>{ item.name }</span>
                        <span>{ item.version }</span>
                      </button>
                    )})
                }
              </div>
            </div>
          )
        })
      }

    </>
  );
}
