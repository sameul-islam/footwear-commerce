import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Header/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import MenProductPage from './pages/MenProductPage'
import WomenProductPage from './pages/WomenProductPage'
import ScrollToTop from './components/Loader/ScrollToTop'
import ChatWidget from './components/Chat/ChatWidget'
import SneakersProductPage from './pages/SneakersProductPage'
import BestsellersProductPage from './pages/BestsellersProductPage'
import FeaturedProductPage from './pages/FeaturedProductPage'

const App = () => {
  return (
      <Router>
        <ScrollToTop/>
        <div>
          <Navbar/>
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/men' element={<MenProductPage/>} />
             <Route path='/women' element={<WomenProductPage/>} />
             <Route path='/sneakers' element={<SneakersProductPage/>} />
             <Route path='/bestsellers' element={<BestsellersProductPage/>} />
             <Route path='/featureds' element={<FeaturedProductPage/>} />
            </Routes>
            <Footer/>
      </div>
      <ChatWidget/>
    </Router>
  )
}

export default App
