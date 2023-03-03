import './Filter.css'

// Update the filter select drop down to be populated dynamically
const Filter = ({ filteredSummaries }) => {
  return (
    <div className="filter">
      <form
        className="filter-form"
        onChange={(e) => filteredSummaries(e.target.value)}
      >
        <label>Filter by section:</label>
        <select>
          <option placeholder="select">select</option>
          <option value="arts">Arts</option>
          <option value="crosswords">Crosswords</option>
          <option value="briefing">Briefing</option>
          <option value="movies">Movies</option>
          <option value="nyregion">NY Region</option>
          <option value="opinion">Opinion</option>
          <option value="podcasts">Podcasts</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="us">U.S.</option>
          <option value="world">World</option>
        </select>
      </form>
    </div>
  )
}

export default Filter
