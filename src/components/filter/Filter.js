import './Filter.css'
import DropDown from '../dropDown/DropDown'

const Filter = ({ filteredSummaries, articles }) => {
  const allSections = articles.map(article => article.section)
  const currentSections = []
  allSections.forEach((section) => {
    if (!currentSections.includes(section)) {
      currentSections.push(section)
    }
  })

  const showSections = currentSections.map(section => <DropDown section={section} key={section} />)
  
  return (
    <div className="filter">
      <form
        className="filter-form"
        onChange={(e) => filteredSummaries(e.target.value)}
      >
        <label>Filter by section:</label>
        <select>
          <option placeholder='select'>select</option>
          <option placeholder='all'>all sections</option>
          { showSections }
        </select>
      </form>
    </div>
  )
}

export default Filter



