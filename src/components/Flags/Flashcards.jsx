import { useState } from "react";
import { regionsList } from "../../store/data-flags";
import CardWrapper from "../UI/CardWrapper";
import Flashcard from "./Flashcard";

const Flashcards = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState(regionsList[0]);
  const [flashcardsData, setFlashcardsData] = useState([]);
  const [current, setCurrent] = useState(0);

  const handleSelectChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const generateFlashcardsHandle = () => {
    const findRegion = Object.keys(data).find(
      (region) => region == selectedRegion
    );

    setFlashcardsData(data[findRegion]);
    setCurrent(0);
  };

  const previousCard = () => {
    setCurrent((prev) => prev - 1);
  };

  const nextCard = () => {
    setCurrent((prev) => prev + 1);
  };

  const cardsDefault = (
    <CardWrapper classes=" flex flex-col items-center justify-center p-4 w-full h-64 md:w-[650px] md:h-[350px] rounded-md  md:text-2xl bg-white">
      To view the flashcards, simply select <br />a continent in the top right
      corner. <br />
      <span className="text-2xl font-bold">Let's get started!</span>
    </CardWrapper>
  );

  return (
    <div className="flex flex-col">
      <div className="mt-3 mb-4 md:mb-20 self-end flex gap-2 items-center">
        <label htmlFor="region">Select continent: </label>
        <select
          id="region"
          value={selectedRegion}
          onChange={handleSelectChange}
          className=" px-2 font-bold border border-card text-center shadow-custom rounded-md bg-transparent cursor-pointer"
        >
          {regionsList.map((region) => (
            <option key={region} value={region}>
              {region === "oceania" ? "australia i oceania" : region}
            </option>
          ))}
        </select>
        <button
          className="bg-primary text-default text-xs py-1 px-3 rounded-md uppercase"
          onClick={generateFlashcardsHandle}
        >
          generate
        </button>
      </div>
      <div className="flex flex-col items-center">
        {flashcardsData.length === 0 ? (
          <p className="mb-8"></p>
        ) : (
          <p className="mb-2">
            Card {current + 1} of {flashcardsData.length}
          </p>
        )}

        {flashcardsData.length > 0 ? (
          <Flashcard
            key={current}
            data={flashcardsData[current]}
            current={current + 1}
            length={flashcardsData.length}
          />
        ) : (
          cardsDefault
        )}
      </div>

      <div className="flex justify-center mt-8 gap-1">
        <button
          className="w-[125px] bg-primary text-default text-sm py-[5px] rounded-md uppercase disabled:bg-gray-500"
          onClick={previousCard}
          disabled={current === 0}
        >
          Previous
        </button>

        <button
          className="w-[125px] bg-primary text-default text-sm py-1 rounded-md uppercase disabled:bg-gray-500"
          onClick={nextCard}
          disabled={current >= flashcardsData.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
