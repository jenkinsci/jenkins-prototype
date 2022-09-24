import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function ScrollToTop() {
  let location = useLocation()

  useEffect(
    () => {
      window.scroll({top: 0})
      document.querySelector("#app-layer").scroll({top:0})
    },
    [location]
  )
}
