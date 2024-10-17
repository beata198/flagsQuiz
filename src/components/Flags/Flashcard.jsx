import { useState } from "react";
import CardWrapper from "../UI/CardWrapper";

const Flashcard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipFlashcardHandle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardWrapper
      classes={`relative w-full h-64 md:w-[650px] md:h-[350px] rounded-md text-2xl bg-white cursor-pointer transform  ${
        isFlipped ? "rotate-180 " : ""
      }`}
      onClick={flipFlashcardHandle}
      style={{ perspective: "1000px" }}
    >
      <div className="p-6 w-full h-full flex justify-center items-center">
        <div
          className={`w-full h-full flex justify-center items-center ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={data.flags.png}
            alt=""
            className="w-3/4 h-3/4 object-contain "
          />
        </div>
        <div
          className={`w-full h-full absolute top-0 left-0 ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center w-full h-full rounded-md bg-gray-200 rotate-180">
            {data.name.common}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Flashcard;
