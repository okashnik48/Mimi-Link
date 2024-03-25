import React from "react";

import Error from "../components/Error";
import RedirectComponent from "../components/RedirectComponent";
import Landing from "../components/Landing";

export const ROUTES_CONFIG = [
  {
    path: "/",
    element: <Landing />,
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
