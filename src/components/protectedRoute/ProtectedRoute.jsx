import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
 
  const dispatch = useDispatch();
  

  const loginUser = useSelector((state) => state.loginUser);
  console.log(loginUser);
  return loginUser?.userName ? children : <Navigate to="/" replace />;
};
