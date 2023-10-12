import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jar from "./Jar";
import Paper from "./Paper";

function App() {
  const location = useLocation();
  return (
    <>
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="Jar" element={<Jar />} />
          <Route path="Paper" element={<Paper />} />
        </Routes>
      </AnimatePresence>
    </div>
    </>
  )
}

export default App
