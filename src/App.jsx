import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import VisionMission from "./components/VisionMission";
import Details from "./components/Details";
import Coordinator from "./components/Coordinator";
import Collaborators from "./components/Collaborators";
import AdvisorMentor from "./components/AdvisorMentor";
import Volunteers from "./components/Volunteers";
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

      <Collaborators />

      <AdvisorMentor />

      <Volunteers />

      <Registration />

      <Footer />
    </div>
  );
}

export default App;
