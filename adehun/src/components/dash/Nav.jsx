import { ConnectButton } from "@rainbow-me/rainbowkit";

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
          <ConnectButton />
          <div className="flex flex-row">
            <div className="flex flex-wrap gap-4 items-center w-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
