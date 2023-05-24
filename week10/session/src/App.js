import { Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:username" element={<Profile />}></Route>
        <Route path="/books" element={<Books />}>
          <Route path=":id" element={<Book />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
