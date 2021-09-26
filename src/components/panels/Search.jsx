function Search(props) {
  return (
    <div className={"app-search-overlay"} onClick={e => props.hook(false)}>
      <div>
        <input placeholder="Search Jenkins" autoFocus/>
      </div>
    </div>
  )
}

export default Search