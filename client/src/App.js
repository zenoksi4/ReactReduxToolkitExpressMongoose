import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { paths } from "./paths";

import HomePage from "./components/pages/HomePage";
import ItemPage from "./components/pages/ItemPage";
import CreateItemPage from "./components/pages/CreateItemPage";
import OrderPage from "./components/pages/OrderPage";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";

function App() {
  return (
    <PageWrapper>
            <Header />

    <BrowserRouter>
      <Routes>

        <Route path={ paths.home } element={ <HomePage /> }/>
        <Route path={ `${paths.item}/:id` } element={ <ItemPage /> }/>
        <Route path={ `${paths.createItem}` } element={ <CreateItemPage /> }/>
        <Route path={ `${paths.order}` } element={ <OrderPage /> }/>

      </Routes>
    </BrowserRouter>

    <Footer />

    </PageWrapper>
  );
}

export default App;