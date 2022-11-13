const AuthFooter = () => {
  return (
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
  );
};

export default AuthFooter;
