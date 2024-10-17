import ScrollTop from "../UI/ScrollTop";
import NavbarRegions from "../Navbar/NavbarRegions";

const Table = ({ data }) => {
  return (
    <section className="relative">
      <NavbarRegions />
      <div className="flex flex-col justify-center w-full items-center">
        {Object.keys(data).map((key) => (
          <table
            className="w-full md:w-3/4 lg:w-3/5 mt-10 table-fixed rounded-t-lg"
            key={key}
            id={key}
          >
            <caption className="uppercase mb-4 font-bold text-2xl md:text-5xl">
              {key === "oceania" ? "australia i oceania" : key}
            </caption>
            <thead className="border border-card border-separate rounded-md text-center">
              <tr>
                <th className="border-r w-8 md:w-24">Lp.</th>
                <th className="border-r w-1/3">Flag</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {data[key].map((country, index) => (
                <tr key={index} className="border md:hover:bg-gray-200">
                  <th className="border-r ">{index + 1}</th>
                  <th className="border-r flex justify-center p-2">
                    <img
                      src={country.flags.png}
                      alt={country.flags.alt}
                      className="h-10 md:h-16 rounded-md "
                    />
                  </th>
                  <th>{country.name.common}</th>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>

      <ScrollTop />
    </section>
  );
};

export default Table;
