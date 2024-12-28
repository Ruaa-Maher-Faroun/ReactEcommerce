import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Rating from '../Rating/Rating'

export default function ProductCaption({data}) {
  return (
    <div>
       <div className="caption px-3">
      <p>{data.description}</p>
      <h4 >Price: <span className='price'>${data.price}</span></h4>
      <span>Tags: </span>
        {data.tags.map((tag,i)=> <span key={i} className='badge bg-primary me-2'>{tag}</span>)}
        <Rating rating={data.rating} />
     <div className="btns mt-5 d-flex gap-3 align-items-center">
     <button className='btn btn-dark'>Add to cart</button>
      <button className="text-dark border-0 fs-5 bg-transparent " ><FontAwesomeIcon icon={faHeart} /></button>

     </div>
     
    </div>
    </div>
  )
}
