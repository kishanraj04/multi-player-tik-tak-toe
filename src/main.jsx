import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import Home from "./pages/Home.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import Profile from "./components/profile/Profile.jsx";
import Header from "./components/header/header.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile", 
    element: 
      <Profile />
   
  },
]);

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <RouterProvider router={route} />
  </GlobalProvider>
);
