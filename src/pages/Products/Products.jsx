import React from 'react'
import Cards from '../../components/Cards';
   import "./Products.css"
const Products = () => {
  return (
    <div className="featured-items">
  <div className="container">  
  <div className="section-heading">
  <div className="line-dec" />
  <h1 style={{color:"rgba(17, 12, 53, 0.972)", fontSize:"30px"}}>Featured Items</h1> 
    <div className="row">
      
        
          
          
          <Cards></Cards>
        </div>
      </div>

      </div>
    </div>
 


   
    

    
  )
}

export default Products;