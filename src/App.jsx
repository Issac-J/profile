import "./styles/App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolios from "./components/Portfolios";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Portfolios />
      <Contact />
    </div>
  );
}

export default App;
