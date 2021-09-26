import {LaptopOutline, MoonOutline, SunnyOutline} from "react-ionicons";

function ThemeSwitcher() {
  return (
    <div className={"app-theme-switcher"}>
      <button className={"app-theme-switcher__item"}>
        <div className={"app-theme-switcher__item__icon"}>
          <SunnyOutline/>
        </div>
        Light
      </button>
      <button className={"app-theme-switcher__item"}>
        <div className={"app-theme-switcher__item__icon"}>
          <MoonOutline/>
        </div>
        Dark
      </button>
      <button className={"app-theme-switcher__item app-theme-switcher__item--selected"}>
        <div className={"app-theme-switcher__item__icon"}>
          <LaptopOutline/>
        </div>
        Follow system
      </button>
    </div>
  )
}

export default ThemeSwitcher