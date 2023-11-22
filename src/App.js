import NavBar from "./components/Bar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import gallery from "./components/gallery";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={gallery} />
        </Router>
      </div>
      <Footer />  
    </>
  );
}

export default App;
