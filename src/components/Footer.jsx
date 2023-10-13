import Footer from 'rc-footer';

import "./Footer.css" 



const MyFooter = () => { 

  return(  
    <div className='footer text-light  p-5 justify-content-center footer align-items-center w-100 d-flex'>
    <div className='content text-center'><h3>Subscribe on SHOP now!</h3>
    <p>Integer vel turpis ultricies, lacinia ligula id, lobortis augue. Vivamus porttitor dui id dictum efficitur. Phasellus vel interdum elit.</p>
    <div className='form d-flex justify-content-between'>
         <input type="email" className="form-control w-50 text-light " id="exampleFormControlInput1" placeholder="name@example.com" />
    <div className='btn btn-light w-25'> SUBSRIPE  </div>
    </div>
    </div>
    

    </div>
    

  )
}

export default MyFooter;  




