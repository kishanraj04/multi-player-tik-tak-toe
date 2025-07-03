import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import LoginSignUp from './pages/LoginSignUp.jsx'
import Home from './pages/Home.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'
import Profile from './pages/Profile.jsx'
import MyAccount from './pages/MyAccount.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

// ✅ Correct Toastify import
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const route = createBrowserRouter([
  { path: "/auth", element: <LoginSignUp /> },
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/myaccount", element: <MyAccount /> },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalProvider>
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </GlobalProvider>
  </Provider>
)


