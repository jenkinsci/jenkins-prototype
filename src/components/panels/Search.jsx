import {SearchOutline} from "react-ionicons";

function Search(props) {
  return (
    <div className={"app-search-overlay"} onClick={e => props.hook(false)}>
      <div id={"global-search"}>
        <SearchOutline />
        <input placeholder="Search Jenkins" autoFocus/>
      </div>
      <div id={"global-search-results"}>
        Results will go here
      </div>
    </div>
  )
}

export default Search
