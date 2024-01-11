import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import BasicAccordion from "./Components/Accordion/Accord";
import AllRoutes from "./Components/AllRoutes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <BasicAccordion />
      <Footer />
    </>
  );
}

export default App;
