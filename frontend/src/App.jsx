import { useState } from "react";
import "./App.css";
import LeftSection from "./components/LeftSection";
import Spinner from "./components/Spinner/Spinner";
import MainSection from "./components/MainSection";
import Info from "./Pages/Info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
