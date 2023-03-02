import './SummaryCard.css'
import { Link } from 'react-router-dom'

const SummaryCard = ({ headline, published, section, findArticle }) => {
  const handleClick = (headline) => {
    findArticle(headline)
  }

  return (
    <Link to="/article/full-article">
      <div className="summary-card" onClick={(e) => handleClick(headline)}>
        <h3> {headline} </h3>
        <p className='updated'> Updated: {published}</p>
      </div>
    </Link>
  )
}

export default SummaryCard
