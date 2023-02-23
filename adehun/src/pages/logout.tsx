import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../utils/constants";
import Preloader from "../widgets/Preloader";

const LogoutPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
    navigate(LOGIN_PAGE);
  });
  return <Preloader />;
};

export default LogoutPage;
