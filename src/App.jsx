import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import VendingMachine from "./VendingMachine.jsx";
import Food from "./Food.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
<Routes>
<Route path="/food/:foodName" element={<Food />} />
<Route path="/" element={<VendingMachine />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App;