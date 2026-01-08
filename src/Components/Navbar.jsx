import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-14 flex items-center justify-center bg-gray-950 font-bold gap-24'>
      <NavLink className={(e)=>e.isActive? "text-red-400": ""} to='/' >
        Home
      </NavLink>
      <NavLink className={(e)=>e.isActive? "text-red-400": ""} to='/Recipe' >
        Recipe
      </NavLink>
      <NavLink className={(e)=>e.isActive? "text-red-400": ""} to='/About' >
        About
      </NavLink>
      <NavLink className='' to='/CreateRecipe'>
      <div className='bg-[length:200%] relative w-72 h-10 rounded-[50px] bg-[linear-gradient(to_right,#656565,#7f42a7,#6600c5,#5300a0,#757575,#656565)] animate-gradient shadow-[0_0_15px_white]' >
        <div className='absolute inset-[3px_3px_3px_3px] bg-gray-950 rounded-[50px] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-400' >
          Create Recipe
        </div >
      </div>
        
      </NavLink>
    </div>
  )
}

export default Navbar


// {(e)=>e.isActive? "px-4 py-2 bg-gray-800 rounded text-red-400": "px-4 py-2 bg-gray-800 rounded"}