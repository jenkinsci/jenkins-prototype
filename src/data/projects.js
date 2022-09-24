import PassingIcon from "../components/icons/PassingIcon";
import FailedIcon from "../components/icons/FailedIcon";
import UnstableIcon from "../components/icons/UnstableIcon";
import SunIcon from "../components/icons/SunIcon";
import LightningIcon from "../components/icons/LightningIcon";

const projects = [
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "Jenkins",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "30 seconds"
  },
  {
    state: <FailedIcon />,
    weather: <LightningIcon />,
    name: "acceptance-test-harness",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "54 minutes"
  },
  {
    state: <UnstableIcon />,
    weather: <SunIcon />,
    name: "core-pr-tester",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "3 minutes"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "jenkins-test-harness",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "20 seconds"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "jenkins-test-harness-htmlunit",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "5 minutes"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "pom",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "30 seconds"
  },
  {
    state: <UnstableIcon />,
    weather: <SunIcon />,
    name: "remoting",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "44 seconds"
  },
  {
    state: <FailedIcon />,
    weather: <SunIcon />,
    name: "slave-installer-module",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "1 minute"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "stapler",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "2 minutes"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "windows-slave-installer-module",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "4 seconds"
  },
  {
    state: <FailedIcon />,
    weather: <SunIcon />,
    name: "winstone",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "12 seconds"
  }
]

export default projects;
