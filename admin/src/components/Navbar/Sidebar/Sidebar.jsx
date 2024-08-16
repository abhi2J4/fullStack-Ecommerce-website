import React from 'react';
import "./Sidebar.css"
import { Link } from 'react-router-dom';
import add_product_icon from  '../../assets/p'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src="" alt="" />
      </div>
      </Link>
    </div>
  );
}

export default Sidebar;
