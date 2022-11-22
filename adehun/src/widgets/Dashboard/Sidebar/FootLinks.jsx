function FootLinks() {
    return (
        <div className="block overflow-auto px-7 py-2">
      <ul className="flex flex-col relative pl-0 ml-0">
        <li className="w-full block py-4 mt-0.5">
          <a
            href="/index"
            className="flex items-center justify-items-center text-[0.8rem] uppercase text-white font-adreg font-bold whitespace-nowrap"
          >
            <div className="h-5 w-5 mr-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ msFilter: "" }}
                fill="rgba(255, 255, 255, 1)"
              >
                <path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path>
                <circle cx="9.5" cy="11.5" r="1.5"></circle>
                <circle cx="14.5" cy="11.5" r="1.5"></circle>
              </svg>
            </div>
            <span>Chat with Us</span>
          </a>
        </li>
        <li className="w-full block py-4 mt-0.5">
          <a
            href="/index"
            className="flex items-center justify-items-center text-[0.8rem] uppercase text-white font-adreg font-bold whitespace-nowrap"
          >
            <div className="h-5 w-5 mr-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ msFilter: "" }}
                fill="rgba(255, 255, 255, 1)"
              >
                <path d="M2 12l5 4v-3h9v-2H7V8z"></path>
                <path d="M13.001 2.999a8.938 8.938 0 00-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 00-6.364-2.637z"></path>
              </svg>
            </div>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
    )
}

export default FootLinks;