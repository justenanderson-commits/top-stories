import './Filter.css'

const Filter = ({ filteredSummaries }) => {
  // const dynamicSections = filteredSummaries.map(article => article.section)
  // console.log('Dynamic Sections: ', dynamicSections)

  // Here I want an array of strings with the the names of the sections in today's top stories.
  // Then I can map over that array, dynamically adding each section name as the value and the visible text for each option in my Select dropdown.
  // The filter drop down may have to be a new component for that to work. 


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
