import React, { useContext, useEffect } from "react";
// This context provides an array of productTypeType objects, and 2 functions: getProductTypeType, addProductTypeType
import { ProductTypeContext } from "./ProductTypeProvider";
import "./ProductType.css";

export const ProductTypeList = () => {
    // This state changes when `getlroductTypes()` is invoked below
    //  useContext allows this module to use data & functions the parent component exposes
    //Any descendant - child, granchild, etc. - can invoke useContext to gain direct access to keys exposed
    const { productTypes, getProductTypes } = useContext(ProductTypeContext);
  
    //useEffect - reach out to the world for something not handled during render
    // State change causes re-render - be careful not to create infinite loop.
    useEffect(() => {
      console.log("ProductTypeList: useEffect - getProductTypes");
      getProductTypes();
      // The empty brackets cause this logic to run only once.
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  


    return (
        <>
          <h2>ProductTypes</h2>
          <section className="product-types">
            {console.log("ProductTypeList: Render", productTypes)}
            {productTypes.map((productType) => {
              return (
                <div
                  className="product-type"id={`product-type--${productType.id}`} key={productType.id}>
                  <div className="product-type__name">
                    <em>Name:</em> {productType.name}
                  </div>
                </div>
              );
            })}
          </section>
        </>
      );
    };