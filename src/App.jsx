import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/views/HomePage";
import HowToPlay from "./components/views/HowToPlay";
import Flags from "./components/views/Flags";
import Game from "./components/views/Game";
import NotFound from "./components/views/NotFound";
import FlagsContextProvider from "./store/data-flags";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-[80vh] px-5 pb-10 md:pt-5 md:px-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route
            path="/flags"
            element={
              <FlagsContextProvider>
                <Flags />
              </FlagsContextProvider>
            }
          />
          <Route
            path="/game"
            element={
              <FlagsContextProvider>
                <Game />
              </FlagsContextProvider>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
