import React from 'react'
import { Link } from 'react-router-dom'

 const PageNotFound = () => {
  return (
    <div className="h-screen grid place-items-center text-5xl">
    <span>oops</span><br/>
    <Link to={"/"}>black to home page</Link>
  </div>
  )
}
export default PageNotFound
