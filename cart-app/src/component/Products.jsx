import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import ProductDetails from "./ProductDetails";
function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("/api/products/")
          .then(res => res.json())
          .then(data => setProducts(data.products))
    }, [])

    const productsElement = products.map(product => (
      <div key={product.id} className="product-tile">
          <img src={product.imageUrl} alt="" />
          <div className="product-info" >
          <image src={product.image} alt="" />
            <h3>{product.name}</h3>
          </div>
          <i className={`product-type ${product.type} selected`}>{product.type}</i>
          <h5 className="product-quantity">Price: ${product.price}</h5>
        <Link to={`/products/${product.id}`}>
          <button className="add-product">Add to Cart</button>
        </Link>
      </div>
    ))


    return (
      <div className="Products">
        <div className="product-list">
          {productsElement}
        </div>
      </div>
    );
  }
  
  export default Products;