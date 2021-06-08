import React from "react";
import { Location } from "./location/Location"
import { Product } from "./product/Product"
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
        <h2>Products</h2>
        <article className="products">
            <Product />
            <Product />
            <Product />
        </article>
    </>
)
