import React from 'react'
import Rating from '../Rating/Rating'

export default function Review({ review }) {
    return (
        <div className='bg-light p-5 mb-4 rounded '>
            <div>
                <span>Review Date: <span className="">
                        {new Date(review.date).toLocaleString()}
                        </span></span>
            </div>
            <Rating rating={review.rating} />
            <div>
                <p>
                    Reviewer Name: <span className="text-success fw-bold">
                        {review.reviewerName}
                        </span>
                </p>
            </div>
            <div className="comment">
                <p>{review.comment}</p>
            </div>
        </div>
    )
}
