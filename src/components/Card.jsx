import Tippy from "@tippyjs/react";
import tippyProps from "../data/tooltips";
import {Link} from "react-router-dom";
import ResizeOutline from "./icons/ResizeOutline";

export default function Card({title, children, expandable, expandableLink}) {
  return (
    <div className={"jenkins-cards__item"}>
      {title &&
        <p className="jenkins-cards__item__title">
          { title }
          <div className="jenkins-cards__item__title__actions">
            {expandable &&
              <Tippy content="Expand" {...tippyProps}>
                <Link to={expandableLink}>
                  <ResizeOutline/>
                </Link>
              </Tippy>
            }
          </div>
        </p>
      }
      { children }
    </div>
  )
}
