import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeList } from "./productType/ProductTypeList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import "./KandyKorner.css";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
          <Route exact path="/">
                  <h2>Kandy Korner</h2>
                  <h4>sweeeeeet!</h4>
                </Route>
              <Route path="/locations">
                <LocationList />
              </Route>
              {/* <Route path="/locations/create">
                <LocationForm />
              </Route> */}
              <Route path="/Products">
                <ProductList />
              </Route>
              {/* <Route exact path="/Products/create">
                <ProductForm />
              </Route> */}
            {/* //   <Route exact path="/Products/detail/:ProductId(\d+)">
            //     <ProductItem />
            //   </Route> */}
              <Route path="/ProductTypes">
                <ProductTypeList />
              </Route>
              {/* <Route exact path="/ProductTypes/create">
                <ProductTypeForm />
              </Route> */}
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </>
  );
};


/* Render the location list when http://localhost:3000/ */
/* Exact is needed on first route to differentiate it from others, 
            or else Home will render for every route */

/* Render the Product list when http://localhost:3000/Products */
/* Render the customer list when http://localhost:3000/customers */
/* Render the ProductType list when http://localhost:3000/ProductTypes */
