import PassingIcon from "../components/icons/PassingIcon";
import UnstableIcon from "../components/icons/UnstableIcon";
import FailedIcon from "../components/icons/FailedIcon";
import people from "./people";
import Avatar from "../components/Avatar";

const builds = [
  {
    state: <PassingIcon />,
    name: "#375",
    message: "Manual push by Tim Jacomb",
    icon: <Avatar person={people.find(p => p.username === 'timja')} size="0.8rem" />
  },
  {
    state: <PassingIcon />,
    name: "#374",
    message: "Revise curl example for inbound agent"
  },
  {
    state: <UnstableIcon />,
    name: "#373",
    message: "Update dependency 'webpack-remove-empty-scripts' to v1.0.1"
  },
  {
    state: <UnstableIcon />,
    name: "#372",
    message: "Increase timeout for 'ManagementLinkTest#links'"
  },
  {
    state: <PassingIcon />,
    name: "#371",
    message: "Manual push by Jan Faracik",
    icon: <Avatar person={people.find(p => p.username === 'janfaracik')} size="0.8rem" />
  },
  {
    state: <FailedIcon />,
    name: "#370",
    message: "Push event to master"
  },
  {
    state: <FailedIcon />,
    name: "#369",
    message: "docs: Don't escape special chars in Jelly doc"
  },
  {
    state: <PassingIcon />,
    name: "#368",
    message: "Push event to master"
  }
]

export default builds;
