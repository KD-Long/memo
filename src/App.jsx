import { useState } from 'react'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Memo from './components/Memo'
import Dev from './components/Dev'

function App() {
  const [currentPage, setCurrentPage] = useState('memo') // 'memo' or 'dev'

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'memo' ? <Memo /> : <Dev />}

      <Footer/>
    </>
  )
}

export default App
