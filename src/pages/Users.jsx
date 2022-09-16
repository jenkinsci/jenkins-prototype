import {SearchOutline} from "react-ionicons";

export default function Users() {
  const colors = [
    "orange",
    "red", "green", "blue", "pink", "brown", "cyan", "indigo", "yellow", "purple"
  ]
  const people = [
    {
      name: "Jan Faracik",
      username: "janfaracik"
    },
    {
      name: "Tim Jacomb",
      username: "timja"
    },
    {
      name: "Rhea McLaughlin",
      username: "marcberge"
    },
    {
      name: "Brian Mueller",
      username: "bmueller"
    }
  ]

  function randomAngle() {
    return Math.random() * 360;
  }

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="jenkins-body">
      <div className="jenkins-app-bar">
        <div className={"jenkins-app-bar__content"}>
          <h1>
            People
            <span style={{"marginLeft": "1rem", "color": "var(--color-secondary)"}}>21</span>
          </h1>
        </div>
        <div className={"jenkins-app-bar__controls"}>
          <div className={"app-search-bar"}>
            <SearchOutline />
            <input type="search" placeholder={"Search"} />
          </div>
        </div>
      </div>
      <ol className={"app-people"}>
        {people.sort(((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })).map(person => {
          let angle = randomAngle()
          let color1 = randomColor();
          let color2 = null;

          while (color2 === null || color2 === color1) {
            color2 = randomColor()
          }

          return (
            <li className={"app-people__item"}>
              <div style={{"background": `linear-gradient(${angle}deg, var(--${color1}), var(--${color2}))`}}>
                <span style={{"background": `linear-gradient(${angle}deg, var(--${color1}), var(--${color2}))`, "-webkit-background-clip": "text"}}>
                  {person.name.split(" ")[0][0]}{person.name.split(" ")[1][0]}
                </span>
              </div>
              <p>
                {person.name}
                <br/>
                <span style={{"display": "block", "marginTop": "0.4rem", "color": "var(--color-secondary)"}}>{person.username}</span>
              </p>

            </li>
          )
        })}
      </ol>
    </div>
  );
}
