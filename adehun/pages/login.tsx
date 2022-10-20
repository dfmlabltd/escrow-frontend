import type { NextPage } from "next";
import AuthLayout from "../layout/auth";

const LoginPage: NextPage = () => {
  return (
    <AuthLayout title="login">
      <div className="flex flex-col gap-4 pt-12">
        <div className="flex flex-col space-y-1">
          <label
            className="hidden mb-2 text-base font-medium text-white"
            aria-labelledby="Email Address"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            className="bg-gray-800/40 focus:border text-white text-base rounded-md outline-none focus:ring-secondary focus:border-secondary block w-full px-6 py-5"
            placeholder="Email Address"
          />
        </div>
        <div className="text-center py-3">
          <button
            className="bg-secondary focus:border text-white text-base rounded-md outline-none block w-full p-4"
            aria-label="Login"
          >
            Login
          </button>
        </div>
      </div>
      <div className="relative w-full py-1">
        <div className="flex justify-center items-center h-12 authDivider">
          <div className="h-full flex">
            <p className="w-12 rounded-full flex items-center justify-center text-center bg-gray-800 z-50">
              <span className="text-white text-sm">or</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col space-y-1"
        aria-labelledby="Alternative Sign In"
      >
        <div></div>
        <div className="text-center py-3">
          <button
            className="buttonAuth border text-white rounded-md outline-none block w-full p-4"
            aria-label="Sign in with your wallet"
          >
            <span className="text-base">Sign in with your wallet</span>
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};
