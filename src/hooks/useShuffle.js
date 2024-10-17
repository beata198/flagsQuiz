import { useEffect, useState } from "react";

const useShuffle = (objectToShuffle) => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    function fisherYatesShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const newArray = [...objectToShuffle];
    fisherYatesShuffle(newArray);
    setShuffledData(newArray);
  }, [objectToShuffle]);

  return { shuffledData };
};

export default useShuffle;
