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
// import Filter from '../filter/Filter'

function App() {
  const [ articles, setArticles ] = useState([]) 
  const [ filteredArticles, setFilteredArticles ] = useState([]) 

  console.log('Articles array length: ', articles.length)
  console.log('Filtered articles array length: ', filteredArticles.length)
  
  useEffect(() => {
    if (filteredArticles.length > 0) {
      //the problem is with this logic
      // when the filteredArray length is zero, it works
      // when it's more than zero, it doesn't work
      // therefore, I just need to set it to zero each time
      setArticles(filteredArticles)
    } else {
      setArticles(data.results)
      // this creates an infinite loop setFilteredArticles([])
    }
  })

  const filteredSummaries = (section) => { 
    let filtered = articles.filter(article => article.section === section)
    setFilteredArticles(filtered)
  }

  // import the filter
  // add the filter function here
  // if the filter function fires, set the articles state to the filtered articles
  // pass the filtered summaries prop to the filter component

  

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
