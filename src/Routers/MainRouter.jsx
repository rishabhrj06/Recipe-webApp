import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipes from '../Pages/Recipe'
import CreateRecipe from '../Pages/CreateRecipe'


const MainRouter = () => {
  return <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/recipe' element={<Recipes />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/CreateRecipe' element={<CreateRecipe />}/>
          </Routes>
}

export default MainRouter