import React from "react";
import { Routes, Route } from "react-router-dom";

// views
import { HomeView, DetailsView } from "../views";

const Routers = () => {
  return (
    <Routes>
      <Route path="/product-a" element={<HomeView />} />
      <Route path="/product-a/details" element={<DetailsView />} />
    </Routes>
  );
};

export { Routers };
