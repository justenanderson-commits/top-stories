import './SummaryCard.css'
import { Link } from 'react-router-dom'

const SummaryCard = ({ headline, published, section, findArticle, endPoint }) => {
  
  const handleClick = (headline) => {
    // console.log('Headline: ', headline)
    // console.log('Found Article: ', findArticle(headline))
    findArticle(headline)
  }

  return (
    <Link to={`/article/1`}>
      <div className="summary-card" onClick={(e) => handleClick(headline)}>
        <h3> {headline} </h3>
        <p> Updated: {published}</p>
        <p> Section: {section} </p>
      </div>
    </Link>
  )
}

export default SummaryCard
