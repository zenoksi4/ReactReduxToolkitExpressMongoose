import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { paths } from "./paths";

import HomePage from "./components/pages/HomePage";
import ItemPage from "./components/pages/ItemPage";
import CreateItemPage from "./components/pages/CreateItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={ paths.home } element={ <HomePage /> }/>
        <Route path={ `${paths.item}/:id` } element={ <ItemPage /> }/>
        <Route path={ `${paths.createItem}` } element={ <CreateItemPage /> }/>
        <Route path={ `${paths.order}` } element={ <></> }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;