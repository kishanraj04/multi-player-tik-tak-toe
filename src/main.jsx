import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import LoginSignUp from './pages/LoginSignUp.jsx'
import Home from './pages/Home.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'
import Profile from './pages/Profile.jsx'
import MyAccount from './pages/MyAccount.jsx'


const route = createBrowserRouter([
  {
    path:"/auth",
    element:<LoginSignUp/>
  },{
  path:"/",
  element:<Home/>
},
{
  path:"/profile",
  element:<Profile/>
},
{
  path:"/myaccount",
  element:<MyAccount/>
}])

createRoot(document.getElementById('root')).render(
   <GlobalProvider>
    <RouterProvider router={route}/>
   </GlobalProvider>
)
