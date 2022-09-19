import {SearchOutline} from "react-ionicons";
import {useState} from "react";
import {Link} from "react-router-dom";
import searchResults from "../../data/search-results";
import {cloneDeep} from "lodash";

function Search(props) {
  const [filter, setFilter] = useState("");

  const results = (filter) => {
    return cloneDeep(searchResults)
      .map(category => {
        category.items = category.items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        return category
      })
      .filter(category => category.items.length > 0)
  }

  return (
    <div className={"app-search-overlay"} onClick={() => props.hook(false)}>
      <div id={"global-search"}>
        <SearchOutline />
        <input placeholder="Search Jenkins" autoFocus onChange={element => setFilter(element.target.value)}/>
      </div>
      <div id={"global-search-results"}>
        {results(filter)
          .map(category => {
            return (
              <>
                <p className={"app-command-palette__heading"}>{category.name}</p>
                {category.items.map(item => {
                  return (
                    <Link to={item.link} className={"app-command-palette__result"}>
                      <div className={"app-command-palette__result__icon"}>
                        {item.icon}
                      </div>
                      {item.name}
                      <span style={{color: "var(--color-secondary)"}}>
                        {item.description}
                      </span>
                    </Link>
                  )
                })}
              </>
            )
          })}
      </div>
    </div>
  )
}

export default Search
