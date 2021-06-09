import React, { useState, createContext } from "react";

export const ProductTypeContext = createContext();

// This component establishes what data can be used.
// ProductTypes is an empty array, setProductTypes is a function that modifies it.
// useState will hold and set the array of ProductTypes.
export const ProductTypeProvider = (props) => {
  // defines a variable that holds the state, and a function that updates it
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then((res) => res.json())
      .then(setProductTypes);
  };

  const addProductType = (productTypeObj) => {
    return fetch("http://localhost:8088/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productTypeObj),
    }).then(getProductTypes);
  };

  /*
        You return a context provider which has the
        `ProductTypes` state, `getProductTypes` function,
        and the `addProductType` function as keys. This
        allows any child elements to access them. These are the only
        values I need to worry about - for the rest, just follow
        the pattern.
    */
  return (
    <ProductTypeContext.Provider
      value={{
        productTypes,
        getProductTypes,
        addProductType,
      }}>
      {props.children}
    </ProductTypeContext.Provider>
  );
};