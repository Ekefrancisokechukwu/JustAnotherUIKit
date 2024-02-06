import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Heading />
        <Sponsors />
        <About />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
