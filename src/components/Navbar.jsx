import { Link } from "react-router-dom";
import { navItems } from "../assets/constants";
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { useState } from "react";
const Navbar = () => {
  const linkStyle = `text-[1rem] text-p font-bold font-raleway hover:text:white`;
  const [mobileNav, setMobieNav] = useState(false);

  const toggleMobileMenu = () => {
    setMobieNav(true)
  }

  return (
    <nav className="w-full mb-9 fixed top-0  z-30 bg-heroColor py-6 ">
      <div className="flex justify-between w-5/6 mx-auto">
        <h1 className="font-bold text-h1 text-secondary font-raleway">BC</h1>
        <ul className="hidden md:flex justify-between items-end gap-4">
          {
          navItems.map((item)=> ( 
            <li key={item.title}>
              <Link to={item.path} className="text-secondary hover:text-bgButtonSecondary text-p hover:text-h4 font-Oswald">{item.title}</Link>
            </li>
          ))
          }
        </ul>
        <div className="hidden md:flex">
          {/* work on thebutton later */}
          <button className="rounded-lg border-none px-3 z-10 shadow-lg bg-bgButton hover:bg-bgButtonSecondary">
            <Link className={`${linkStyle}`} replace="true" to="/contact-us">Reach Us</Link>
          </button>
        </div>
        <button type="menu" className="flex md:hidden " onClick={toggleMobileMenu}>
          <Bars3BottomRightIcon className="w-8 h-8 text-black"/>
        </button>
      </div>
      {
        mobileNav && ( 
          <nav className="flex flex-col fixed top-0 right-0 h-full md:hidden w-[85%] z-40 py-9  bg-heroColor rounded-l-lg" onClick={()=> setMobieNav(false)}>
            <div className="flex flex-col mx-3 gap-4">
              <div className="flex justify-between items-center">
                <h6 className="font-raleway font-bold text-h2 text-center text-primary">THE <br /> <span>BC</span></h6>
                <button className="rounded-xl p-2 text-center bg-secondary" type="manu" onClick={() => setMobieNav(false)} >
                  <XMarkIcon className="w-8 h-8 text-white text-bold "/>
                </button>
              </div>
              <ul className="flex flex-col items-center my-8 gap-3">
                {
                  navItems.map((item)=> ( 
                    <li key={item.title} className="font-bold font-raleway text-bgButton text-p">
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))
                }
              </ul>
              {/* <div className="fixed bottom-0 right-0 ">
                social media links here
              </div> */}
            </div>
          </nav>
        )
      }
    </nav>
  )
}

export default Navbar;