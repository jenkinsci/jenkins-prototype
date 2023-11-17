import people from "./people";
import settings from "./settings";
import Avatar from "../components/Avatar";
import {projects} from "./projects";

const searchResults = [
  {
    name: "Projects",
    items: projects.map(project => {
      project.icon = project.state
      project.description = project.lastSuccess
      return project
    })
  },
  {
    name: "People",
    items: people.map(person => {
      person.icon = <Avatar person={person} size={"1.6rem"} />
      return person
    })
  },
  {
    name: "Settings",
    items: settings.flatMap(category => category.items)
  }
]

export default searchResults;
