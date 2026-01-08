import React, { useContext } from 'react'
import { recipeContext } from '../Context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { SquarePen, Trash } from 'lucide-react'
import { toast } from 'react-toastify'

const SingleRecipe = () => {

  const { data } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  return recipe ? (

    <div className=' border border-white flex w-[98%]  h-[80vh] rounded-lg m-4 bg-gradient-to-t from-gray-600 to-gray-900'> 
      <div className=' flex flex-col items-center justify-around m-4 p-3 w-1/4'>
        <h1 className=' h-full text-center font-extrabold text-3xl  shadow-black mb-7 '>{recipe.title}</h1>
        <img className='object-contain rounded-xl' src={recipe.image} alt="" />
      </div>

      <div className="m-4 ml-0 p-3 w-2/4">
        <div className="h-[40%] w-full mb-2 bg-white bg-gradient-to-br from-white to-blue-400 p-3 rounded-lg">
          <details open className="text-black">
            <summary className="cursor-pointer font-medium text-md">
              Ingredients ✍️
            </summary>
            <p className="block p-1.5 rounded-lg mt-2 leading-relaxed text-sm text-slate-800">{recipe.ingredients+", "}</p>
          </details>
        </div>
        <div className="h-[60%] w-full mb-2 bg-white bg-gradient-to-br from-white to-blue-400 p-3 rounded-lg">
          <details open className="text-black">
            
            <summary className="cursor-pointer font-medium text-md">
              Instructions ✍️
            </summary>
            <p className="block p-1.5 rounded-lg mt-2 leading-relaxed text-sm text-sm text-slate-800">{recipe.instructions}</p>
          </details>
        </div>
      </div>

      <div className=' flex flex-col gap-2 m-4 p-3 w-1/4'>
        <div className='bg-gradient-to-br from-white to-blue-400 w-full rounded-lg h-1/3 p-3'>
          <small className='text-center bg-gray-200 font-semibold text-gray-900 rounded-xl px-5 py-1'>Category : {recipe.category}
          </small>
          <h3 className=' text-gray-950 font-normalrounded-xl mt-2 pl-4'>Chef: {recipe.chefName}
          </h3>
        </div> 
        <div className='flex flex-col justify-start items-start gap-3 py-0 mt-3 h-20 w-1/2'>

        <EditButton recipe={recipe}/>
        <DeleteButton id={recipe.id} />

        </div>
        
      </div>     
    </div>

)
   : "Loading...";
}

export default SingleRecipe

const EditButton = (props) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/EditRecipe/${props.recipe.id}`);
  }

  return(
      <button onClick={clickHandler} className='flex items-center justify-center gap-2 px-4 py-1  bg-gray-950 font-thin text-sm text-white rounded-lg hover:scale-105 transition-transform duration-200 hover:bg-white hover:text-black cursor-pointer'>Edit... <SquarePen size={13} strokeWidth={2.25} /></button>
  )
}

const DeleteButton = ({id}) => {

  const {deleteRecipe} = useContext(recipeContext);
  const navigate = useNavigate();
  

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure?")
    if(!confirmDelete){
      toast.info("Delete Cancelled")
      return
    }
    deleteRecipe(id);
    toast.success("Recipe Deleted!")
    setTimeout(() => {
      navigate(-1)
    }, 500)
    
  }


  return(
      <button onClick={handleDelete} className='flex items-center justify-center gap-2 px-4 py-1 bg-gray-950 font-thin text-sm text-white rounded-lg hover:scale-105 transition-transform duration-200 hover:bg-white hover:text-black cursor-pointer'>Delete <Trash size={13} strokeWidth={2.25} /></button>     
  )
}

