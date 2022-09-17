import {EllipsisHorizontalOutline, MenuOutline, SearchOutline} from "react-ionicons";
import { faker } from '@faker-js/faker';
import {Link} from "react-router-dom";

export default function Users() {
  const colors = [
    "orange",
    "red", "green", "blue", "pink", "brown", "cyan", "indigo", "yellow", "purple"
  ]
  const people = [
    {
      name: "Jan Faracik",
      username: "janfaracik",
      color1: randomColor(),
      color2: randomColor(),
      angle: randomAngle()
    },
    {
      name: "Tim Jacomb",
      username: "timja",
      color1: randomColor(),
      color2: randomColor(),
      angle: randomAngle()
    }
  ]

  for(let i = 0; i < Math.random() * 100; i++) {
    people.push({
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      color1: randomColor(),
      color2: randomColor(),
      angle: randomAngle()
    })
    console.log(JSON.stringify(people))
  }


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
            <span style={{"marginLeft": "1rem", "color": "var(--color-secondary)"}}>
              { people.length }
            </span>
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
              <Link to={`/people/${person.username}`}>
                <div style={{"background": `linear-gradient(${person.angle}deg, var(--${person.color1}), var(--${person.color2}))`}}>
                <span style={{"background": `linear-gradient(${person.angle}deg, var(--${person.color1}), var(--${person.color2}))`, "-webkit-background-clip": "text"}}>
                  {person.name.split(" ")[0][0]}{person.name.split(" ")[1][0]}
                </span>
                </div>
                <p>
                  {person.name}
                  <br/>
                  <span style={{"display": "block", "marginTop": "0.3rem", "color": "var(--color-secondary)"}}>{person.username}</span>
                </p>
                <button>
                  <EllipsisHorizontalOutline />
                </button>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  );
}
