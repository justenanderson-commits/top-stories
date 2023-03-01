import './SummaryCard.css'
import { Link } from 'react-router-dom'

const SummaryCard = ({ headline, published, section }) => {
  return (
    <Link to="/article/1">
      <div className="summary-card">
        <h3> {headline} </h3>
        <p> Updated: {published}</p>
        <p> Section: {section} </p>
      </div>
    </Link>
  )
}

export default SummaryCard
