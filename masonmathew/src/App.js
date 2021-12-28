import './App.css';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
