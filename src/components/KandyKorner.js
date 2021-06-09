import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
    <NavBar />
    <ApplicationViews />
    </>
);


/* import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./KandyKorner.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
*/