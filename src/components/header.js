import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink, NavExtLink, BlobHeader } from "./atoms"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <Link to="/" aria-label="Website logo, go back to homepage.">
        {/* <svg
          aria-hidden="true"
          role="img"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 530 373"
        >
          <path d="M307.637 285.072c31.627-38.387 81.471-113.234 86.314-208.168-52.916 10.502-106.705 32.174-156.527 63.866 1.863 9.817 12.854 73.39-3.901 126.722-12.067-46.235-32.049-79.213-42.001-93.702-39.202 31.739-74.552 70.245-103.206 114.852 6.178 26.257 34.812 51.931 71.999 59.845-45.123 3.83-88.857-7.115-127.216-34.21C131.15 116.786 300.265 24.935 486.784-9.521c-36.526 133.853-103.325 234.484-179.147 294.593zM13.373 271.268C-1.682 182.688 58.725 72.512 126.585 30.505c-13.643 22.125-19.636 34.08-28.477 60.978C174.923 21.302 289.322-3.54 386.365-12.123 234.265 29.23 77.778 118.242 13.374 271.269zM487.735 87.666c19.744 82.303 10.79 144.022-19.432 195.124-1.387-26.878-10.634-51.175-10.665-51.257-.007.146-21.579 71.84-82.148 118.436 8.956-20.031 11.304-44.879 11.304-44.879-43.279 21.442-102.288 45.54-166.712 47.429 138.556-52.395 221.66-135.299 267.653-264.853z" />
        </svg> */}
        <svg           aria-hidden="true"
          role="img"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9V18H8C6.89 18 6 17.11 6 16V13H4.5C4.08 13 3.84 12.5 4.08 12.19L6 9.66C6.19 5.95 9.23 3 13 3M13 1C8.41 1 4.61 4.42 4.06 8.9L2.5 11L2.47 11L2.45 11.03C1.9 11.79 1.83 12.79 2.26 13.62C2.62 14.31 3.26 14.79 4 14.94V16C4 17.85 5.28 19.42 7 19.87V23H18V17.5C20.5 15.83 22 13.06 22 10C22 5.03 17.96 1 13 1M17.33 9.3L15.37 9.81L16.81 11.27C17.16 11.61 17.16 12.19 16.81 12.54S15.88 12.89 15.54 12.54L14.09 11.1L13.57 13.06C13.45 13.55 12.96 13.82 12.5 13.7C12 13.57 11.72 13.08 11.84 12.59L12.37 10.63L10.41 11.16C9.92 11.28 9.43 11 9.3 10.5C9.18 10.05 9.46 9.55 9.94 9.43L11.9 8.91L10.46 7.46C10.11 7.12 10.11 6.55 10.46 6.19C10.81 5.84 11.39 5.84 11.73 6.19L13.19 7.63L13.7 5.67C13.82 5.18 14.32 4.9 14.79 5.03C15.28 5.16 15.56 5.65 15.43 6.13L14.9 8.1L16.87 7.57C17.35 7.44 17.84 7.72 17.97 8.21C18.1 8.68 17.82 9.18 17.33 9.3Z" />
        </svg>
      </Link>
      <span className="hidden sm:flex flex-grow items-center space-x-6">
        <NavLink to="/" title="Home" selected={activePage === "/"}>
          Home
        </NavLink>
        <NavLink to="/blog" title="Blog" selected={activePage === "blog"}>
          Blog
        </NavLink>
        {/* <NavLink to="/about" title="About" selected={activePage === "about"}>
          About
        </NavLink> */}
        {/* <NavExtLink
          to="https://wiki.reckoning.dev"
          title="Wiki"
          selected={activePage === "wiki"}
        >
          Wiki
        </NavExtLink> */}
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>

    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
        <BlobHeader />
      </div>
    </div>
  </header>
)

export default Header
