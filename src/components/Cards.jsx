import React, {useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {fetchProduct} from "../store/ProductSlice"; 
import { useDispatch ,useSelector} from 'react-redux'
import { addTocart } from '../store/cartSlice'; 
import "./Cards.css"
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Cards = () => { 

    const dispatch = useDispatch(); 
    const products = useSelector ( (state) => state.products); 
  
    useEffect(() => {
      
        
      
    }, []);
    
  return (
     <Carousel className='cros' centerMode={true} responsive={responsive}>
        {products.map((product)=>{   
            return (
              <div key={product.id}> 
           
                <div  className="card col-4" style={{width:"200px"}}>
                   <Link  to={`/Details/${product.id}`}>
                    <img src={product.image} className="card-img-top" style={{height: "200px"}} alt="..." />
                    <div className="card-body"> 
                        <div className='title'>
                            <h5 className="card-title">{product.title}</h5> 
                        </div>
                        <p className="card-text"> {product.price}$</p> 
                        
                    </div> 
                        </Link>
                        <button  className="btn" onClick={()=>{ dispatch(addTocart(product)) } }>Add to Cart</button>
                    </div> 
                    
                    
                  </div>
                
            )
        })}
     </Carousel>
  )
}

export default Cards;

