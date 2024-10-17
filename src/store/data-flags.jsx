import { createContext, useState, useEffect } from "react";

export const FlagsContext = createContext({
  regions: {},
});

export const regionsList = ["africa", "europe", "asia", "oceania", "americas"];
export const specialLetters = ["Å", "Ã", "Ç", "É", "Í"];

export default function FlagsContextProvider({ children }) {
  const [data, setData] = useState({ regions: {} });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDataForRegions = async () => {
      try {
        const regionsData = {};

        for (const region of regionsList) {
          const response = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );

          if (!response.ok) {
            throw new Error(
              `Error fetching data for ${region}. Status: ${response.status}`
            );
          }

          const data = await response.json();
          regionsData[region] = data;

          setData({ regions: regionsData });
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching data for regions", error);
        setError(
          `${error.message} Error fetching data for regions. Please try again later.`
        );
      }
    };

    fetchDataForRegions();
  }, []);

  const ctxValue = {
    regions: data.regions,
    error: error,
  };

  return (
    <FlagsContext.Provider value={ctxValue}>{children}</FlagsContext.Provider>
  );
}
