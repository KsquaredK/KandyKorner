import React from "react";
import { Location } from "./location/Location"
import "./KandyKorner.css";



export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Sweeeeeeet!.</small>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
            <Location />
        </article>
    </>
)
