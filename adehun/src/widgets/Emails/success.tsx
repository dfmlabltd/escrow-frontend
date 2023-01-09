import { useNavigate } from "react-router-dom";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import { DASHBOARD_PAGE, REDIRECT_TO_AFTER } from "../../utils/constants";

const EmailSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <EmailVerifiedMiddleware>
      <div className="bg-slate-900 object-cover w-screen h-screen">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <img
            alt="site logo"
            src={process.env.PUBLIC_URL + "/assets/Logo/Group 37470.png"}
            className="w-[64px] mt-10"
          />
          <h2 className="text-white text-3xl mt-10 ">
            Verification Successful!
          </h2>
          <p className=" py-4 px-8 font-light text-white text-center sm:mx-auto">
            Congratulations your email address was verified succesfully and your
            space <br /> is ready for your first transaction. Click the button
            below to proceed
          </p>
          <img
            src={process.env.PUBLIC_URL + "/assets/checkmark.png"}
            className="py-4 px-4"
            alt="checkmark"
          />
          <button
            onClick={() => {
              navigate(
                sessionStorage.getItem(REDIRECT_TO_AFTER) ?? DASHBOARD_PAGE
              );
            }}
            className="bg-pink-700 hover:bg-pink-700 text-white font-bold py-2 px-6 flex mt-7 w-fit h-fit"
          >
            Proceed To Your Space
          </button>
        </div>
      </div>
    </EmailVerifiedMiddleware>
  );
};

export default EmailSuccessPage;
