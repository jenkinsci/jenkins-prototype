import Tippy from "@tippyjs/react";
import {EllipsisHorizontalOutline} from "react-ionicons";

export default function Overflow(props) {
  return (
    <Tippy
      content={<div className={"app-dropdown-menu"}>{props.children}</div>}
      animation="fade"
      arrow={false}
      theme="light-border"
      trigger="click"
      interactive="true"
      placement="bottom"
      appendTo="parent"
    >
      <button className={"jenkins-button jenkins-button--icon"}>
        <EllipsisHorizontalOutline />
      </button>
    </Tippy>
  )
}
