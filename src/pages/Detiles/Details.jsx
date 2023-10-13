import "./Details.css"

import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import {  useSelector } from 'react-redux'; 



const Details = () => { 
     let product = useParams();
    let products = useSelector((state) => state.products);
    // const dispatch = useDispatch();
   
    useEffect(() => {
      console.log(products);
       
      
    }, []);
        
    let myProduct = products.find((pro)=> pro.id == product.id );
        
        
        
    return ( 
        
      <div className="container my-2">
        
  
         
          <div className="row">
            <div className="image-wrapper col-4">
              <img src={myProduct.image} alt="Product" />
            </div>
            <div className="image-wrapper col-8">
              <h5>{myProduct.title}</h5>
              <h6 className="text-info">{myProduct.price}</h6>
              <p>{myProduct.description}</p>
              <p>{myProduct.count}</p>
              <form action="" method="get" className="d-flex justify-content-around">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  name="quantity"
                  type="quantity"
                  className="quantity-text"
                  id="quantity"
                  onFocus={(e) => {
                    if (e.target.value === '1') {
                      e.target.value = '';
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value === '') {
                      e.target.value = '1';
                    }
                  }}
                  defaultValue={1}
                />
                <input type="submit" className="btn text-white" defaultValue="Order Now!" />
              </form>
            </div>
          </div>
       
          
       
      </div>

    );
  };
  
  export default Details;
