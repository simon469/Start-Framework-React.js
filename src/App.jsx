import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'

function App() {
  let router = createBrowserRouter([
    {path : '' , element: <Layout/> , children:[
      {index:true , element : <Home/>},
      {path : 'contact' , element: <Contact/>},
      {path : 'portfolio' , element : <Portfolio/>},
      {path : 'about' , element : <About/> },
      {path : '*' , element : <NotFound/>},
    ]}
  ])

  return (
    <>
<RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
