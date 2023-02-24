import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Preloader from "../widgets/Preloader";

const PayPage = () => {
  let navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    navigate(`/contract/create?beneficiary=${params.beneficiary}`);
  });
  return <Preloader />;
};

export default PayPage;
