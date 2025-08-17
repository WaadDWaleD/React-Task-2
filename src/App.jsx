import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Home/Layout/Layout'
import Home from './Components/Home/Home'
import ItemDetails from './Components/ItemsDetails/ItemDetails'
import Error from './Components/Home/Error/Error'

function App() {
  let router = createHashRouter([
    {path:""  , element:<Layout></Layout> ,children:[
      {index:true , element: <Home></Home>},
      { path: "item/:id", element:<ItemDetails></ItemDetails> },
      {path:"*" , element: <Error></Error>}
    ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
