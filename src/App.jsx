import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/bio' element={< Bio />}/>
          <Route path='/projects' element={< Portfolio />}/>
          <Route path='/contact' element={< Contact />}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App