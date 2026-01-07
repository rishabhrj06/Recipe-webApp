import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-14 flex items-center justify-center bg-gray-500 font-bold gap-24'>
      <NavLink className={(e)=>e.isActive? "text-red-400": ""} to='/' >
        Home
      </NavLink>
      <NavLink className={(e)=>e.isActive? "text-red-400": ""} to='/Recipe' >
        Recipe
      </NavLink>
      <NavLink className={(e)=>e.isActive? "text-red-400": ""} to='/About' >
        About
      </NavLink>
      <NavLink className={(e)=>e.isActive? "px-4 py-2 bg-gray-800 rounded text-red-400": "px-4 py-2 bg-gray-800 rounded"} to='/CreateRecipe'>
        Create Recipe
      </NavLink>
    </div>
  )
}

export default Navbar