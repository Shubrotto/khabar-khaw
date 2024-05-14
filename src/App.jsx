import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./Layouts/Navbar/Navbar";
import Footer from "./Layouts/Footer/Footer";
import Items from "./componpents/Items/Items";
import About from "./componpents/About/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
