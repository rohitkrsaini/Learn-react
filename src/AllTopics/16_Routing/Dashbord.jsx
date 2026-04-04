import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

 const Dashbord = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Dashbord