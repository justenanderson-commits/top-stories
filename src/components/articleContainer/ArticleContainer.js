import './ArticleContainer.css'
import FullArticleBanner from '../fullArticleBanner/FullArticleBanner'
import FullArticleText from '../fullArticleText/FullArticleText'
import { Link } from 'react-router-dom'

const ArticleContainer = ({ foundArticle }) => {
  console.log('Article container found article: ', foundArticle)

  return (
    <div className="article-container">
      <FullArticleBanner foundArticle={foundArticle} />
      <FullArticleText foundArticle={foundArticle} />
      <Link to="/">
        <div className="home-button">All articles</div>
      </Link>
    </div>
  )
}

export default ArticleContainer
