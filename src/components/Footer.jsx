import { navItems } from "../assets/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const getDate = new Date();
  const year = getDate.getFullYear();

  return (
    <footer className=" w-full py-5  gap-8 bg-slate-500">
      <div className="w-5/6 mx-auto flex flex-col justify-start gap-5">
        <h1>The 10 Boys Club</h1>
        <ul className="flex justify-between items-end gap-4">
          {
          navItems.map((item)=> ( 
            <li key={item.title}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))
          }
        </ul>
        <p>&copy;10 Boys Club-<span>{year}</span></p>
      </div>
    </footer>
  )
}

export default Footer;