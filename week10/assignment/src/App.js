import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:page" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
