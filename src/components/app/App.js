import './App.css'
import Header from '../header/Header'
import SummaryContainer from '../summaryContainer/SummaryContainer'
import ArticleContainer from '../articleContainer/ArticleContainer' 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import data from '../../apiCalls/dummyData'
import { useState, useEffect } from 'react'

function App() {
  const [ allArticles, setAllArticles ] = useState([]) 
  const [ filteredArticles, setFilteredArticles ] = useState([]) 
  let articles

console.log('Articles array length: ', allArticles.length)
console.log('Filtered articles array length: ', filteredArticles.length)
  
  useEffect(() => {
    if (allArticles.length) {
      return
    } else {
      setAllArticles(data.results)
    }
  })

  const filteredSummaries = (section) => { 
    let filtered = allArticles.filter(article => article.section === section)
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
          <Route path="/" element={<SummaryContainer articles= { articles } filteredSummaries={filteredSummaries} />} />
          <Route path="/article/:id" element={<ArticleContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
