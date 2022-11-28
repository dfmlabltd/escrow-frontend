function SidebarLogo() {
  return (
    <div className="h-16" aria-labelledby="Sidenav Logo">
      <a className="block px-7 py-6">
        <div className="w-full flex justify-start">
          <img
            src={process.env.PUBLIC_URL + "/assets/Logo/001.png"}
            alt="logo"
            className="h-8 justify-start object-contain"
          />
        </div>
      </a>
    </div>
  );
}

export default SidebarLogo;
