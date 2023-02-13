import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import React from "react";
import { paths } from "./paths";
import ItemPage from "./components/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={ paths.home } element={ <HomePage /> }/>
        <Route path={ `${paths.item}/:id` } element={ <ItemPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;