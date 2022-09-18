import {CloseCircleOutline, LogoGithub, SearchOutline, SettingsOutline} from "react-ionicons";
import { faker } from '@faker-js/faker';
import {Link} from "react-router-dom";
import Overflow from "../components/Overflow";
import {useEffect, useState} from "react";

export default function People() {
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState("");

  const colors = [
    "orange",
    "red", "green", "blue", "pink", "brown", "cyan", "indigo", "yellow", "purple"
  ]

  useEffect(() => {
    const peopleToAdd = [
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
    for (let i = 0; i < Math.random() * 100; i++) {
      peopleToAdd.push({
        name: faker.name.fullName(),
        username: faker.internet.userName(),
        color1: randomColor(),
        color2: randomColor(),
        angle: randomAngle()
      })
    }
    setPeople([...peopleToAdd])
  }, []);

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
            <input type="search" placeholder={"Search"} autoFocus={true} onChange={element => setFilter(element.target.value)} />
          </div>
        </div>
      </div>
      <ol className={"app-people"}>
        {people
          .filter(person => person.username.toLowerCase().includes(filter.toLowerCase()) || person.name.toLowerCase().includes(filter.toLowerCase()))
          .sort(((a, b) => {
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
              </Link>
              <Overflow>
                <a>
                  <LogoGithub />
                  GitHub profile
                </a>
                <hr/>
                <a>
                  <SettingsOutline />
                  Configure
                </a>
                <a>
                  <CloseCircleOutline />
                  Delete user
                </a>
              </Overflow>
            </li>
          )
        })}
      </ol>
    </div>
  );
}
