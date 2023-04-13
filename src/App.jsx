import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './NavBar/Navigation'
import { Spinner } from 'reactstrap'
import "../src/landing.css"
import Footer from './Footer'

const Home = React.lazy(()=> import("./Pages/Home"))
const About = React.lazy(()=> import("./Pages/About"))
const Course = React.lazy(()=> import("./Pages/Courses"))
const Testimonial = React.lazy(()=> import("./Pages/Testimonial"))
const Community = React.lazy(()=> import("./Pages/Community"))

function App() {
  return (
    <React.Suspense fallback={<div className='position-absolute top-50 start-50 transform-translate text-secondary'>
      <Spinner type='grow'/>
    </div>}>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
          <Route path='/community' element={<Community/>}/>
        </Routes>
        <Footer/>
      </Router>
    </React.Suspense>
  )
}

export default App