import { Link } from "react-router-dom";
import { navItems } from "../assets/constants";
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid';
import { useState } from "react";
const Navbar = () => {
  const linkStyle = `text-[1rem] text-sky-400`;
  const [mobileNav, setMobieNav] = useState(false);

  const toggleMobileMenu = () => {
    setMobieNav(true)
  }

  return (
    <nav className="w-full mb-9 fixed top-0  z-30 bg-heroColor py-6">
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
          <button className="rounded-lg border-4 p-2">
            <Link className={`${linkStyle}`} replace="true" to="/contact-us">Reach Us</Link>
          </button>
        </div>
        <button type="menu" className="flex md:hidden " onClick={toggleMobileMenu}>
          <Bars3BottomRightIcon className="w-8 h-8 text-white"/>
        </button>
      </div>
      {
        mobileNav && ( 
          <nav className="flex flex-col fixed top-0 right-0 h-full md:hidden w-[75%] z-40 py-9 bg-green-300">
            <div className="flex flex-col mx-3 justify-between">
              <div className="flex justify-between items-end">
                <h6>BC <br /> <span>Family</span></h6>
                <button className="rounded-xl p-2" type="manu" onClick={() => setMobieNav(false)}>
                  <XMarkIcon className="w-8 h-8 text-white"/>
                </button>
              </div>
              <ul className="flex flex-col text-right my-8 gap-3">
                {
                  navItems.map((item)=> ( 
                    <li key={item.title}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))
                }
              </ul>
              <div className="fixed bottom-0 right-0 ">
                social media links here
              </div>
            </div>
          </nav>
        )
      }
    </nav>
  )
}

export default Navbar;