import {
  AnalyticsOutline,
  BrushOutline,
  CloudOutline, CodeWorkingOutline, CubeOutline,
  ExtensionPuzzleOutline, FileTrayFullOutline,
  HammerOutline, HelpCircleOutline, LockClosedOutline, PeopleOutline, PowerOutline, ReloadOutline,
  ServerOutline, SettingsOutline, TerminalOutline
} from "react-ionicons";

const settings = [
  {
    name: "General",
    items: [
      {
        icon: <SettingsOutline />,
        name: "System",
        link: ""
      },
      {
        icon: <BrushOutline />,
        name: "Appearance"
      },
      {
        icon: <HammerOutline />,
        name: "Tools"
      },
      {
        icon: <CloudOutline />,
        name: "Nodes and clouds"
      },
      {
        icon: <ExtensionPuzzleOutline />,
        name: "Plugins",
        external: true
      }
    ]
  },
  {
    name: "Security",
    items: [
      {
        icon: <LockClosedOutline />,
        name: "Global security"
      },
      {
        icon: <PeopleOutline />,
        name: "People"
      }
    ]
  },
  {
    name: "Troubleshooting",
    items: [
      {
        icon: <CubeOutline />,
        name: "Manage old data"
      }
    ]
  },
  {
    name: "Actions",
    items: [
      {
        icon: <ReloadOutline />,
        name: "Reload Jenkins"
      },
      {
        icon: <TerminalOutline />,
        name: "Jenkins CLI"
      },
      {
        icon: <CodeWorkingOutline />,
        name: "Script console"
      },
      {
        icon: <PowerOutline />,
        name: "Shutdown Jenkins"
      }
    ]
  },
  {
    name: "Other",
    items: [
      {
        icon: <ServerOutline />,
        name: "System information",
        link: "idk"
      },
      {
        icon: <FileTrayFullOutline />,
        name: "System log",
        link: "idk"
      },
      {
        icon: <AnalyticsOutline />,
        name: "Load statistics",
        link: "idk"
      },
      {
        icon: <HelpCircleOutline />,
        name: "About Jenkins",
        link: "about"
      }
    ]
  }
]

export default settings;
