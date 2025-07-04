import { useDispatch, useSelector } from "react-redux";
import { useDirectLoginQuery } from "../../api/Api";
import { setLoginUser } from "../../store/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageSkeleton from "../skeleton/PageSkeleton";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useDirectLoginQuery();
  const loginUser = useSelector((state) => state.loginUser);
  const { userName } = loginUser || {};

  useEffect(() => {
    if (data?.loginUser) {
      dispatch(setLoginUser(data.loginUser));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (!userName && !isLoading) {
      navigate("/");
    }
  }, [userName, isLoading, navigate]);

  if (isLoading) return <PageSkeleton/>;

  return children;
};

export default AuthLoader;
