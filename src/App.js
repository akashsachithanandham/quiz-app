import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/question" element={<HomePage />}></Route>
        <Route path="/score" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
