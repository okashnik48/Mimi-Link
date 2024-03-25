import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES_CONFIG } from "./configs/routers-config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {ROUTES_CONFIG.map(({ element, path }, index) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
