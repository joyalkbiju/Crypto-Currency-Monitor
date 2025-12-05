import React from "react"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cryptocurrencies from "./components/Cryptocurrencies"
import Exchanges from "./components/Exchanges"
import News from "./components/News"
import Cryptodetails from "./components/Cryptodetails"
import Mainlayout from "./components/Mainlayout"


const router=createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {path:"/", element: <div className="routes"><Home/></div>},
      {path:"/cryptocurrencies", element: <div className="routes"><Cryptocurrencies/></div>},
      { path: "/exchanges", element: <div className="routes"><Exchanges/></div>},
      { path: "/news", element: <div className="routes"><News/></div>},
      {path:"/crypto/:coinId",element:<div className="routes"><Cryptodetails/></div>}
    ],
  },
  
])


function App() {
  

  return (
   

      <RouterProvider router={router} />

      

    
  
      
    
  )
}

export default App
