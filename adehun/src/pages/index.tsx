import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
    <>
  {/* Section Container */}
  <div className="relative font-adreg">
    {/* Header Section starts here */}
    <header className="relative" id="header">
      <section id="heroSection" className="font-adreg">
        {/* Header section container */}
        <div className="min-h-screen bg-dark">
          {/* NavBar Section */}
          <div className="container" aria-labelledby="Header">
            {/* Navbar starts here */}
            <nav
              id="NavBar"
              className="flex justify-between items-center gap-4 py-8 text-sm"
              aria-labelledby="Navbar"
            >
              {/* Nav Logo starts here */}
              <div className="w-8 flex items-center">
                {/* Logo */}
                <img
                  src="./public/assets/Logo/Group 37467.png"
                  alt="Adehun logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Nav Links starts here */}
              <ul
                className="hidden md:flex justify-between items-center text-white gap-3 h-[52px] bg-gray-400/5 px-2 border-none py-2 box-border navlinks"
                aria-labelledby="Menu-bar"
              >
                {/* Links */}
                <a href="#">
                  <li>Developer</li>
                </a>
                <a href="#">
                  <li className="flex flex-row items-center gap-2">
                    Solution
                    <p className="bg-white flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                      >
                        <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
                      </svg>
                    </p>
                  </li>
                </a>
                <a href="#">
                  <li className="flex flex-row items-center gap-2">
                    Use Cases
                    <p className="bg-white flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                      >
                        <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
                      </svg>
                    </p>
                  </li>
                </a>
                <a href="#">
                  <li>DAO</li>
                </a>
              </ul>
              {/* Navbar Button starts here */}
              <div>
                {/* Create Contract btn with icon starts here */}
                <button
                  className="bg-gray-400/5 h-[52px] pl-4 pr-2 flex items-center flex-row py-4 rounded-[40px] text-white justify-center gap-4 box-border navBtnIcon"
                  aria-label="Create Contract"
                >
                  Create Contract
                  {/* Button Icon */}
                  <div className="bg-gray-400/10 rounded-full box-border w-[40px] h-[40px] flex justify-center items-center btnIconInner">
                    <div className="w-4 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="inherit"
                        height="inherit"
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                      >
                        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </nav>
            {/* Hero Section starts here */}
            <div
              className="relative pt-32"
              id="HeroSection"
              aria-labelledby="Hero Section"
            >
              {/* Hero Section Wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-0 gap-x-0 md:gap-x-8">
                {/* Hero Section Content */}
                <div className="text-white flex flex-col gap-6 max-w-md">
                  {/* Title content */}
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-loose md:leading-[5rem] tracking-wider">
                    Decentralized <br />
                    Escrow For <br />
                    Web3
                  </h1>
                  {/* Paragraph content */}
                  <p className="text-sm leading-normal">
                    Adehun is a decentralized payment protection system for Web3
                    that allows parties to establish trust while using
                    peer-to-peer crypto payments.
                  </p>
                  {/* Hero Button starts here */}
                  <p className="text-sm flex flex-col md:flex-row gap-2 mt-6 heroBtn">
                    {/* Hero Button */}
                    <button className="bg-gray-400/5 px-6 flex items-center py-4 rounded-[40px] text-white justify-center box-border">
                      Create An Account
                    </button>
                    {/* Hero Button */}
                    <button className="bg-none px-6 flex items-center py-4 rounded-[40px] text-white justify-center box-border">
                      Create Contract
                    </button>
                  </p>
                </div>
                {/* Hero Section Image */}
                <div className="relative w-full md:w-[630px] -top-7">
                  <img
                    src="./public/assets/fluid_like_shape_1809.png"
                    alt="Adehun Fluid picture"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Hero Section base starts here */}
          <div
            className="relative pt-16 pb-24"
            id="HeroSectionBase"
            aria-labelledby="Hero Section"
          >
            <div className="container z-50">
              {/* Hero Section Base Wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-24 md:gap-y-0 gap-x-0 md:gap-x-8">
                {/* Hero Section Base Content */}
                <div className="text-white flex flex-col gap-6 max-w-md">
                  {/* Title content */}
                  <h2 className="text-4xl font-bold tracking-wider">
                    A trustless escrow experience
                  </h2>
                  {/* Paragraph content */}
                  <p className="text-sm leading-normal">
                    A decentralized approach to protect freelancers, shoppers
                    and business in web3.
                  </p>
                  {/* Hero Base Button starts here */}
                  <p className="text-sm flex flex-row gap-2 mt-6 heroBtn">
                    {/* Hero Button */}
                    <button className="bg-gray-400/5 px-6 flex items-center py-4 rounded-[40px] text-white justify-center box-border">
                      Create An Account
                    </button>
                  </p>
                </div>
                {/* Hero Section Base Image */}
                <div className="flex md:justify-center justify-end">
                  <img
                    src="./public/assets/image 127.png"
                    alt="Trustless experience"
                    className="w-[500px] h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Hero Background */}
            <div className="w-full absolute bottom-0">
              <div className="relative">
                <img
                  src="./public/assets/Group 38644.png"
                  alt=""
                  className="w-full relative bottom-8 object-contain z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    {/* Header Section ends here */}
    {/* Main Section starts here */}
    <main className="relative" id="main">
      {/* Feature Section starts here */}
      <section id="features" aria-labelledby="Features">
        {/* Features Body */}
        <div className="bg-secondary py-20 relative">
          {/* Features Container */}
          <div className="container">
            {/* Feature Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-10 gap-y-24 md:gap-y-0">
              {/* Feature Main */}
              <div
                className="col-span-1 md:col-span-3 flex flex-col"
                aria-labelledby="Leveraging blockchain"
              >
                <div className="max-w-sm flex flex-col gap-4">
                  {/* Feature Title */}
                  <h2 className="text-4xl font-bold tracking-wider text-white">
                    Leveraging blockchain for payment &amp; dispute reolution
                  </h2>
                  {/* Button starts here */}
                  <p className="text-sm flex flex-row gap-2 mt-8 featureBtn">
                    {/* Explore Feature Button */}
                    <button
                      className="bg-transparent px-12 flex items-center py-3 rounded-[40px] text-white justify-center box-border border border-white"
                      aria-label="Explore Feature"
                    >
                      Explore All
                    </button>
                  </p>
                </div>
              </div>
              {/* Features List card wrapper */}
              <div className="col-span-1 md:col-span-6 md:col-start-5 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-32 featureList">
                  {/* Features list card */}
                  <div
                    className="w-full md:w-11/12 flex flex-col gap-3"
                    aria-labelledby="Simple Escrow"
                  >
                    {/* Image */}
                    <img
                      src="./public/assets/blockchain (2) 1.png"
                      alt="Simple Escrow"
                      className="w-12 h-12 object-contain"
                    />
                    {/* Title */}
                    <h4 className="text-lg">Simple Escrow</h4>
                    {/* Paragraph */}
                    <p className="text-sm leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate beatae ex optio provident, esse quaerat
                    </p>
                  </div>
                  {/* Features list card */}
                  <div
                    className="w-full md:w-11/12 flex flex-col gap-3"
                    aria-labelledby="Multi Client Escrow"
                  >
                    {/* Image */}
                    <img
                      src="./public/assets/blockchain (2) 1.png"
                      alt="Simple Escrow"
                      className="w-12 h-12 object-contain"
                    />
                    {/* Title */}
                    <h4 className="text-lg">Multi-client Escrow</h4>
                    {/* Paragraph */}
                    <p className="text-sm leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate beatae ex optio provident, esse quaerat
                    </p>
                  </div>
                  {/* Features list card */}
                  <div
                    className="w-full md:w-11/12 flex flex-col gap-3"
                    aria-labelledby="Multi Contractor Escrow"
                  >
                    {/* Image */}
                    <img
                      src="./public/assets/blockchain (2) 1.png"
                      alt="Simple Escrow"
                      className="w-12 h-12 object-contain"
                    />
                    {/* Title */}
                    <h4 className="text-lg">Multi-contractor Escrow</h4>
                    {/* Paragraph */}
                    <p className="text-sm leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate beatae ex optio provident, esse quaerat
                    </p>
                  </div>
                  {/* Features list card */}
                  <div
                    className="w-full md:w-11/12 flex flex-col gap-3"
                    aria-labelledby="Decentralized Legal System"
                  >
                    {/* Image */}
                    <img
                      src="./public/assets/blockchain (2) 1.png"
                      alt="Simple Escrow"
                      className="w-12 h-12 object-contain"
                    />
                    {/* Title */}
                    <h4 className="text-lg">Decentralized Legal System</h4>
                    {/* Paragraph */}
                    <p className="text-sm leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate beatae ex optio provident, esse quaerat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Developers tools starts here */}
      <section id="developerTools" aria-labelledby="Developers Tools">
        {/* Developers tools */}
        <div className="bg-dark pt-20 pb-32 relative">
          {/* Developers tools Container */}
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-24 md:gap-y-0 md:gap-x-6">
              {/* Developers tools Content */}
              <div className="text-white flex flex-col gap-6 max-w-md">
                {/* Base */}
                <div className="text-xs font-bold">
                  <span className="text-secondary uppercase">
                    Developers Tools
                  </span>
                </div>
                {/* Title */}
                <h2 className="text-4xl font-bold tracking-wider">
                  Integrate adehun into your apps
                </h2>
                {/* Paragraph */}
                <p className="text-sm leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat quisquam voluptas aliquam atque. Similique aperiam
                  magnam ipsa repellendus nam natus quo sint? Ipsa totam quos
                  consectetur consequatur natus. Dignissimos, soluta.
                </p>
              </div>
              {/* Developers tools Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  src="./public/assets/image 125.png"
                  alt="Developers Tool"
                  className="w-11/12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases starts here */}
      <section id="useCases">
        {/* Use Cases*/}
        <div className="bg-dark py-20 relative">
          {/* Use Cases Container */}
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-24 md:gap-y-0 md:gap-x-6">
              {/* Use Cases Image */}
              <div className="flex justify-center md:justify-start order-last md:order-first">
                <img
                  src="./public/assets/image 125.png"
                  alt="Developers Tool"
                  className="w-11/12"
                />
              </div>
              {/* Use Cases Scroll Text */}
              <div className="relative w-full h-full flex items-center justify-start md:justify-end">
                <div className="flex flex-col max-h-[190px] overflow-y-auto">
                  <div className="text-white flex flex-col gap-4 max-w-md">
                    {/* Icon */}
                    <div />
                    {/* Title */}
                    <h2 className="text-4xl font-bold tracking-wider">
                      Escrow Payment
                    </h2>
                    {/* Paragraph */}
                    <p className="text-sm leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat quisquam voluptas aliquam atque. Similique aperiam
                      magnam ipsa repellendus nam natus quo sint? Ipsa totam
                      quos consectetur consequatur natus. Dignissimos, soluta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chain support starts here */}
      <section id="chainSupport" aria-labelledby="Suppoted Chain">
        {/* Supported Chain */}
        <div className="bg-dark pt-20 relative">
          {/* Supported Chain Container */}
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-28 border-b border-gray-50/10 gap-y-24 md:gap-y-0 md:gap-x-6">
              {/* Supported Chain Content */}
              <div className="text-white flex flex-col gap-6 max-w-md">
                {/* Title */}
                <h2 className="text-4xl font-bold tracking-wider">
                  The Largest Choice to fit perfectly with your web3 business
                </h2>
                {/* Paragraph */}
                <p className="text-sm leading-loose">
                  Supports Stable And Non-stable coins, CUSD, CEUR, CELO, USDT,
                  BNB, BUSD, MATIC Etc.
                </p>
              </div>
              {/* Developers tools Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  src="./public/assets/image 125.png"
                  alt="Developers Tool"
                  className="w-11/12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted Partner starts here */}
      <section id="trustedPartner" aria-labelledby="Trusted Partner">
        {/* Trusted Partner */}
        <div className="flex flex-col py-16 bg-dark">
          {/* Trusted Partner container */}
          <div className="container">
            {/* Section title */}
            <div className="text-white flex flex-col justify-center text-center">
              <h2 className="text-4xl font-bold tracking-wider">
                Trusted by exclusive partner
              </h2>
            </div>
            {/* Trusted partner image wrapper */}
            <div className="overflow-x-auto" id="trustedPartnerWrapper">
              <div
                className="flex flex-row flex-nowrap gap-14 justify-between place-content-center items-center mt-10"
                aria-labelledby="Adehun Trusted Partners"
              >
                {/* Trusted partner image */}
                <img
                  src="./public/assets/image 115.png"
                  alt="Opolo"
                  className="w-[120px] h-14 object-contain hover:opacity-50 transition-all"
                />
                {/* Trusted partner image */}
                <img
                  src="./public/assets/DFMlabWhite@150x.png"
                  alt="DFMLab"
                  className="w-[120px] h-14 object-contain hover:opacity-50 transition-all"
                />
                {/* Trusted partner image */}
                <img
                  src="./public/assets/image 117.png"
                  alt="EduFund"
                  className="w-[120px] h-14 object-contain hover:opacity-50 transition-all"
                />
                {/* Trusted partner image */}
                <img
                  src="./public/assets/image 118.png"
                  alt="Celo"
                  className="w-[120px] h-14 object-contain hover:opacity-50 transition-all"
                />
                {/* Trusted partner image */}
                <img
                  src="./public/assets/image 119.png"
                  alt="Ari"
                  className="w-[120px] h-14 object-contain hover:opacity-50 transition-all"
                />
                {/* Trusted partner image */}
                <img
                  src="./public/assets/DFMlabWhite@150x.png"
                  alt="DFMLab"
                  className="w-[120px] h-14 object-contain hover:opacity-50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Review starts here */}
      <section id="review" aria-labelledby="Review">
        {/* Review */}
        <div className="flex flex-col pt-16 pb-32 bg-white">
          {/* Review container */}
          <div className="container">
            <div className="relative py-5">
              {/* Review title */}
              <div className="flex flex-col items-center text-center">
                <div className="text-dark flex flex-col justify-center text-center">
                  {/* title */}
                  <h2 className="text-4xl font-bold tracking-wider">
                    Why users love adehun
                  </h2>
                </div>
              </div>
              {/* Review card wrapper */}
              <div className="flex flex-col justify-between items-center py-4 md:flex-row space-x-0 gap-y-6 md:space-y-0 md:space-x-8">
                {/* Review card */}
                <div className="py-12 px-12 bg-white shadow_primary rounded-3xl space-y-10 md:w-1/2 relative md:block">
                  <div className="max-w-sm">
                    {/* Review text */}
                    <p className="text-sm text-dark leading-7">
                      "We have been waiting on this produot and now that we have
                      installed a few, We think it wil make the industry by
                      storm"
                    </p>
                    {/* Review user */}
                    <div className="flex flex-col space-y-1 mt-10">
                      <span className="text-lg font-extrabold">
                        J.Godspower
                      </span>
                      <span className="text-sm">Software Engineer</span>
                    </div>
                    {/* Review image */}
                    <div className="customer_quote">
                      <img src="./public/assets/Group 38645.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* Review card */}
                <div className="py-12 px-12 bg-white shadow_primary rounded-3xl space-y-10 md:w-1/2 relative md:block">
                  <div className="max-w-sm">
                    {/* Review text */}
                    <p className="text-sm text-dark leading-7">
                      "We have been waiting on this produot and now that we have
                      installed a few, We think it wil make the industry by
                      storm"
                    </p>
                    {/* Review user */}
                    <div className="flex flex-col space-y-1 mt-10">
                      <span className="text-lg font-extrabold">
                        J.Godspower
                      </span>
                      <span className="text-sm">Software Engineer</span>
                    </div>
                    {/* Review image */}
                    <div className="customer_quote">
                      <img src="./public/assets/Group 38645.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-4 justify-center pt-10">
                <span className="w-3 h-3 bg-secondary/50 rounded-full transition-all" />
                <span className="w-3 h-3 bg-secondary rounded-full transition-all" />
                <span className="w-3 h-3 bg-secondary/50 rounded-full transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter starts here */}
      <section id="newsletter" aria-labelledby="Newsletter">
        {/* Newsletter */}
        <div className="flex flex-col bg-dark relative">
          {/* Newsletter container */}
          <div className="container">
            {/* Newsletter wrapper */}
            <div className="bg-secondary px-6 md:px-20 py-16 rounded-[2rem] relative -top-20">
              {/* Newsletter */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-y-0 md:gap-x-4 items-center">
                <div className="flex flex-col col-span-1 md:col-span-3 text-white max-w-sm gap-y-4">
                  {/* text */}
                  <h3 className="text-2xl tracking-wide leading-[1.8] font-semibold">
                    Let's make your smart contract and increase the efficency of
                    your businees. lorem
                  </h3>
                </div>
                <div className="flex flex-col col-span-1 md:col-span-2">
                  {/* newsletter input */}
                  {/* text */}
                  <h2 className="text-lg font-normal tracking-wide text-white">
                    Subscribe to mailing list
                  </h2>
                  {/* input */}
                  <div className="flex flex-row mt-6 relative">
                    <input
                      type="text"
                      className="text-sm flex-1 max-w-full bg-transparent border h-[52px] py-4 border-gray-200/40 rounded-full px-8 outline-none text-white"
                      placeholder="Enter your email address"
                     
                    />
                    <button
                      className="bg-dark w-18 h-[52px] pl-4 pr-2 flex items-center flex-row py-4 rounded-[40px] text-white justify-center gap-4 box-border absolute right-0"
                      aria-label="Create Contract"
                    >
                      <Link to="/login">Submit</Link>
                      {/* Button Icon */}
                      <div className="bg-gray-400/10 rounded-full box-border w-[40px] h-[40px] flex justify-center items-center btnIconInner">
                        <div className="w-4 bg-white rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="inherit"
                            height="inherit"
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)" }}
                          >
                            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* main Section ends here */}
    {/* footer starts here */}
    <footer className="relative" id="header">
      {/* footer */}
      <section id="footer" aria-labelledby="Footer">
        <div className="flex flex-col bg-dark relative pb-12">
          {/* footer cobntainer */}
          <div className="container">
            {/* footer wrapper */}
            <div className="relative">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 space-x-0 space-y-16 md:space-y-0 md:space-x-16">
                {/* footer column */}
                <div className="flex flex-col gap-6 text-white sm:col-span-2 md:col-span-1">
                  {/* footer logo */}
                  <img
                    src="./public/assets/Logo/Group 37467.png"
                    alt="Adehun footer logo"
                    className="w-8 object-contain"
                  />
                  <p className="text-sm">
                    if you have a question, please contact at
                    <span className="underline">hello@adehun.com</span>
                  </p>
                  <div>
                    <span className="text-base">Follow Us On</span>
                    <div className="flex flex-row gap-x-3 mt-2">
                      <img
                        src="./public/assets/F.png"
                        alt="Twitter"
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="./public/assets/L.png"
                        alt="Twitter"
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="./public/assets/T.png"
                        alt="Twitter"
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="./public/assets/R.png"
                        alt="Twitter"
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="./public/assets/I.png"
                        alt="Twitter"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                {/* footer column */}
                <div className="flex flex-col gap-y-4 text-sm text-white">
                  <h4 className="ffont-medium text-base">Company</h4>
                  <ul className="flex flex-col list-none gap-y-4 leading-relaxed mt-3 text-gray-400">
                    <a href="#">
                      <li>Support</li>
                    </a>
                    <a href="#">
                      <li>Privacy Policy</li>
                    </a>
                    <a href="#">
                      <li>Terms and Condition</li>
                    </a>
                    <a href="#">
                      <li>LearningHub</li>
                    </a>
                  </ul>
                </div>
                {/* footer column */}
                <div className="flex flex-col gap-y-4 text-sm text-white">
                  <h4 className="font-medium text-base">Use cases</h4>
                  <ul className="flex flex-col list-none gap-y-4 leading-relaxed mt-3 text-gray-400">
                    <a href="#">
                      <li>Market</li>
                    </a>
                    <a href="#">
                      <li>Personal Saving</li>
                    </a>
                    <a href="#">
                      <li>Assets Inheritance</li>
                    </a>
                    <a href="#">
                      <li>Crypto assets protection</li>
                    </a>
                    <a href="#">
                      <li>Crypto assets protection</li>
                    </a>
                  </ul>
                </div>
                {/* footer column */}
                <div className="flex flex-col gap-y-4 text-sm text-white">
                  <h4 className="font-medium text-base">System external</h4>
                  <ul className="flex flex-col list-none gap-y-4 leading-relaxed mt-3 text-gray-400">
                    <a href="#">
                      <li>Developer</li>
                    </a>
                    <a href="#">
                      <li>Freelancer</li>
                    </a>
                    <a href="#">
                      <li>DAO member</li>
                    </a>
                    <a href="#">
                      <li>DAO Third Party System</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
    {/* Footer starts ends here */}
  </div>
</>

    </div>
  );
};

export default Home;
