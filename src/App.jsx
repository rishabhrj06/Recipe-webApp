import React from "react"
import MainRouter from "./Routers/MainRouter"
import Navbar from "./Components/Navbar"


function App() {
 
  return (    
    <div className="min-h-screen w-full bg-gray-700 font-inter text-white">
      
      <Navbar />
      <MainRouter />
      

    </div>

  )
}

export default App
