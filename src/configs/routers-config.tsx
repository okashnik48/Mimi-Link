import React from "react";

import MainComponent from "../components/MainComponent";
import Error from "../components/Error";
import RedirectComponent from "../components/RedirectComponent";

export const ROUTES_CONFIG = [
  {
    path: "/",
    element: <MainComponent />,
  },
  {
    path: "/:shortUrl",
    element: <RedirectComponent />,
  },
  {
    path: "error",
    element: <Error />,
  },
];
