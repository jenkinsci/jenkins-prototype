import {
  AnalyticsOutline, BagHandleOutline,
  BrushOutline,
  CloudOutline,
  CodeWorkingOutline,
  CubeOutline, DownloadOutline,
  ExtensionPuzzleOutline,
  FileTrayFullOutline, FolderOutline,
  HammerOutline,
  HelpCircleOutline, HomeOutline, HourglassOutline, ListOutline,
  LockClosedOutline,
  PeopleOutline,
  PowerOutline,
  ReloadOutline,
  ServerOutline,
  SettingsOutline, StarOutline, StorefrontOutline,
  TerminalOutline
} from "react-ionicons";

const dashboard = [
  {
    name: "Views",
    items: [
      {
        icon: <HomeOutline />,
        name: "All projects",
        link: ""
      },
      {
        icon: <HourglassOutline />,
        name: "Running projects"
      },
      {
        icon: <StarOutline />,
        name: "Favourites"
      },
      {
        type: 'separator',
      },
      {
        icon: <FolderOutline />,
        name: "Custom view #1"
      },
      {
        icon: <FolderOutline />,
        name: "Custom view #2"
      },
      {
        icon: <FolderOutline />,
        name: "Custom view #3"
      },
    ]
  },
]

export default dashboard;
