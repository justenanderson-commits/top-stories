import Filter from '../filter/Filter'
import SummaryCard from '../summaryCard/SummaryCard'
import './SummaryContainer.css'

const SummaryContainer = ({ articles, filteredSummaries }) => {

  const showSummaries = articles.map((article) => {
    return (
      <SummaryCard
        headline={article.title}
        published={article.updated_date}
        section={article.section}
      />
    )
  })

  return (
    <div className="summary-container">
      <Filter filteredSummaries={filteredSummaries}/>
      {showSummaries}
    </div>
  )
}

export default SummaryContainer
