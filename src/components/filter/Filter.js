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
          <option value="automobiles">Automobiles</option>
          <option value="books">Books</option>
          <option value="business">Business</option>
          <option value="dining">Dining</option>
          <option value="fashion">Fashion</option>
          <option value="nyregion">NY Region</option>
          <option value="opinion">Opinion</option>
          <option value="podcasts">Podcasts</option>
          <option value="us">U.S.</option>
          <option value="world">World</option>
        </select>
      </form>
    </div>
  )
}

export default Filter
