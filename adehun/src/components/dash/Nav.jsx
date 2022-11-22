function Nav() {
  return (
    <nav className="relative font-adreg py-1">
      <div className="flex flex-wrap items-center justify-between px-0">
        <div className="grid grid-cols-2 gap-4 items-center w-full mx-auto flex-wrap">
          <div className="flex relative items-center">
            <form className="w-full">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-dashsecondary">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full h-12 pl-10 text-sm border-0 text-gray-900 bg-dashsecondary flex-1"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-wrap gap-4 items-center w-full">
              <div className="w-[28%] h-12 border-[0.1rem] rounded-[0.2rem] border-secondary">
                <button className="w-full flex flex-row h-full items-center place-content-center gap-3 px-1">
                  <div className="bg-black text-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ msFilter: "" }}
                      fill="rgba(255, 255, 255, 1)"
                    >
                      <path d="M8 13v4H6v2h3v2h2v-2h2v2h2v-2.051c1.968-.249 3.5-1.915 3.5-3.949 0-1.32-.65-2.484-1.64-3.213A3.982 3.982 0 0018 9c0-1.858-1.279-3.411-3-3.858V3h-2v2h-2V3H9v2H6v2h2v6zm6.5 4H10v-4h4.5c1.103 0 2 .897 2 2s-.897 2-2 2zM10 7h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4V7z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-white">Ethereum</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ msFilter: "" }}
                    fill="rgba(255,255, 255, 1)"
                  >
                    <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
              </div>
              <div className="w-[28%] h-12 border-[0.1rem] rounded-[0.2rem] border-secondary">
                <button className="w-full flex flex-row h-full items-center place-content-center gap-3 px-1">
                  <div className="bg-black text-white p-1 rounded-full">
                    <div className="w-4 h-4 flex justify-center items-center">
                      <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm text-white">0x48....92dD</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ msFilter: "" }}
                    fill="rgba(255,255, 255, 1)"
                  >
                    <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex flex-row gap-4">
                <div className="w-12 h-12 border-[0.1rem] rounded-[0.2rem] border-secondary">
                  <button className="w-full flex flex-row h-full justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ msFilter: "" }}
                      fill="rgba(255,255, 255, 1)"
                    >
                      <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 003 16v2a1 1 0 001 1h16a1 1 0 001-1v-2a.996.996 0 00-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 007 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 002.818-2H9.182A2.98 2.98 0 0012 22z"></path>
                    </svg>
                  </button>
                </div>
                <div className="h-12 border-[0.1rem] rounded-[0.2rem] border-secondary flex-1">
                <button className="w-full flex flex-row h-full items-center place-content-center gap-3 px-1">
                  <div className="bg-gray-600 w-7 h-7 p-0.5 rounded-full">
                  <div className="bg-white w-full h-full rounded-full"></div>
                  </div>
                  <span className="text-sm text-white">Emmanuel A</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
