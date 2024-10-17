import countries from "../../data/countries.json";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

const InteractiveMap = ({ data }) => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const extractedData = Object.values(data).flatMap((region) => {
      return region.map((country) => {
        return {
          name: country.name.common,
          cca2: country.cca2,
          cca3: country.cca3,
          flag: country.flags.png,
        };
      });
    });

    setMapData(extractedData);
  }, []);

  const onEachCountry = (feature, layer) => {
    const ISO = feature.properties.ISO_A3;
    const countryName = feature.properties.ADMIN;

    const imgFlag = mapData.find((el) => el.cca3 === ISO);

    const popupContent = `
    <div >
      <img src="${imgFlag?.flag}" alt="${imgFlag ? imgFlag.name : "no flag"}" />
      <p class="font-bold text-center text-xsm text-white mt-5">${countryName} </p>
    </div>`;

    layer.bindPopup(popupContent);

    layer.on({
      click: changeStyle,
    });
  };

  const changeStyle = (e) => {
    const layer = e.target;
    const pathElement = layer.getElement();
    if (pathElement) {
      pathElement.style.fill = "#0f172a";
      pathElement.style.fillOpacity = "0.7";
    }
  };

  return (
    <>
      <MapContainer
        key={Math.random()}
        zoom={3}
        center={[40, 20]}
        className="w-full h-[700px] rounded-md mt-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={countries.features} onEachFeature={onEachCountry} />
      </MapContainer>
    </>
  );
};

export default InteractiveMap;
