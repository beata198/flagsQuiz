import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import openMenuImage from "../../assets/icons/menu.svg";
import closeMenuImage from "../../assets/icons/close.svg";

const Navbar = () => {
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandle = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target) && showMenu === true) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [showMenu]);

  const iconMenu = showMenu ? closeMenuImage : openMenuImage;
  const classesMenuLists = showMenu
    ? "w-screen flex flex-col top-[72px] left-0 right-0 items-center text-xl py-10 gap-6 md:gap-5 absolute md:gap-5 bg-stone-900"
    : "md:flex hidden md:gap-5 items-center";

  return (
    <nav
      className="flex justify-between items-center py-5 px-5 relative z-999 "
      ref={menuRef}
    >
      <div className="text-2xl font-logo font-bold md:ml-0">
        <Link to="" onClick={() => setShowMenu(false)}>
          FlagQuiz
        </Link>
      </div>
      <div className="md:hidden md:mr-0 flex items-center">
        <button onClick={showMenuHandle}>
          <img className="h-6" src={iconMenu} alt="hamburger button" />
        </button>
      </div>
      <ul className={classesMenuLists}>
        <li className="md:hidden text-white md:text-primary font-bold md:hover:text-stone-400">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-cardHover md:text-stone-400" : ""
            }
            onClick={() => setShowMenu(false)}
          >
            Home Page
          </NavLink>
        </li>

        <li className="text-white md:text-primary font-bold  md:hover:text-stone-400">
          <NavLink
            to="/flags"
            className={({ isActive }) =>
              isActive ? "text-cardHover md:text-stone-400" : ""
            }
            onClick={() => setShowMenu(false)}
          >
            Flags
          </NavLink>
        </li>
        <li className="text-white md:text-primary font-bold md:hover:text-stone-400">
          <NavLink
            to="/how-to-play"
            className={({ isActive }) =>
              isActive ? "text-cardHover md:text-stone-400" : ""
            }
            onClick={() => setShowMenu(false)}
          >
            How to play
          </NavLink>
        </li>
        <li className="font-semibold md:text-white md:font-bold md:text-sm">
          <NavLink
            to="/game"
            className={({ isActive }) =>
              isActive
                ? " bg-cardHover md:bg-primary px-12 py-2 text-white rounded-md"
                : "bg-white text-primary md:text-white px-12 py-2 md:bg-primary rounded-md"
            }
            onClick={() => setShowMenu(false)}
          >
            PLAY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
