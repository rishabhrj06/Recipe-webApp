import React, { use } from 'react'
import { recipeContext } from '../Context/RecipeContext'
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {

  const {image, title, chefName, category, ingredients, instructions, id} = props.data;

  
  return (
    
    <Link to={`/recipe/details/${id}`} className='flex h-full w-full'>
          
   <div className=' h-full w-1/3' >
      <small className='text-center ml-3 font-medium text-gray-400 h-[10%]'>~  {chefName}</small>
      
      <div className='h-[90%]  w-full flex items-center justify-center'>
        <img src={image} alt="" className='object-contain h-[95%] w-[95%] rounded-lg' />
      </div>  
   </div>
   <div className='h-full w-2/3 border-l-gray-800 ml-2'>
      <h1 className='text-center text-black pt-0.5 text-shadow-2xs font-bold'>{title}</h1>
      <div className='flex flex-col gap-2 mr-3 text-sm text-slate-700'>
        <small className='block text-center bg-gray-200 font-semibold text-gray-900 rounded-sm w-1/4'>Category : {category}</small>
        <h2 className=''><span className=' text-black font-semibold leading-relaxed text-justify'>Ingredients : </span>{ingredients.slice(0, 10)+ ", "}...more</h2>
        <h2 className=''><span className=' text-black font-semibold leading-relaxed text-justify'>Instructions : </span>{instructions.slice(0, 5)}...more</h2>
      </div>
      
   </div>
   </Link>
   
  )
}

export default RecipeCard