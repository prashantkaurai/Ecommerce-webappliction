import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase thair products, interact with 
        customers, and conduct transactions without the need for a physical presence. E-commerce websites have gaines immense popularity due to their convenience, accessility, and the global reach they offers.</p>
        
        <p>E-commerce websites typically display products or services along with detailed description, images, prices and any available variation(e.g.sizes, colors). Each product
        usually has its own dedicated page with relevent information</p>
      </div>
    </div>
  )
}

export default DescriptionBox;
