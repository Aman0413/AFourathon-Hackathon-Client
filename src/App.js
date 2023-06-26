import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Elective from "./pages/ElectiveSubject";

function App() {
  return (
    <div className="App flex">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/elective" element={<Elective />} />
      </Routes>
    </div>
  );
}

export default App;
