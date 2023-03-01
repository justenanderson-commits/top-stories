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
  // console.log('Data: ', data)
  const [ articles, setArticles ] = useState([]) 

  useEffect(() => {
    setArticles(data.results)
    // console.log('Data results: ', data.results)
    // console.log('Articles: ', articles)
  })

  return (
    <Router>
      <div className="App"> 
        <Header />
        <Routes>
          <Route path="/" element={<SummaryContainer articles= { articles }/>} />
          <Route path="/article/:id" element={<ArticleContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
