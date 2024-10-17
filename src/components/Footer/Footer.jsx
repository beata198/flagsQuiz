import { Link } from "react-router-dom";
import arrowUpRightImg from "../../assets/icons/up-right-arrow.webp";

const credits = [
  {
    link: "https://restcountries.com/",
    title: "",
    text: "Used API - REST COUNTRIES",
  },
  {
    link: "https://datahub.io/core/geo-countries",
    title: "country polygons, GeoJSON",
    text: "Country Polygons as GeoJSON",
  },
  {
    link: "https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6896",
    title: "",
    text: "Sound Effect - sound wink - Pixabay",
  },
  {
    link: "https://www.flaticon.com/free-icons/arrow",
    title: "arrow icons",
    text: "Arrow icons created by Stockio - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/up-right-arrow",
    title: "up right arrow icons",
    text: "Up right arrow icons created by Rahul Kaklotar - Flaticon",
  },
  // {
  //   link: "https://www.flaticon.com/free-stickers/flags",
  //   title: "flags stickers",
  //   text: "Flags stickers created by Stickers - Flaticon",
  // },
  {
    link: "https://www.flaticon.com/free-icons/africa",
    title: "africa icons",
    text: "Africa icons created by Good Ware - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/australia",
    title: "australia icons",
    text: "Australia icons created by Good Ware - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/europe",
    title: "europe icons",
    text: "Europe icons created by Good Ware - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/bank-of-america",
    title: "bank of america icons",
    text: "Bank of america icons created by Good Ware - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/asia",
    title: "asia icons",
    text: "Asia icons created by Good Ware - Flaticon",
  },
  {
    link: "https://storyset.com/internet",
    title: "robot 404",
    text: "Internet illustrations by Storyset - robot 404",
  },
  {
    link: "https://storyset.com/people",
    title: "",
    text: "People illustrations by Storyset - around the world",
  },
];

const Footer = () => {
  return (
    <section className="w-full bg-primary text-white">
      <div className="container mx-auto flex flex-col py-12 px-5 md:px-0 md:py-20 gap-10 md:gap-5">
        <div className="flex flex-col">
          <Link to="" className="text-2xl font-logo font-bold pb-3">
            FlagQuiz
          </Link>
          <Link to="/">Home Page</Link>
          <Link to="/how-to-play">How to play</Link>
          <Link to="/flags">Flags</Link>
        </div>
        <div>
          <h6 className="font-bold mb-1">Credits</h6>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm ">
            {credits.map((link, index) => (
              <li key={`${link.text}${index}`}>
                <a
                  href={link.link}
                  className="flex items-center gap-1 hover:text-gray-400"
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                  <img src={arrowUpRightImg} alt="" className="h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
