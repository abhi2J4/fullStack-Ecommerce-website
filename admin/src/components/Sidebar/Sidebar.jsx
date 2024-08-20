import React from 'react';
import  "./Siderbar.css"
import{Link} from "react-router-dom"
import add_product_icon from '../../assets/add_product-icon.jpeg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={"/addproduct"} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
         
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={"/listProduct"} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
         
            <img src={add_product_icon} className='addproduct-img' alt="" />
            <p> Product list</p>
        </div>
        </Link>
        <h1>hello</h1>
      
      
    </div>
  );
}

export default Sidebar;
