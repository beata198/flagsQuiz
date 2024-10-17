import CardWrapper from "../UI/CardWrapper";
import ScrollTop from "../UI/ScrollTop";
import NavbarRegions from "../Navbar/NavbarRegions";

const FlagGrid = ({ data }) => {
  return (
    <section className="relative">
      <NavbarRegions />
      {Object.keys(data).map((key) => (
        <div key={key} className="my-10" id={key}>
          <h2 className="text-2xl md:text-5xl uppercase font-bold mb-3 md:mb-10 text-center">
            {key === "oceania" ? "australia i oceania" : key}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data[key].map((country, index) => (
              <CardWrapper
                key={index}
                classes="flex flex-col p-4 gap-4 justify-between text-center"
              >
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="h-32 md:h-44 rounded-md object-scale-down"
                />
                <p className="text-sm font-semibold uppercase">
                  {country.name.common}
                </p>
              </CardWrapper>
            ))}
          </div>
        </div>
      ))}
      <ScrollTop />
    </section>
  );
};

export default FlagGrid;
