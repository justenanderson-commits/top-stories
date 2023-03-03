import './ArticleContainer.css'
import { Link } from 'react-router-dom'

const ArticleContainer = ({ foundArticle }) => {
  return (
    <div className="article-container">
      <h2>{foundArticle.title}</h2>
      <div className="full-article-banner">
        <div className="article-details">
          <h3 className="abstract">{foundArticle.abstract}</h3>
          <h4>
            Section: {foundArticle.section}, {foundArticle.subsection}
          </h4>
          <h4> {foundArticle.byline} </h4>
          <h4>Updated: {foundArticle.updated_date}</h4>
          <Link to={foundArticle.url} target="_blank">
            <div className="full-article-button">Read Full Article</div>
          </Link>
        </div>
        <div className="article-image">
          <img src={foundArticle.multimedia[1].url} alt={foundArticle.multimedia[1].caption}/>
          <div className="image-caption">
            {' '}
            {foundArticle.multimedia[1].caption}{' '}
          </div>
        </div>
      </div>

      <Link to="/">
        <div className="home-button">All articles</div>
      </Link>
    </div>
  )
}

export default ArticleContainer
