// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTest from "./pages/mytest";
import "./App.css";


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MyTest />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;