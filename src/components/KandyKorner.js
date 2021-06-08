import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";


import "./KandyKorner.css";

export const KandyKorner = () => (
  <>
    <Route>
    <h2> Kandy Korner </h2>
    <NavBar />
    <ApplicationViews />
    </Route>
  </>
);

