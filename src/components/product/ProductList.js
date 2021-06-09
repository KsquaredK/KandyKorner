import React, { useContext, useEffect } from "react";
// This context provides an array of product objects, and 2 functions: getProduct, addProduct
import { ProductContext } from "./ProductProvider";
import "./Product.css";

export const ProductList = () => {
    // This state changes when `getlroducts()` is invoked below
    //  useContext allows this module to use data & functions the parent component exposes
    //Any descendant - child, granchild, etc. - can invoke useContext to gain direct access to keys exposed
    const { products, getProducts } = useContext(ProductContext);
  
    //useEffect - reach out to the world for something not handled during render
    // State change causes re-render - be careful not to create infinite loop.
    useEffect(() => {
      console.log("ProductList: useEffect - getProducts");
      getProducts();
      // The empty brackets cause this logic to run only once.
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  


    return (
        <>
          <h2>Products</h2>
          <section className="products">
            {console.log("ProductList: Render", products)}
            {products.map((product) => {
              return (
                <div
                  className="product"id={`product--${product.id}`} key={product.id}>
                  <div className="product__name">
                    <em>Name: </em> {product.name}
                  </div>
                  <div className="product__price">
                    <em>Price: </em> ${product.price}
                  </div>
                </div>
              );
            })}
          </section>
        </>
      );
    };
    

