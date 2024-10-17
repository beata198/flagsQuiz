import { HashLink } from "react-router-hash-link";
import arrowImg from "../../assets/icons/right-arrow.png";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  let location = useLocation();

  return (
    <HashLink to={`${location.pathname}${location.search}#`}>
      <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10 bg-primary text-default rounded-full w-16 h-16 flex justify-center items-center text-3xl">
        <img
          className="h-5 md:h-6 -rotate-90"
          src={arrowImg}
          alt="scroll to top page"
        />
      </div>
    </HashLink>
  );
};

export default ScrollTop;
