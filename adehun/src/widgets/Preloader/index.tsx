const Preloader = () => {
  return (
    <section
      aria-labelledby="Preloader"
      className="w-full min-h-screen max-h-screen bg-dashprimary z-50 fixed top-0 inset-y-0 "
    >
      <div className="relative w-full h-full flex justify-center items-center text-white">
        <div className="relative bg-transparent">
          <div className="w-32 h-32 bg-transparent">
            <div className="loader-wrapper w-full h-full">
              <div className="w-full h-full bg-gray-800 rounded-full flex justify-center items-center loader-ring-1">
                <div className="w-[65%] h-[65%] bg-white rounded-full flex justify-center items-center z-50 loader-ring-2"></div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-full hidden bg-white/90 rounded-full flex justify-center items-center loader-ring-1x">
                <div className="w-[65%] h-[65%] bg-gray-200/50 rounded-full flex justify-center items-center z-50">
                  <div className="w-[65%] h-[65%] bg-secondary/20 rounded-full flex justify-center items-center z-50 overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/logo/013.png"}
                      alt="Logo"
                      className="w-2/4 object-contain bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
