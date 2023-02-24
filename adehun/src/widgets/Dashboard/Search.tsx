import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { contractSearch } from "../../redux/actions/contract/contract";
// TODO: search pagination using REDUX
// TODO: improve error messages
const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const search = useCallback(() => {
    const _searchContracts = async () => {
      let url;
      if (query === "") {
        url = "contract/";
      } else {
        url = "contract/?search=" + query;
      }
      const { data } = await authAxios.get(url);
      dispatch(contractSearch(data.results));
      return true;
    };
    _searchContracts();
  }, [query, dispatch]);

  return (
    <div className="flex justify-between items-center py-6 gap-4">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-dashsecondary">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
          className="block w-full h-12 pl-10 text-sm border-0 text-white bg-dashsecondary flex-1"
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          required
        />
      </div>

      <div className="w-auto h-12 border-[0.1rem] rounded-[0.2rem] border-secondary">
        <button
          onClick={() => {
            search();
          }}
          className="w-full flex flex-row h-full items-center place-content-center gap-3 px-6"
        >
          <span className="text-sm text-white">Search</span>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="rgba(255,255, 255, 1)"
          >
            <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg> */}
        </button>
        <div className="hidden absolute z-50 w-full bg-dashsecondary shadow">
          <ul
            className="py-1 text-sm text-white"
            aria-labelledby="dropdownlist"
          >
            <li>
              <a href="#none" className="block py-2 px-4">
                List Goes here
              </a>
            </li>
            <li>
              <a href="#none" className="block py-2 px-4">
                List Goes Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
