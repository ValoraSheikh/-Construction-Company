import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App