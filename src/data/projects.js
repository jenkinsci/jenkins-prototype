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
    weather: <DrizzleIcon />,
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
    weather: <DrizzleIcon />,
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
    weather: <CloudIcon />,
    name: "remoting",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "44 seconds"
  },
  {
    state: <FailedIcon />,
    weather: <LightningIcon />,
    name: "slave-installer-module",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "1 minute"
  },
  {
    state: <PassingIcon />,
    weather: <SunCloudIcon />,
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
    weather: <SunCloudIcon />,
    name: "winstone",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "12 seconds"
  }
]

export default projects;
