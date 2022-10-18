import PassingIcon from "../components/icons/PassingIcon";
import FailedIcon from "../components/icons/FailedIcon";
import UnstableIcon from "../components/icons/UnstableIcon";
import SunIcon from "../components/icons/SunIcon";
import LightningIcon from "../components/icons/LightningIcon";
import DrizzleIcon from "../components/icons/DrizzleIcon";
import CloudIcon from "../components/icons/CloudIcon";
import SunCloudIcon from "../components/icons/SunCloudIcon";

const projects = [
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "Jenkins",
    lastSuccess: "16 hours ago",
    lastFailure: "2 days ago",
    lastDuration: "30s"
  },
  {
    state: <FailedIcon />,
    weather: <LightningIcon />,
    name: "acceptance-test-harness",
    lastSuccess: "14 hours ago",
    lastFailure: "1 day ago",
    lastDuration: "54m"
  },
  {
    state: <UnstableIcon />,
    weather: <DrizzleIcon />,
    name: "core-pr-tester",
    lastSuccess: "7 hours ago",
    lastFailure: "4 days ago",
    lastDuration: "3m"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "jenkins-test-harness",
    lastSuccess: "2 hours ago",
    lastFailure: "1 week ago",
    lastDuration: "20s"
  },
  {
    state: <PassingIcon />,
    weather: <DrizzleIcon />,
    name: "jenkins-test-harness-htmlunit",
    lastSuccess: "1 hour ago",
    lastFailure: "1 day ago",
    lastDuration: "5m"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "pom",
    lastSuccess: "22 hours ago",
    lastFailure: "23 hours ago",
    lastDuration: "30s"
  },
  {
    state: <UnstableIcon />,
    weather: <CloudIcon />,
    name: "remoting",
    lastSuccess: "1 day ago",
    lastFailure: "2 days ago",
    lastDuration: "44s"
  },
  {
    state: <FailedIcon />,
    weather: <LightningIcon />,
    name: "slave-installer-module",
    lastSuccess: "1 week ago",
    lastFailure: "2 weeks ago",
    lastDuration: "1m"
  },
  {
    state: <PassingIcon />,
    weather: <SunCloudIcon />,
    name: "stapler",
    lastSuccess: "1 hour ago",
    lastFailure: "1 week ago",
    lastDuration: "2m"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "windows-slave-installer-module",
    lastSuccess: "16 hours ago",
    lastFailure: "3 days ago",
    lastDuration: "4s"
  },
  {
    state: <FailedIcon />,
    weather: <SunCloudIcon />,
    name: "winstone",
    lastSuccess: "13 hours ago",
    lastFailure: "2 days ago",
    lastDuration: "12s"
  }
]

export default projects;
