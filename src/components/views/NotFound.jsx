import { Link } from "react-router-dom";
import imgRobot from "../../assets/images/404.svg";

const NotFound = () => {
  return (
    <div className="w-full mb-16 flex flex-col mt-16 items-center gap-4">
      <img
        className="w-80 md:w-1/3 "
        src={imgRobot}
        alt="image 404 not found page"
      />
      <Link
        to=""
        className="	bg-cardHover text-primary font-bold md:font-medium md:text-white px-12 py-3 md:py-2 md:bg-primary rounded-md"
      >
        Take Me Home
      </Link>
    </div>
  );
};

export default NotFound;
