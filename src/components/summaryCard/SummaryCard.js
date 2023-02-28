import './SummaryCard.css'
import { Link } from 'react-router-dom'

const SummaryCard = () => {
  return (
    <Link to="/article/1">
      <div className="summary-card">
        <h3> Headline </h3>
        <p> Date and time published</p>
        <p> Section</p>
      </div>
    </Link>
  )
}

export default SummaryCard
