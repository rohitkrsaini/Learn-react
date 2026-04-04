import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='bg-violet-400 p-5 text-bold text-white font-bold'>
    <nav className='flex gap-10'>

        <NavLink
         to="/"
         className={({isActive})=>{
            return `${isActive && "bg-white text-black"} px-5 py-1 rounded`
         }}
         >Home
         </NavLink>

        <NavLink
         to="/about"
         className={({isActive})=>{
            return`${isActive  && "bg-white text-black "} px-5 py-1 rounded`
         }}
         >About
         </NavLink>

        </nav>
    </header>
  )
}
export default Nav