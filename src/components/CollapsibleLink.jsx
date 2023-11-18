import {NavLink, useLocation} from "react-router-dom";
import {ChevronForwardOutline} from "react-ionicons";

export default function CollapsibleLink({item}) {
  const location = useLocation();
  const isPlugins = location.pathname.includes('plugins')

  return (
    <div className={`jenkins-sidebar__group ${isPlugins ? '' : 'jenkins-sidebar__group--collapsed'}`}>
      <NavLink key={item.name}
               to={`../settings/plugins/${item.children[0].name.toLowerCase().replaceAll(" ", "-")}`}
               className={({isActive}) => "jenkins-sidebar__item" + (isActive ? "" : "")}
               end>
        <div className="jenkins-sidebar__item__icon">
          {item.icon}
        </div>
        {item.name}
        <div className={`jenkins-sidebar__item__icon external`}>
          <ChevronForwardOutline />
        </div>
      </NavLink>
      <div className={`jenkins-sidebar__group__children`}>
        {item.children?.map(item => (
          <NavLink key={item.name}
                   to={`../settings/plugins/${item.link === "" ? item.link : item.name.toLowerCase().replaceAll(" ", "-")}`}
                   className={({isActive}) => "jenkins-sidebar__item" + (isActive ? " jenkins-sidebar__item--selected" : "")}
                   end>
            <div className="jenkins-sidebar__item__icon">
              {item.icon}
            </div>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
