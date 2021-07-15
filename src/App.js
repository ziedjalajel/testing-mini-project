import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import BestInClass from "./components/BestInClass";
import SuperiorQuality from "./components/SuperiorQuality";
import SanityCheck from "./components/SanityCheck";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutUs />
      <BestInClass />
      <SuperiorQuality />
      <SanityCheck />
      <ContactUs />
    </div>
  );
}

export default App;
