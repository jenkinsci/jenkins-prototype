import Tippy from "@tippyjs/react";
import {EllipsisHorizontal, EllipsisHorizontalOutline} from "react-ionicons";
import {useState} from "react";

export default function Overflow(props) {
  const [icon, setIcon] = useState(<EllipsisHorizontalOutline />)

  return (
    <Tippy
      content={<div className={"app-dropdown-menu"}>{props.children}</div>}
      arrow={false}
      trigger="click"
      interactive="true"
      placement="bottom-start"
      theme="menu"
      animation="tooltip"
      appendTo={() => document.querySelector('#root')}
      onShow={() => setIcon(<EllipsisHorizontal />)}
      onHidden={() => setIcon(<EllipsisHorizontalOutline />)}
    >
      <button className={"jenkins-button overflow-button"}>
        { icon }
      </button>
    </Tippy>
  )
}
