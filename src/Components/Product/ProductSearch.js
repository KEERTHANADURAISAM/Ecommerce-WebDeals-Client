import React, { useEffect } from "react";
import MetaData from "../meta/MetaData";
import { getProducts } from "../../Action/productActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/Product";
import { toast } from "react-toastify";
import Loader from "../Layout/Loader";
import Pagination from "react-js-pagination";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";


const ProductSearch = () => {
  const dispatch = useDispatch();
  const { product, loading, error,productCount,resPerPage } = useSelector(
    (state) => state.productsState
  );
const [currentPage,setCurrentPage] =useState(1)

// Search Product keyword
const {keyword} = useParams()


// pagination call back function
const setCurrentPageNo =(pageNo)=>{
  setCurrentPage(pageNo)
  }  
// get products and view error

useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(getProducts(keyword,currentPage));
  }, [error,dispatch,currentPage,keyword]);



  return (
    <>
    {loading ? <Loader/> :
    <Fragment>
      <MetaData title={"Buy Best Products"}></MetaData>
      <h1 id="products_heading">Search Products</h1>
        <section id="products" className="container mt-5">
      
      <div className="row">
        {product && product.map(product=>(
       <Product key={product._id} product={product}/>
))}
        
      </div>
     </section>
     <div className="d-flex justify-content-center mt-5">
     {productCount > 0 && productCount > resPerPage ?
      <Pagination 
      activePage={currentPage}
      onChange ={setCurrentPage}
      totalItemsCount={productCount}
      itemsCountPerPage={resPerPage}
      firstPageText={"First"}
      nextPageText={"Next"}
      lastPageText={"Last"}
      itemClass={"page-item"}
      linkClass={"page-link"}
      />
      :null}
     </div>
    </Fragment>
    }
    </>
  );
};

export default ProductSearch;
