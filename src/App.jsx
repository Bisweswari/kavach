import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import VisionMission from "./components/VisionMission";
import Details from "./components/Details";
import Coordinator from "./components/Coordinator";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <Hero />

      <Overview />

      <VisionMission />

      <Details />

      <Coordinator />

      <Registration />

      <Footer />
    </div>
  );
}

export default App;
