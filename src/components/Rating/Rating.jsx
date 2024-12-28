import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

export default function Rating({rating}) {
  return (
    <div className="rating">
              { Array.apply(0, Array(Math.floor(rating))).map((x,i)=>{
                return <FontAwesomeIcon key={i} icon={faStar} style={{color:"#facf19"}}/>
              })
            }
            {rating - Math.floor(rating) !== 0 ?  <FontAwesomeIcon icon={faStarHalf} style={{color:"#facf19"}}/>
            :"" 
            }
              <span className='ms-2'>
                {rating}
              </span>
    
            </div>
  )
}
