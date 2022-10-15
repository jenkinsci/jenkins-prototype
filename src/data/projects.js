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
    lastDuration: "30s"
  },
  {
    state: <FailedIcon />,
    weather: <LightningIcon />,
    name: "acceptance-test-harness",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "54m"
  },
  {
    state: <UnstableIcon />,
    weather: <DrizzleIcon />,
    name: "core-pr-tester",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "3m"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "jenkins-test-harness",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "20s"
  },
  {
    state: <PassingIcon />,
    weather: <DrizzleIcon />,
    name: "jenkins-test-harness-htmlunit",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "5m"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "pom",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "30s"
  },
  {
    state: <UnstableIcon />,
    weather: <CloudIcon />,
    name: "remoting",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "44s"
  },
  {
    state: <FailedIcon />,
    weather: <LightningIcon />,
    name: "slave-installer-module",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "1m"
  },
  {
    state: <PassingIcon />,
    weather: <SunCloudIcon />,
    name: "stapler",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "2m"
  },
  {
    state: <PassingIcon />,
    weather: <SunIcon />,
    name: "windows-slave-installer-module",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "4s"
  },
  {
    state: <FailedIcon />,
    weather: <SunCloudIcon />,
    name: "winstone",
    lastSuccess: "16 hours ago",
    lastFailure: "One day ago",
    lastDuration: "12s"
  }
]

export default projects;
