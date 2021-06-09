import React from "react";
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeList } from "./productType/ProductTypeList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import "./KandyKorner.css";




export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Sweeeeeeet!</small>
        <article className="locations">
            < LocationProvider >
                <LocationList />
            </LocationProvider>
        </article>
        <article className="products">
            < ProductProvider >
            < ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
            </ProductProvider>
        </article>
    </>
)
