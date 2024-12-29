import React from 'react'
import './HeaderImg.css';
import iphone from '../../assets/iphone.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function CarsoulHeader() {
  return (
    <div className='headerdarkbg col-md-12 flex-wrap flex-sm-nowrap col-lg-9  mx-0 mx-lg-auto'>

        <div className="text-part text-center  text-md-start  d-md-flex flex-column align-items-start mx-auto mx-sm-0">
            <h1 className=' m-0 p-0'>Up to 10% off Voucher</h1>
          <p>iPhone 14 Series</p>
          <div className='border p-2  rounded'><a href="" className='me-2'>Shop Now</a><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <img src={iphone} className="d-block w-50 mx-auto ms-md-auto  " alt="..." />
      </div>
  )
}
