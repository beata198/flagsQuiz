import { useState } from "react";
import Button from "../UI/ButtonGameOptions";
import Modal from "../UI/Modal";
import { regionsList } from "../../store/data-flags";

const arrayNumbers = [100, 75, 50, 25];

const GameOptions = ({ onChangeViewGame }) => {
  const [isOpenModal, setIsModalOpen] = useState(false);

  const [optionsGame, setOptionsGame] = useState({
    selectedContinents: [],
    selectedNumberOfFlags: 0,
  });

  const handleContinent = (continent) => {
    //Checking if a given continent is already in the selectedContinents array
    if (optionsGame.selectedContinents.includes(continent)) {
      const updatedSelectedContinents = optionsGame.selectedContinents.filter(
        (currentContinent) => currentContinent !== continent
      );
      setOptionsGame({
        ...optionsGame,
        selectedContinents: updatedSelectedContinents,
      });
    } else {
      setOptionsGame({
        ...optionsGame,
        selectedContinents: [...optionsGame.selectedContinents, continent],
      });
    }
  };

  const handleNumberOfFlags = (number) => {
    setOptionsGame({
      ...optionsGame,
      selectedNumberOfFlags: number,
    });
  };

  const isCorrect =
    optionsGame.selectedContinents.length > 0 &&
    optionsGame.selectedNumberOfFlags !== 0;

  const submitGameOptions = () => {
    if (isCorrect) {
      onChangeViewGame(optionsGame);
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isOpenModal} onClose={handleCloseModal}>
        <h2 className="mb-4 font-bold uppercase">
          Please select continent/s and number of flags
        </h2>
        <button
          className="py-2 px-4 bg-primary rounded-md text-default font-semibold "
          onClick={handleCloseModal}
        >
          OK
        </button>
      </Modal>

      <div>
        <h2 className="text-xl font-bold mb-4">Select a continent/s</h2>
        <div className="grid grid-cols-3 gap-4 ">
          {regionsList.map((continent) => {
            return (
              <Button
                key={continent}
                value={continent}
                isSelected={optionsGame.selectedContinents.includes(continent)}
                onClick={handleContinent}
              >
                <img src={`/continents/w_${continent}.png`} alt="" />
                {continent}
              </Button>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-md font-bold mt-8 mb-4">
          Select number of flags (percents of selected continents)
        </h3>
        <div className="grid grid-cols-6 gap-4">
          {arrayNumbers.map((number) => (
            <Button
              key={number}
              value={number}
              isSelected={optionsGame.selectedNumberOfFlags === number}
              onClick={handleNumberOfFlags}
            />
          ))}
        </div>
      </div>
      <button
        className="mt-10 px-12 py-2 bg-primary rounded-md text-white uppercase text-sm font-bold"
        onClick={submitGameOptions}
      >
        Play
      </button>
    </>
  );
};

export default GameOptions;
