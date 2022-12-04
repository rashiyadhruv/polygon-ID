import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Check from "./pages/check/Check";
import GenerateClaim from "./pages/generateclaim/Generateclaim";
import { useState } from "react";

function App() {
  const [panno, setPanno] = useState("");
  const [properties, setProperties] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/check" />} exact />
          <Route path="/check" element={<Check />} exact />
          <Route path="/generateclaim" element={<GenerateClaim />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
