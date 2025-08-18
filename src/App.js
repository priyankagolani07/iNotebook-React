import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is an amazing React Course." />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
