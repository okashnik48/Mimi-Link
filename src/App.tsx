import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES_CONFIG } from "./configs/routers-config";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {ROUTES_CONFIG.map(({ element, path }, index) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
