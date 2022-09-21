import {LaptopOutline, MoonOutline, SunnyOutline} from "react-ionicons";

function ThemeSwitcher() {

  function setTheme(theme) {
    document.body.dataset["theme"] = theme
  }

  return (
    <div className={"app-theme-switcher"}>
      <button className={"app-theme-switcher__item"} onClick={() => setTheme("light")}>
        <div className={"app-theme-switcher__item__icon"}>
          <SunnyOutline/>
        </div>
        Light
      </button>
      <button className={"app-theme-switcher__item"} onClick={() => setTheme("dark")}>
        <div className={"app-theme-switcher__item__icon"}>
          <MoonOutline/>
        </div>
        Dark
      </button>
      <button className={"app-theme-switcher__item"} onClick={() => setTheme("auto")}>
        <div className={"app-theme-switcher__item__icon"}>
          <LaptopOutline/>
        </div>
        Follow system
      </button>
    </div>
  )
}

export default ThemeSwitcher
