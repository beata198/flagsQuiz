/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import CardWrapper from "../UI/CardWrapper";
import arrowLeftImg from "../../assets/icons/right-arrow.png";
import arrowImg from "../../assets/icons/down-arrow.png";
import { useAnimate } from "framer-motion";
import { specialLetters } from "../../store/data-flags";
import Timer from "./Timer";
import correctSound from "../../assets/sounds/correct_answer.mp3";

const GuessingMode = ({ onBackToGameOptions, game }) => {
  const valueUserGuess = useRef();
  const correctAnswerSound = useRef();
  const [shuffleCountriesInRegion, setShuffleCountriesInRegion] = useState({
    ...game.selectedRegions,
  });
  const [guessData, setGuessData] = useState({
    totalLengthFeaturedContinents: 0,
    arraySizeRegionFlag: [],
    gameData: [],
  });
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [results, setResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrectInput, setIsCorrectInput] = useState("border-b-primary");
  const [timeLeft, setTimeLeft] = useState();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    function fisherYatesShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const shuffledRegions = {};
    for (const region in shuffleCountriesInRegion) {
      const regionArray = [...shuffleCountriesInRegion[region]];
      fisherYatesShuffle(regionArray);
      shuffledRegions[region] = regionArray;
    }

    setShuffleCountriesInRegion(shuffledRegions);

    setGuessData((prevState) => {
      const totalLength = Object.values(game.selectedRegions).reduce(
        (sum, region) => {
          return sum + region.length;
        },
        0
      );

      const transformedDataLengthContinents = Object.keys(
        game.selectedRegions
      ).map((region) => ({
        region: region,
        size: game.selectedRegions[region]
          ? game.selectedRegions[region].length
          : 0,
      }));

      return {
        ...prevState,
        totalLengthFeaturedContinents: totalLength,
        arraySizeRegionFlag: transformedDataLengthContinents,
      };
    });
  }, []);

  useEffect(() => {
    const flagPerRegion = guessData.arraySizeRegionFlag.map((el) => {
      const size = Math.floor(
        el.size * (game.optionsGame.selectedNumberOfFlags / 100)
      );
      return {
        region: el.region,
        size,
      };
    });

    const test = guessData.arraySizeRegionFlag.map((regionData) => {
      if (Object.keys(shuffleCountriesInRegion).includes(regionData.region)) {
        const matchingFlagPerRegion = flagPerRegion.find(
          (item) => item.region === regionData.region
        );
        const size = matchingFlagPerRegion ? matchingFlagPerRegion.size : 0;
        const shuffledCountries = shuffleCountriesInRegion[
          regionData.region
        ].slice(0, size);
        return shuffledCountries;
      }
      return [];
    });

    setQuestions(test.flat());
  }, [guessData]);

  useEffect(() => {
    if (attempts >= 2) {
      valueUserGuess.current.disabled = true;
      valueUserGuess.current.value = "";

      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setAttempts(0);
        valueUserGuess.current.disabled = false;
        valueUserGuess.current.focus();
      }, 1000);
    }
  }, [attempts]);

  const lastQuestion = currentQuestion === questions.length - 1;

  const wrongAnswerEndTime = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setAttempts(0);

    setIsCorrectInput("border-b-red-600");
    animate(
      "input",
      { x: [-10, 0, 10, 0], rotate: [-1, 1.3, 1.5, 0] },
      { type: "spring" }
    );

    setTimeout(() => {
      setIsCorrectInput("border-b-primary");
      valueUserGuess.current.focus();
    }, 800);
  };

  const handleNextQuestion = () => {
    const userInput = valueUserGuess.current.value.toLowerCase();
    const goodAnswer = questions[currentQuestion].name.toLowerCase();

    setAttempts((prevAttemp) => prevAttemp + 1);

    console.log(goodAnswer);

    if (userInput === goodAnswer && attempts < 2) {
      if (lastQuestion) {
        setResults(true);
      }
      correctAnswerSound.current.play();
      const points = calculateScore(timeLeft, attempts);

      valueUserGuess.current.value = "";
      setScore((prevState) => prevState + points);
      setIsCorrectInput("border-b-green-400");
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setAttempts(0);

      setTimeout(() => {
        setIsCorrectInput("border-b-primary");
        if (valueUserGuess) {
          valueUserGuess.current.focus();
        }
      }, 400);
    }

    if (userInput !== goodAnswer) {
      setIsCorrectInput("border-b-red-600");
      animate(
        "input",
        { x: [-10, 0, 10, 0], rotate: [-1, 1.3, 1.5, 0] },
        { type: "spring" }
      );

      setTimeout(() => {
        setIsCorrectInput("border-b-primary");
        valueUserGuess.current.focus();
      }, 800);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleNextQuestion();
    }
  };

  const handleTimeUpdate = (time) => {
    setTimeLeft(time);
  };

  const calculateScore = (timeLeft, attempts) => {
    let points;

    if (attempts === 0) {
      points = 10 * (timeLeft / 90);
    } else if (attempts === 1) {
      points = 5 * (timeLeft / 90);
    }

    return Math.floor(points);
  };

  return (
    <div>
      <button
        onClick={onBackToGameOptions}
        className="mb-4 flex items-center gap-1"
      >
        <img src={arrowImg} alt="" className="w-5 rotate-90" /> Back to options
      </button>
      <CardWrapper>
        {results && (
          <div className="flex flex-col items-center py-10 justify-center">
            <h3>the end!</h3>
            <p className="py-5">your score: {score}</p>
            <button
              onClick={onBackToGameOptions}
              className="bg-primary text-default py-2 px-4 rounded-md"
            >
              New Game
            </button>
          </div>
        )}

        {questions && currentQuestion !== questions.length && (
          <>
            <div className="flex flex-col px-4 md:px-24 py-10 items-center justify-center">
              <div className="w-full md:w-3/4 text-right">
                <p className="uppercase font-bold text-md">Score: {score}</p>
                <p className="uppercase font-bold text-md">
                  Attempts: {attempts} / 2
                </p>
              </div>
              <div className="w-1/3 flex justify-between ">
                <h2>
                  Question {currentQuestion + 1} / {questions.length}
                </h2>
                <Timer
                  key={currentQuestion}
                  time={90}
                  onEndTime={wrongAnswerEndTime}
                  onTimeUpdate={handleTimeUpdate}
                />
              </div>
              <img
                className=" h-32 md:h-64 mt-4  rounded-md object-contain "
                src={questions[currentQuestion]?.png}
                alt={questions[currentQuestion]?.name}
              />
              <div className="flex gap-2 my-3">
                {specialLetters.map((letter) => (
                  <button
                    key={letter}
                    className="px-4 py-2 border rounded-md "
                    onClick={() =>
                      (valueUserGuess.current.value = `${valueUserGuess.current.value}${letter}`)
                    }
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 items-end" ref={scope}>
                <input
                  type="text"
                  className={`bg-default border-b-2 rounded-md  outline-none py-2 px-4 font-bold text-l  ${isCorrectInput}`}
                  ref={valueUserGuess}
                  onKeyUp={handleKeyPress}
                />
                <button
                  className="bg-primary text-default px-4 py-2 rounded-md h-full disabled:opacity-75"
                  onClick={handleNextQuestion}
                  disabled={attempts >= 2}
                >
                  {!lastQuestion ? (
                    <img className="w-8" src={arrowLeftImg} alt="right arrow" />
                  ) : (
                    "END"
                  )}
                </button>
              </div>
              <audio ref={correctAnswerSound} src={correctSound} />
            </div>
          </>
        )}
      </CardWrapper>
    </div>
  );
};

export default GuessingMode;
