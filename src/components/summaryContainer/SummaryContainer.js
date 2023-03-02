import Filter from '../filter/Filter'
import SummaryCard from '../summaryCard/SummaryCard'
import './SummaryContainer.css'

const SummaryContainer = ({ articles, filteredSummaries, findArticle }) => {
  const showSummaries = articles.map((article) => {
    return (
      <SummaryCard
        findArticle={findArticle}
        headline={article.title}
        published={article.updated_date}
        key={article.updated_date}
      />
    )
  })

  return (
    <div className="summary-container">
      <Filter filteredSummaries={filteredSummaries} />
      {showSummaries}
    </div>
  )
}

export default SummaryContainer
