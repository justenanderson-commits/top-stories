import SummaryCard from '../summaryCard/SummaryCard'
import './SummaryContainer.css'


const SummaryContainer = ({ articles }) => {
  console.log('Single Article: ', articles[0])
    const showSummaries =
      articles.map(article => {
        return <SummaryCard 
          headline={ article.title }
          published={ article.updated_date }
          section={ article.section }
        />
      })
    

  return <div className="summary-container">
      <SummaryCard />
      { showSummaries }
    </div>
}

export default SummaryContainer
