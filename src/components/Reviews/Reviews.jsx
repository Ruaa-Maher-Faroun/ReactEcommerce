import React from 'react'
import Review from '../Review/Review'

export default function Reviews({reviews}) {
  return (
    <div className="w-100 py-4 px-3 rounded-3">
      <h3>Reviews</h3>
      {reviews.map((review,i) => {
          return <Review key={i} review={review}/>

      })}
    </div>
  )
}
