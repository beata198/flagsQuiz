import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { FlagsContext } from "../../store/data-flags";
import CardWrapper from "../UI/CardWrapper";
import flagGridImg from "../../assets/icons/grid.svg";
import flashcardsImg from "../../assets/icons/flashcards.svg";
import interactiveMapImg from "../../assets/icons/interactive_map.svg";
import tableImg from "../../assets/icons/table.svg";
import FlagGrid from "../Flags/FlagGrid";
import Table from "../Flags/Table";
import Flashcards from "../Flags/Flashcards";
import InteractiveMap from "../Flags/InteractiveMap";

const arrayOptions = ["flag grid", "table", "flashcards", "interactive map"];

const arrayImg = [flagGridImg, tableImg, flashcardsImg, interactiveMapImg];

const Flags = () => {
  const { regions, error } = useContext(FlagsContext);

  const [searchParams, setSearchParams] = useSearchParams({
    mode: "flag grid",
  });

  const selectedMode = searchParams.get("mode");

  const handleSelectMode = (mode) => {
    setSearchParams(
      (prevMode) => {
        prevMode.set("mode", mode);
        return prevMode;
      },
      { replace: true }
    );
  };

  const isLoading =
    Object.keys(regions).length === 0 ? (
      <p className="text-center font-semibold text-xl md:text-2xl h-48 md:h-82 flex items-center justify-center animate-pulse">
        Please wait, the data is loading...
      </p>
    ) : (
      ""
    );

  return (
    <div>
      <menu className="flex gap-2 justify-end">
        {arrayOptions.map((option, index) => {
          return (
            <li key={index}>
              <CardWrapper
                classes={`${option === selectedMode ? "bg-cardHover" : ""}`}
              >
                <button
                  className="flex flex-col md:flex-row capitalize gap-2 items-center py-2 md:py-1 px-2 text-sm font-semibold"
                  onClick={() => handleSelectMode(option)}
                >
                  <img src={arrayImg[index]} alt="" className="h-4 md:h-5" />
                  {option}
                </button>
              </CardWrapper>
            </li>
          );
        })}
      </menu>
      {isLoading}
      {isLoading && error && <p>{error}</p>}
      {selectedMode === "flag grid" && !isLoading && (
        <FlagGrid data={regions} />
      )}
      {selectedMode === "table" && !isLoading && <Table data={regions} />}
      {selectedMode === "flashcards" && !isLoading && (
        <Flashcards data={regions} />
      )}
      {selectedMode === "interactive map" && !isLoading && (
        <InteractiveMap data={regions} />
      )}
    </div>
  );
};

export default Flags;
