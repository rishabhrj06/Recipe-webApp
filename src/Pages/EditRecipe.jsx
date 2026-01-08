import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../Context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'


const EditRecipe = () => {

  const params = useParams();
  const { data, setData } = useContext(recipeContext);
  
  const navigate = useNavigate();

  const edrecipe = data.find((recipe) => recipe.id == params.id);
  
  const {title, chefName, ingredients, instructions, category, Image} = edrecipe;
  const{register, handleSubmit, reset} = useForm({defaultValues: edrecipe});
  
  

  const submitHandler = (recipe) => {

    const updatedData = data.map((items)=>
      items.id == params.id ? {...items, ...recipe} : items
    )

    setData(updatedData);    
    toast.success('Recipe Updated Successfully!');
    reset();
    navigate(-1);

  };

  return (
      
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col items-center justify-center  gap-5 ml-[25%] mt-3 w-1/2 min-h-[89vh] bg-gray-600 border-[#111]-50 rounded-lg'>
        <h1 className='mt-3 flex items-center justify-center font-Inter text-4xl font-semibold'>Edit Recipe</h1>
        
        <input className='border-b text-center outline-0 mx-4 mt-7 w-2/3'
          {...register('title')} type="text" placeholder="Recipe Title" />

        <input className='border-b text-center outline-0 mx-4 mt-7 w-2/3' {...register('chefName')} type="text" placeholder='Chef Name'  />

        <textarea className='scroll-smooth border-b text-center resize-none overflow-y-auto outline-0 mx-4 mt-7 leading-none w-2/3'
          {...register('ingredients')} type="text" placeholder="Ingredients" />

        <textarea className='scroll-smooth border-b text-center resize-none overflow-y-auto outline-0 mx-4 mt-7 leading-none w-2/3'
          {...register('instructions')} type="text" placeholder="Instructions" />

        <select {...register('category')} className='bg-gray-600 outline-0 border-white border-b cursor-pointer text-center mx-4 mt-7 w-2/3 p-2'>
          <option value="">Select Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
          <option value="Dessert">Dessert</option>
        </select>

        <input
        className='hidden'
         {...register('imageUrl')}
         type="file"
         id = "image"
        />

        <label className="bg-gray-800 h-10 w-1/3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-950 transition" htmlFor="image">
          Upload Recipe Image
        </label>
        
        <button className='bg-gray-800 w-1/3 h-10 mb-5 rounded-lg font-semibold hover:bg-gray-950 transition duration-300' type='submit'>Update Recipe</button>        
        
      </form>
    
  )
}

export default EditRecipe