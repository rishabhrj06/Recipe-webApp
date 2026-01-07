import React, { useContext } from 'react'
import { recipeContext } from '../Context/RecipeContext'
import RecipeCard from '../Components/RecipeCard'

const Recipe = () => {

  const { data } = useContext(recipeContext);

  const read = data.map((recipe) => (
    <div key={recipe.id} className='flex justify-between bg-white text-slate-400 m-3 h-[35vh] overflow-hidden rounded-xl shadow-lg hover:scale-99 transition-transform duration-200 in-hover:shadow-md hover:shadow-white/25'> 
      <RecipeCard key={recipe.id} data={recipe} /> 
    </div>
    ));

  return (
    <div className='mx-20 mt-3 grid grid-cols-2 '>{read}</div>
  )
}

export default Recipe