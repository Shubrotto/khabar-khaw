import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./Layouts/Navbar/Navbar";
import Footer from "./Layouts/Footer/Footer";
import Items from "./componpents/Items/Items";
import About from "./componpents/About/About";
import Contact from "./componpents/Contact/Contact";
import Item from "./componpents/Item/Item";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Reset from "./pages/Reset";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes outlet={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
