import './ArticleContainer.css'
import FullArticleBanner from '../fullArticleBanner/FullArticleBanner'
import FullArticleText from '../fullArticleText/FullArticleText'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ArticleContainer = ({ foundArticle }) => {
  console.log('Article container found article: ', foundArticle)
  const [singleArticle, setSingleArticle] = useState({})
  // if(foundArticle) {
  //   setSingleArticle(foundArticle)
  // }
  // console.log('Single article: ', singleArticle)

  return (
    <div className='article-container'>
      <FullArticleBanner foundArticle={foundArticle}/>
      <FullArticleText foundArticle={foundArticle}/>
      <Link to="/">
        <div className='home-button'>All articles</div>
      </Link>
    </div>
  )
}

export default ArticleContainer
