import './FullArticleBanner.css'

const FullArticleBanner = ({ foundArticle }) => {
  // console.log('Found article: ', foundArticle)

  return (
    <div className="full-article-banner">
      <h2>{ foundArticle.title }</h2>
      <h3>{ foundArticle.abstract }</h3>
      <h4>Section: { foundArticle.section }, {foundArticle.subsection}</h4>
      <p> {foundArticle.byline} </p>
      <p>Updated: { foundArticle.updated_date }</p>
    </div>
  )
}

export default FullArticleBanner
