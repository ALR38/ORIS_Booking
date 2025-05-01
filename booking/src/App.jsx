import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TourDetail from "./pages/TourDetail.jsx";
import ApplyTour from "./pages/ApplyTour.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/tour/:id" element={<TourDetail />} />
                <Route path="/apply-tour/:id" element={<ApplyTour />} />
            </Routes>
        </Router>
    );
}

export default App;
