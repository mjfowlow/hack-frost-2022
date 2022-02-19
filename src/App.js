import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Map from "./components/Map";
import WarningNotification from './components/WarningNotification';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/warning" element={<WarningNotification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
