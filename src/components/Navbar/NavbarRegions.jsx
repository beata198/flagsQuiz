import { HashLink } from "react-router-hash-link";
import CardWrapper from "../UI/CardWrapper";
import { regionsList } from "../../store/data-flags";
import { useLocation } from "react-router-dom";

const NavbarRegions = () => {
  const location = useLocation();

  console.log(location.hash.length);

  return (
    <menu className="flex flex-wrap gap-2 justify-end items-center mt-2 mb-8 md:mb-12">
      <div>Scroll to:</div>
      {regionsList.map((region, index) => (
        <li key={index}>
          <CardWrapper
            classes={`py-1 px-2 text-sm font-semibold ${
              "#" + region === location.hash ? "bg-cardHover" : ""
            } ${
              location.hash.length === 0 && region === "africa"
                ? "bg-cardHover"
                : ""
            }`}
          >
            <HashLink to={`${location.pathname}${location.search}#${region}`}>
              {region === "oceania" ? "australia i oceania" : region}
            </HashLink>
          </CardWrapper>
        </li>
      ))}
    </menu>
  );
};

export default NavbarRegions;
