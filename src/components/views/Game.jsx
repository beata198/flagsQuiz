import { useContext, useState } from "react";
import GameOptions from "../Game/GameOptions";
import { FlagsContext } from "../../store/data-flags";
import GuessingMode from "../Game/GuessingMode";

const Game = () => {
  const { regions, error } = useContext(FlagsContext);
  const [game, setGame] = useState({
    viewGame: false,
    optionsGame: {},
    selectedRegions: {},
  });

  const changeViewGame = (options) => {
    const selectedRegions = Object.keys(regions)
      .filter((region) => options.selectedContinents.includes(region))
      .reduce((result, region) => {
        const newObjectValueLimitation = regions[region].map((el) => {
          return {
            name: el.name.common,
            png: el.flags.png,
          };
        });
        result[region] = newObjectValueLimitation;

        return result;
      }, {});

    setGame({
      selectedRegions,
      viewGame: true,
      optionsGame: options,
    });
  };

  const handleBackToGameOptions = () => {
    setGame({
      viewGame: false,
      optionsGame: {},
      selectedRegions: {},
    });
  };

  return (
    <>
      {error && <p>{error}</p>}
      {!game.viewGame && <GameOptions onChangeViewGame={changeViewGame} />}
      {game.viewGame && (
        <GuessingMode
          onBackToGameOptions={handleBackToGameOptions}
          game={game}
        />
      )}
    </>
  );
};

export default Game;
