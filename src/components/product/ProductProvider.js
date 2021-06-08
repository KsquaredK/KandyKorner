import React, { useState, createContext } from "react";

export const ProductContext = createContext();

// This component establishes what data can be used.
// Products is an empty array, setProducts is a function that modifies it.
// useState will hold and set the array of Products.
export const ProductProvider = (props) => {
  // defines a variable that holds the state, and a function that updates it
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return fetch("http://localhost:8088/products")
      .then((res) => res.json())
      .then(setProducts);
  };

  const addProduct = (productObj) => {
    return fetch("http://localhost:8088/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    }).then(getProducts);
  };

  /*
        You return a context provider which has the
        `Products` state, `getProducts` function,
        and the `addProduct` function as keys. This
        allows any child elements to access them. These are the only
        values I need to worry about - for the rest, just follow
        the pattern.
    */
  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        addProduct,
      }}>
      {props.children}
    </ProductContext.Provider>
  );
};