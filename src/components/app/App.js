import './App.css'
import Header from '../header/Header'
import SummaryContainer from '../summaryContainer/SummaryContainer'
import ArticleContainer from '../articleContainer/ArticleContainer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import getData from '../../apiCalls/apiCalls'

function App() {
  const [allArticles, setAllArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [foundArticle, setFoundArticle] = useState({})
  let articles, endPoint

  useEffect(() => {
    if (allArticles.length) {
      return
    } else {
      getData()
        .then(data => setAllArticles(data.results))
    }
  })

  const findArticle = (headline) => {
    endPoint = headline.toString().toLowerCase().split(' ').join('-')
    setFoundArticle(articles.find((article) => article.title === headline))
  }

  const filteredSummaries = (section) => {
    let filtered = allArticles.filter((article) => article.section === section)
    setFilteredArticles(filtered)
  }

  if (filteredArticles.length > 0) {
    articles = filteredArticles
  } else {
    articles = allArticles
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <SummaryContainer
                articles={articles}
                findArticle={findArticle}
                filteredSummaries={filteredSummaries}
                endPoint={endPoint}
              />
            }
          />
          <Route
            path="/article/full-article"
            element={<ArticleContainer foundArticle={foundArticle} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
