import React from "react";
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <nav className={`relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3 dark:bg-${props.mode} bg-${props.mode}`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >{props.title}
            </a>
              
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">

                 <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#">Home</a>
                {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#about">{props.aboutText}</a> */}
              </li>
              {/* <li className="nav-item">
                
              </li> */}
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
            <div className="flex justify-center">
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Dark mode</label>
  </div>
</div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
    }

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About text is here'

// };