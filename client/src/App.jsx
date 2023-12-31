import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jar from "./Jar";
import Paper from "./Paper";
import Stats from "./Stats";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="Jar" element={<Jar />} />
          <Route path="Paper" element={<Paper />} />
          <Route path="Stats" element={<Stats />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
