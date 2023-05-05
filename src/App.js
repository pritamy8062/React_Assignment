import "./App.css";
import React from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { useState, useEffect } from "react";
import MainApp from "./components/MainApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";
import BookTicket from "./components/BookTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="Summary" element={<Summary />} />
        <Route path="bookTicket" element={<BookTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
