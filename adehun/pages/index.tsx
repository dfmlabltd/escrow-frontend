import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative auth-wrapper font-adreg" id="authLogin">
      <header className="relative" aria-labelledby="Header">
        <div className="container">
          <div className="flex justify-center py-4">
            <img
              src="../assets/Logo/Group 37470.png"
              alt="Adehun Logo"
              className="w-16 object-contain"
            />
          </div>
        </div>
      </header>

      <main className="relative pt-8" aria-labelledby="Login Section">
        <div className="container">
          <div className="relative w-full flex justify-center">
            <div className="relative w-[30em] p-4">
              <div className="w-full">
                <div
                  className="relative flex flex-col text-center gap-1.5 text-white"
                  aria-labelledby="Header text"
                >
                  <h1 className="text-4xl font-semibold">
                    Continue to your space
                  </h1>

                  <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quo
                  </p>
                </div>

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
                      <span className="text-base">
                        Sign in with your wallet
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative pt-24" aria-labelledby="Footer">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div
              className="text-white text-sm flex flex-col gap-1 relative"
              aria-labelledby="Contact"
            >
              <h4>Need help? Contact</h4>
              <p className="text-secondary underline">hello@adehun.com</p>
            </div>
            <div className="text-sm">
              <span className="text-white">
                2022. Adehun. All rights are reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
