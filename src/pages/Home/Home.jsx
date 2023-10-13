import React from 'react'
import "./Home.css"
import Products from "../Products/Products" 
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
  <div className="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="caption">
            <h2>Unleash Your Style</h2>
            <div className="line-dec" />
            <p>"Discover Trendy Fashion for Every Occasion."<strong>Shop Now </strong>and Be Fabulous!</p>
             
            <div className="main-button">
              <Link to="/Products">Order Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <Products></Products> 
  
</div>

  )
}

export default Home
