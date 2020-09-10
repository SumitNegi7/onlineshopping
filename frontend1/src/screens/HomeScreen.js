import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import "./homescreen.css";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {/* {category && <h2>{category}</h2>} */}

      <div className="filter">

        <form onSubmit={submitHandler} className="search-container">
          <input
            name="searchKeyword"
            className="input"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className="prod-search" type="submit">
            &#128269;
            </button>
        </form>


        <div className="sort-container">
          Sort{" "}
          <select name="sortOrder" className="elect" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
            <ul className="products">
              {products.map((product) => (
                <li key={product._id}>
                  <div className="lil product">
                    <Link to={"/product/" + product._id}>
                      <img
                        className="product-image"
                        src={product.image}
                        alt="product"
                      />
                    </Link>
                    <div className="lil product-brand">{product.brand}</div>
                    <div className="lil product-name">
                      <Link to={"/product/" + product._id}>{product.name}</Link>
                    </div>

                    <div className="lil product-price">{product.price}/-Rs</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
    </>
  );
}
export default HomeScreen;
