import AdventureImage from "../../assets/images/adventure.svg?react";
import CardWrapper from "../UI/CardWrapper";
import FlagGridImg from "../../assets/icons/grid.svg?react";
import FlashcardsImg from "../../assets/icons/flashcards.svg?react";
import InteractiveMapImg from "../../assets/icons/interactive_map.svg?react";
import TableImg from "../../assets/icons/table.svg?react";
import ShapeSVG from "../../assets/images/shape.svg?react";
import StepOneSVG from "../../assets/images/step1_g.svg?react";
import StepTwoSVG from "../../assets/images/step2.svg?react";
import StepThreeSVG from "../../assets/images/step3_g.svg?react";
import PolandImg from "../../assets/images/poland.png";
import ArgentinaImg from "../../assets/images/argentina.png";
import ArrowImg from "../../assets/icons/arrow.svg";
import Accordion from "../HomePage/Accordion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HomePage = () => {
  return (
    <>
      <ShapeSVG className="absolute top-0 right-0 -z-10 w-3/4 h-auto xl:w-auto" />
      <div className="container mx-auto  min-h-[800px] xl:h-[80vh] flex flex-col md:flex-row md:items-center">
        <div className="order-2 md:order-1">
          <h3 className="uppercase text-cardHover font-extrabold tracking-wide	">
            Embark on an Exciting Adventure
          </h3>
          <h1 className="text-4xl font-extrabold mt-1 mb-2 uppercase tracking-wide font-logo">
            Test your flag knowledge
          </h1>
          <h5 className="text-2xl">
            Start the game and see how well you know flags from
            <span className="font-bold"> around the world</span>.
          </h5>
          <div className="mt-5 md:mt-8 flex items-center gap-6">
            <Link to="/game">
              <button className="uppercase bg-cardHover border border-cardHover text-primary rounded-md px-6 py-2 font-bold">
                play
              </button>
            </Link>

            <HashLink to="#info">
              <button className="underline font-semibold">Read more</button>
            </HashLink>
          </div>
        </div>
        <AdventureImage className="w-4/5 h-full m-auto order-1 md:order-2" />
      </div>
      <div
        className="container mx-auto flex flex-col items-center my-20"
        id="info"
      >
        <h2 className="font-logo font-extrabold uppercase text-6xl mt-12 mb-4 ">
          Explore. Learn. Win
        </h2>
        <p className="md:w-2/3 md:text-center">
          Welcome to our platform where exploration meets education and triumph.
          Our mission is to guide you on a journey of discovery.
        </p>
        <p className="mt-3 md:w-2/3 md:text-center">
          {`In the 'Flags' section, immerse yourself in the vibrant world of
          national flags and countries. Explore, learn, and deepen your
          knowledge through various data visualization methods such as grids,
          tables, flashcards, and an interactive map. As you embark on this
          educational adventure, test your newfound expertise in our flag quiz.`}
        </p>
        <div className="flex gap-5 items-center mt-10">
          <StepOneSVG className="w-1/3" />
          ➡
          <StepTwoSVG className="w-1/3" />
          ➡
          <StepThreeSVG className="w-1/3" />
        </div>
      </div>
      {/* <div className="container mx-auto">
        <h2 className={styleHeading}>How to play?</h2>
        <p className="md:w-2/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia
          amet quod, expedita, velit voluptate suscipit nulla doloremque eius
          accusantium eaque ipsam ex quos at quas tempora incidunt nisi
          recusandae! Quasi commodi illo ducimus aperiam neque, ullam incidunt
          facere fuga voluptates ipsa nesciunt quam repellat suscipit veritatis.
          Pariatur, sint esse sunt quo qui earum quam corporis eum dolores omnis
          ad.
        </p>
      </div> */}
      <div className="container mx-auto">
        <div className="flex mt-10 ">
          <div className="lg:w-1/2 md:h-[512px] md:pr-14">
            <h2 className="font-logo font-extrabold uppercase text-4xl mt-12 mb-4 ">
              Flags
            </h2>
            <p>
              {`On the 'Flags' subpage, you'll explore the captivating world of
              flags from various continents! This page not only provides
              visually engaging experiences but also offers the option to
              discover flags from different parts of the world.`}
            </p>
            <p className="mt-4">
              {`Whether you're a heraldry enthusiast or simply want to broaden
              your geographic knowledge, the 'Flags' subpage offers rich
              exploration opportunities. Choose the option that interests you
              the most and enjoy a journey through colorful national symbols
              from around the world!`}
            </p>
          </div>
          <div className="hidden md:w-1/2 lg:flex gap-14 absolute right-0 overflow-x-hidden">
            <img src={PolandImg} alt="poland flag - white red" />
            <img src={ArgentinaImg} alt="poland flag - white red" />
          </div>
        </div>

        <h4 className="font-bold my-4 ml-4 relative before:content-[''] before:absolute before:-left-4 before:h-full before:w-2 before:bg-cardHover">
          For your convenience, we offer four different display options
        </h4>
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-2 md:gap-8 font-bold text-cardHover">
          <CardWrapper classes="md:w-1/4 p-4 bg-white">
            <div className="w-16 h-16 flex justify-center items-center bg-cardHover rounded-full mb-4">
              <FlagGridImg className="w-1/2 fill-default" />
            </div>
            <h5>Grid</h5>
            <p className="my-2 font-medium text-primary text-sm min-h-[80px]">
              Explore all available flags from different continents in an
              easy-to-view grid format. Ideal for those looking to expand their
              knowledge of various countries around the world.
            </p>
            <button className="flex gap-1 items-center">
              explore <img src={ArrowImg} alt="right arrow" />
            </button>
          </CardWrapper>
          <CardWrapper classes="md:w-1/4 p-4 bg-white">
            <div className="w-16 h-16 flex justify-center items-center bg-cardHover rounded-full mb-4">
              <TableImg className="w-1/2 fill-default" />
            </div>
            <h5>Table</h5>
            <p className="my-2 font-medium text-primary text-sm min-h-[80px]">
              Choose a specific continent and view flags in a table format.
              Perfect for diving deeper into information about a particular
              region.
            </p>
            <button className="flex gap-1 items-center">
              explore <img src={ArrowImg} alt="right arrow" />
            </button>
          </CardWrapper>
          <CardWrapper classes="md:w-1/4 p-4 bg-white">
            <div className="w-16 h-16 flex justify-center items-center bg-cardHover rounded-full mb-4">
              <FlashcardsImg className="w-1/3 fill-default" />
            </div>
            <h5>Flashcards</h5>
            <p className="my-2 font-medium text-primary text-sm min-h-[80px]">
              Test your knowledge with the Flashcards Mode. Guess which country
              a flag represents and earn points. A fun and educational way to
              learn about flags.
            </p>
            <button className="flex gap-1 items-center">
              explore <img src={ArrowImg} alt="right arrow" />
            </button>
          </CardWrapper>
          <CardWrapper classes="md:w-1/4 p-4 bg-white">
            <div className="w-16 h-16 flex justify-center items-center bg-cardHover rounded-full mb-4">
              <InteractiveMapImg className="w-1/2 fill-default" />
            </div>
            <h5>Interactive Map</h5>
            <p className="my-2 font-medium text-primary text-sm min-h-[80px]">
              Discover countries on the interactive map. Click on individual
              regions, learn which countries they represent, and track your
              progress on the map.
            </p>
            <button className="flex gap-1 items-center">
              explore <img src={ArrowImg} alt="right arrow" />
            </button>
          </CardWrapper>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="font-logo font-extrabold uppercase text-4xl mt-12 mb-4 text-center">
          FAQ
        </h2>
        <Accordion />
      </div>
    </>
  );
};

export default HomePage;
