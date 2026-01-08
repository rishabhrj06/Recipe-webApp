import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipes from '../Pages/Recipe'
import CreateRecipe from '../Pages/CreateRecipe'
import SingleRecipe from '../Pages/SingleRecipe'
import EditRecipe from '../Pages/EditRecipe'

const MainRouter = () => {
  return <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/recipe' element={<Recipes />}/>
              <Route path='/recipe/details/:id' element={<SingleRecipe />}/>
              <Route path='/EditRecipe/:id' element={<EditRecipe />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/CreateRecipe' element={<CreateRecipe />}/>
          </Routes>
}

export default MainRouter